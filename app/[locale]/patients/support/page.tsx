"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { rules } from "./rules";

type Message = {
  role: "user" | "model";
  text: string;
  isError?: boolean;
};

export default function ChatWindow() {
  const [chatHistory, setChatHistory] = useState<Message[]>([
    { role: "model", text: "Hello! How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const systemRules = rules;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const generateBotResponse = async (updatedHistory: Message[]) => {
    setChatHistory((prev) => [...prev, { role: "model", text: "Thinking..." }]);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedHistory.map(({ role, text }) => ({
            role,
            content: text,
          })),
          system: systemRules,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Error occurred.");

      const botText = data.response?.trim() || "No response received.";
      setChatHistory((prev) =>
        prev.map((msg) =>
          msg.text === "Thinking..." ? { role: "model", text: botText } : msg
        )
      );
    } catch (error: unknown) {
      let errorMessage = "Something went wrong.";
      if (error instanceof Error) errorMessage = error.message;
      setChatHistory((prev) =>
        prev.map((msg) =>
          msg.text === "Thinking..."
            ? { role: "model", text: errorMessage, isError: true }
            : msg
        )
      );
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessage: Message = { role: "user", text: inputValue.trim() };
    const updatedHistory = [...chatHistory, newMessage];
    setChatHistory(updatedHistory);
    setInputValue("");
    generateBotResponse(updatedHistory);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gradient-to-b from-cyan-700 via-cyan-400 to-cyan-300">
      <motion.div
        key="chat"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-[70rem] h-[34rem] max-w-full max-h-full rounded-3xl bg-white/90 backdrop-blur-lg shadow-2xl 
                 ring-1 ring-black/10 overflow-hidden flex flex-col border border-white/40"
      >
        {/* Заголовок */}
        <div className="px-4 py-3 bg-gradient-to-r from-[#0e8393] to-[#48d2e4] backdrop-blur-sm border-b border-white/40 flex justify-between items-center rounded-t-3xl">
          <h3 className="font-semibold text-white drop-shadow-md">
            ✨ Chat Assistant
          </h3>
        </div>

        {/* Сообщения */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm text-gray-700 bg-gradient-to-b from-white/70 to-white/40">
          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              className={`px-3 py-2 rounded-xl shadow-sm max-w-[40%] whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-[#1197a9] to-[#48d2e4] text-white self-end ml-auto"
                  : msg.isError
                  ? "bg-red-200 text-red-700"
                  : "bg-indigo-50 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Поле ввода */}
        <div className="border-t border-white/40 p-3 flex gap-2 bg-white/60 backdrop-blur-md">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0e8393] to-[#478e97] text-white text-sm font-medium shadow-md hover:opacity-90 transition"
          >
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
}
