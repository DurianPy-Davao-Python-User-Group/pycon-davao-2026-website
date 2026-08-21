'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import HeaderOption from '@/components/HeaderOption';
import HeaderDropdown from '@/components/HeaderDropdown';
import MobileMenu, { type NavOption, type SponsorshipOption } from '@/components/MobileMenu';
import headerLogo from '@/assets/header/header-pycon-logo.svg';

const PRIMARY_NAV_OPTIONS: NavOption[] = [
  { label: 'Home', href: '/' },
  { label: 'Code of Conduct', href: '/code-of-conduct' },
];

const SPONSORSHIP_OPTIONS: SponsorshipOption[] = [
  {
    label: 'Sponsors',
    href: 'https://drive.google.com/file/d/1tjZO6lTiZJ3WhD7gU9ZZvloyQ7bvvNnK/view?usp=drive_link',
  },
  {
    label: 'Concessionaires',
    href: 'https://drive.google.com/file/d/11TWooqLmDAW_OTgGbGS24enoNucsvXWc/view?usp=drive_link',
  },
];

const SECONDARY_NAV_OPTIONS: NavOption[] = [
  {
    label: 'About DurianPy',
    href: 'https://durianpy.org',
    isExternal: true,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const desktopOptionClass =
    'focus-visible:outline-pycon-header-hover rounded-md text-center text-sm leading-none whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 lg:text-base xl:text-lg 2xl:text-xl';

  return (
    <header
      ref={headerRef}
      className="bg-pycon-beige sticky top-0 z-50 w-full rounded-b-[20px] shadow-[0_8px_30px_rgba(7,46,71,0.08),0_2px_8px_rgba(7,46,71,0.04)] transition-all duration-300"
    >
      <div className="flex h-[70px] w-full items-center justify-between px-6 sm:h-[82px] sm:px-10 md:h-[92px] lg:justify-start lg:gap-14 xl:gap-20 2xl:gap-24">
        {/* Logo */}
        <Link
          href="/"
          className="focus-visible:outline-pycon-header-hover flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label="PyCon Davao 2026 Home"
        >
          <div className="relative flex h-[48px] w-[87px] items-center justify-center sm:h-[58px] sm:w-[105px] md:h-[68px] md:w-[124px]">
            <Image
              src={headerLogo}
              alt="PyCon Davao 2026 Logo"
              width={152}
              height={83}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center lg:flex lg:gap-6 xl:gap-8 2xl:gap-12"
          aria-label="Main Navigation"
        >
          {/* Primary Nav Options (Home, Code of Conduct, etc.) */}
          {PRIMARY_NAV_OPTIONS.map((option) => (
            <HeaderOption
              key={option.label}
              href={option.href}
              label={option.label}
              isExternal={option.isExternal}
              className={desktopOptionClass}
            />
          ))}

          {/* Sponsorship Prospectus Dropdown */}
          <HeaderDropdown label="Sponsorship Prospectus" options={SPONSORSHIP_OPTIONS} />

          {/* Secondary Nav Options (About DurianPy, etc.) */}
          {SECONDARY_NAV_OPTIONS.map((option) => (
            <HeaderOption
              key={option.label}
              href={option.href}
              label={option.label}
              isExternal={option.isExternal}
              className={desktopOptionClass}
            />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="ml-auto flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-pycon-header-text hover:text-pycon-header-hover focus-visible:outline-pycon-header-hover inline-flex items-center justify-center rounded-xl p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        primaryOptions={PRIMARY_NAV_OPTIONS}
        secondaryOptions={SECONDARY_NAV_OPTIONS}
        sponsorshipOptions={SPONSORSHIP_OPTIONS}
      />
    </header>
  );
}
