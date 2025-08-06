"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import X from "../Svg/X";
import Mail from "../Svg/Mail";

const Bot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "model", text: "", hideInChat: true },
  ]);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const API_URL =
    "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=AIzaSyBhi6q0F8zS8g-JtUw44E-HhPuw1mzoBNc";

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const WhoIsBot = [
    "You are a helpful, empathetic, and professional assistant for Adal Medicine, a premium medical tourism company based in Turkiye.",
    "Do not mention that you are a bot or AI.",
    "You are not model of Google Gemini, but a specialized assistant for Adal Medicine.",
    "Reply maximum of 3-5 sentences",
    "Always respond politely, clearly, and concisely.",
    "Your main goal is to help users understand their medical options, book consultations, and feel supported throughout their treatment journey.",
    "Never provide a medical diagnosis or specific treatment advice — always recommend seeing a certified doctor.",
    "You can explain the services offered by Adal Medicine, including diagnostics, surgeries, recovery options, and support services (transfers, translation, accommodation).",
    "Use warm and reassuring language to make users feel comfortable and safe.",
    "If the user shares a medical file or image, tell them it will be reviewed by our medical team and encourage them to book a consultation.",
    "Keep answers under 3–4 short paragraphs unless the user asks for more detail.",
    "Avoid controversial topics, personal opinions, or non-medical conversations.",
    "If unsure, recommend the user contact a human medical coordinator for accurate information.",
  ];

  const isAllowedMessage = (text: string) => {
    const lower = text.toLowerCase();
    return !WhoIsBot.some((phrase) => lower.includes(phrase));
  };

  const sendMessage = async () => {
    const userInput = input.trim();
    if (!userInput) return;

    if (!isAllowedMessage(userInput)) {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "model",
          text: "Извините, это сообщение нарушает правила. Пожалуйста, переформулируйте.",
          hideInChat: false,
        },
      ]);
      setInput("");
      return;
    }

    const newHistory = [
      ...chatHistory,
      { role: "user", text: userInput, hideInChat: false },
    ];
    setChatHistory([
      ...newHistory,
      { role: "model", text: "Думаю...", hideInChat: false },
    ]);
    setInput("");

    await generateBotResponse(newHistory);
  };

  const generateBotResponse = async (
    history: { role: string; text: string; hideInChat: boolean }[]
  ) => {
    const messages = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: messages }),
      });

      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
        ?.replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      if (!reply) throw new Error("Ошибка при получении ответа");

      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Думаю..."),
        { role: "model", text: reply, hideInChat: false },
      ]);
    } catch (error) {
      let errorMessage = "Ошибка при получении ответа";
      if (
        error &&
        typeof error === "object" &&
        "message" in error &&
        typeof (error as { message?: unknown }).message === "string"
      ) {
        errorMessage = (error as { message: string }).message;
      }
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Думаю..."),
        {
          role: "model",
          text: errorMessage,
          hideInChat: false,
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-0 right-6 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white w-[300px] h-[450px] shadow-2xl rounded-t-2xl flex flex-col"
          >
            <div className="bg-primary text-white px-4 py-2 rounded-t-2xl flex justify-between items-center">
              <span>Чат-бот</span>
              <button
                onClick={() => setOpen(false)}
                className="font-bold text-xl"
              >
                <X />
              </button>
            </div>
            <div
              ref={chatBodyRef}
              className="flex-1 p-3 overflow-y-auto text-sm space-y-2"
            >
              {chatHistory
                .filter((msg) => !msg.hideInChat)
                .map((msg, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-2 rounded-xl max-w-[90%] ${
                      msg.role === "user"
                        ? "bg-blue-100 self-end ml-auto"
                        : msg.role === "model"
                        ? "bg-blue-50 text-black"
                        : "bg-gray-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
            </div>
            <div className="p-2 border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введите сообщение"
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-primary text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600"
              >
                Отправить
              </button>
            </div>
          </motion.div>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="rounded-tl-2xl px-6 py-3 text-white bg-gradient-to-r from-[#14a9b4] via-cyan-500 to-teal-600"
          >
            <span className="mr-5">
              <Mail />
            </span>
            Отправь сообщение
          </button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Bot;
