"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "971569557927"; 
  const message = encodeURIComponent(
    "Hello! I visited your website and would like to know more."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        px-4 py-2
        rounded-full
        bg-white dark:bg-neutral-900
        border border-black/10 dark:border-white/10
        shadow-xl
        hover:shadow-2xl
        transition-all duration-300
      "
    >
      {/* Heart Pulse Circle */}
      <span className="relative flex h-10 w-10">
        {/* Pulse */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
        
        {/* Solid Icon */}
        <span className="relative flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-white">
          <MessageCircle size={20} strokeWidth={2} />
        </span>
      </span>

      {/* Text */}
      <span className="text-sm font-medium text-black dark:text-white whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}