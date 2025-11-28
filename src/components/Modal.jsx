import React from "react";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
      <div className="bg-panel rounded-2xl border border-muted p-6 max-w-3xl w-full shadow-soft relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-sub hover:text-white text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4">{title}</h2>

        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
