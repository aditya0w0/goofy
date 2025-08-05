import { useState, useEffect, useRef } from 'react';

export function useMobileMenu() {
  const [isOpen, setisOpen] = useState(false);
  const navRef = useRef(null);

  const handleClick = () => {
    setisOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setisOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return { isOpen, setisOpen, navRef, handleClick };
}
