import { FocusCards } from "@/components/UI/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Лечение за границей",
      src: "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww",
    },
    {
      title: "Оздоровительные курорты",
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Современные клиники Европы",
      src: "https://images.unsplash.com/photo-1639772823907-a716be4bdecc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1lZGljaW5lfGVufDB8fDB8fHww",
    },
    {
      title: "Реабилитация у моря",
      src: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fG1lZGljaW5lfGVufDB8fDB8fHww",
    },
    {
      title: "Диагностика и check-up туры",
      src: "https://images.unsplash.com/photo-1603843722974-3a4031f9f97c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxtZWRpY2luZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Пластическая хирургия и эстетика",
      src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Стоматология и имплантация",
        src: "https://plus.unsplash.com/premium_photo-1664373622216-648a6861e9e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk0fHxtZWRpY2luZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        title: "Онкология и лечение рака",
        src: "https://plus.unsplash.com/premium_photo-1664456804419-9f8eddb21a2e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE0fHxtZWRpY2luZXxlbnwwfHwwfHx8MA%3D%3D",
    }
  ];

  return <FocusCards cards={cards} />;
}
