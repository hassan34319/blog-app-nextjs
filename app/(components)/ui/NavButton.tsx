'use client'
import React from "react";

export const Scrollsubscribe = () => {
    const element = document.getElementById("subscribe");
    if (element) {
      // 👇 Will scroll smoothly to the subscribe section 
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

function NavButton() {
  return (
    <button
      onClick={Scrollsubscribe}
      className="bg-wh-100 py-2 px-8 text-bl-100 text-sm font-bold drop-shadow-lg rounded-md"
    >
      Subscribe
    </button>
  );
}

export default NavButton;
