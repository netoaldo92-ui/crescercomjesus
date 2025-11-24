import { MessageCircle } from "lucide-react";

export const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber" // Substitua pelo seu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-auto h-14 px-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="ml-2 font-semibold hidden sm:inline">Fale conosco no WhatsApp</span>
    </a>
  );
};