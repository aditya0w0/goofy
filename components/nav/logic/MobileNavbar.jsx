import Link from 'next/link';
import { Home, Briefcase, User, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Services', href: '/', icon: Briefcase },
  { label: 'About', href: '/', icon: User },
  { label: 'Contact', href: '/', icon: Phone },
];

export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-40">
      <div className="flex justify-around py-2">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex flex-col items-center p-2"
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
