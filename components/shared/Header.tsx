'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  variant?: 'marketing' | 'legal';
}

export function Header({ variant = 'marketing' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-soft ${
      variant === 'legal' ? 'border-b border-flocken-sand' : ''
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/assets/flocken/logo/logo_icon_flocken_large_1x1.png"
              alt="Flocken"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <span className="text-2xl font-bold text-flocken-brown">Flocken</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#funktioner" className="text-flocken-brown hover:text-flocken-olive transition-colors">
              Funktioner
            </Link>
            <Link href="/#om-appen" className="text-flocken-brown hover:text-flocken-olive transition-colors">
              Om appen
            </Link>
            
            {variant === 'marketing' && (
              <Link href="/download" className="btn-primary">
                Ladda ner appen
              </Link>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-flocken-brown hover:text-flocken-olive transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-flocken-sand">
            <Link 
              href="/#funktioner" 
              className="block py-2 text-flocken-brown hover:text-flocken-olive transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Funktioner
            </Link>
            <Link 
              href="/#om-appen" 
              className="block py-2 text-flocken-brown hover:text-flocken-olive transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Om appen
            </Link>
            {variant === 'marketing' && (
              <Link href="/download" className="btn-primary w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
                Ladda ner appen
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

