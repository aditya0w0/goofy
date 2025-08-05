'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import MobileNav from './Navigation/MobileNav';

export default function Navbar({ className = '' }) {
  return (
    <nav
      className={`sticky top-0 bg-white/10 backdrop-blur-md w-full md:mt-2 max-w-4xl mx-auto md:rounded-md shadow-sm z-50 ${className}`}
    >
      <div className="flex px-6 py-2 items-center">
        <div className="flex-1">
          <img
            src="/google.svg"
            alt="Google Logo"
            width={40}
            height={20}
            loading="eager"
            style={{ display: 'block' }}
          />
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex md:flex-row items-center gap-x-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-x-4">
            <Button className="hidden md:block">Contact Us</Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
