import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function DesktopNav() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];
  return (
    <nav className="w-full">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/google.svg"
            width={30}
            height={30}
            alt="logo"
            className="h-8 w-8"
          />
        </div>

        {/* Centered Navigation Items */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-x-6">
          {navItems.slice(0, 3).map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 hover:text-gray-600 transition-colors"
            >
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="flex-shrink-0">
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
}
