// src/components/react/MobileMenu.jsx
import React, { useState } from 'react';

// Tailwind classes for the burger lines, defined in CSS in the Astro original.
// We'll define them as constants here for use in className.
const baseLineClasses = 'block h-[3px] w-7 bg-neutral-dark transition-all duration-300 ease-in-out';
const openTopClasses = 'translate-y-[8px] rotate-45 !bg-[#111]';
const openMiddleClasses = 'opacity-0';
const openBottomClasses = 'translate-y-[-8px] rotate-[-45deg] !bg-[#111]';

export default function MobileMenu({ navItems }) {
  // 1. Use React state to manage the menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // 2. Function to toggle the state (used for both button and overlay click)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">

      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu} 
        aria-label="Toggle navigation" 
        className="flex flex-col gap-1.5 z-[60] relative"
      >
        {/* Burger Line 1 (Top) */}
        <span 
          className={`${baseLineClasses} ${isOpen ? openTopClasses : ''}`}
        ></span>
        {/* Burger Line 2 (Middle) */}
        <span 
          className={`${baseLineClasses} ${isOpen ? openMiddleClasses : ''}`}
        ></span>
        {/* Burger Line 3 (Bottom) */}
        <span 
          className={`${baseLineClasses} ${isOpen ? openBottomClasses : ''}`}
        ></span>
      </button>

      {/* Dark Overlay */}
      {/* 3. Overlay visibility depends on the state */}
      <div 
        onClick={toggleMenu} 
        className={`fixed inset-0 bg-black/40 z-40 ${isOpen ? '' : 'hidden'}`}
      ></div>

      {/* Slide-out Panel */}
      {/* 4. Panel position depends on the state */}
      <nav 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 
                    transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 space-y-6">
          {navItems.map((item) => (
            // 5. Clicking a link should also close the menu
            <a 
              key={item.href} // Add a key for React rendering
              href={item.href} 
              onClick={toggleMenu}
              className="block text-lg font-medium text-neutral-dark hover:text-accent-primary"
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
