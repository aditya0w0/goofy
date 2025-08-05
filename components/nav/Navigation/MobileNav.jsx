import Link from 'next/link';
import { Button } from '../../ui/button';
import { AlignLeft, X } from 'lucide-react';
import { useMobileMenu } from '../useMobileMenu';

export default function MobileNav() {
  const { isOpen, navRef, handleClick } = useMobileMenu();

  return (
    <div className="md:hidden" ref={navRef}>
      <Button
        onClick={handleClick}
        variant="ghost"
        size="icons"
        className="text-white hover:text-blue-400"
      >
        {isOpen ? <X className="h-6 w-6" /> : <AlignLeft className="h-6 w-6" />}
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div
        className={`absolute top-full left-0 right-0 mx-4 mt-2 bg-red-500 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] origin-top backdrop-blur-sm
          ${
            isOpen
              ? 'opacity-100 scale-100 translate-y-0 max-h-96'
              : 'opacity-0 scale-95 -translate-y-2 max-h-0 pointer-events-none'
          }`}
      >
        <div className="mx-auto flex flex-col items-center">
          <ul className="flex flex-col">
            <li
              className={`w-full text-center border-b border-red-400/30 last:border-b-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              } hover:bg-red-600/80`}
              style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}
            >
              <Link
                href="/"
                onClick={handleClick}
                className="block py-4 px-6 text-white font-medium"
              >
                Home
              </Link>
            </li>
            <li
              className={`w-full text-center border-b border-red-400/30 last:border-b-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              } hover:bg-red-600/80`}
              style={{ transitionDelay: isOpen ? '150ms' : '0ms' }}
            >
              <Link
                href="/"
                onClick={handleClick}
                className="block py-4 px-6 text-white font-medium"
              >
                Services
              </Link>
            </li>
            <li
              className={`w-full text-center border-b border-red-400/30 last:border-b-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              } hover:bg-red-600/80`}
              style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}
            >
              <Link
                href="/"
                onClick={handleClick}
                className="block py-4 px-6 text-white font-medium"
              >
                About
              </Link>
            </li>
            <li
              className={`w-full text-center border-b border-red-400/30 last:border-b-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              } hover:bg-red-600/80`}
              style={{ transitionDelay: isOpen ? '250ms' : '0ms' }}
            >
              <Link
                href="/"
                onClick={handleClick}
                className="block py-4 px-6 text-white font-medium"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
