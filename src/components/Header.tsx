'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import headerLogo from '@/assets/header/header-pycon-logo.svg';

interface DropdownItem {
  label: string;
  href: string;
}

const SPONSORSHIP_OPTIONS: DropdownItem[] = [
  {
    label: 'Sponsors',
    href: 'https://drive.google.com/file/d/1tjZO6lTiZJ3WhD7gU9ZZvloyQ7bvvNnK/view?usp=drive_link',
  },
  {
    label: 'Concessionaires',
    href: 'https://drive.google.com/file/d/11TWooqLmDAW_OTgGbGS24enoNucsvXWc/view?usp=drive_link',
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSponsorshipOpen, setMobileSponsorshipOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileSponsorshipOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
        setMobileSponsorshipOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="bg-pycon-beige sticky top-0 z-50 w-full rounded-b-[20px] shadow-[0_8px_30px_rgba(49,37,65,0.12),0_2px_8px_rgba(49,37,65,0.06)] transition-all duration-300">
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
          {/* Home */}
          <Link
            href="/"
            className="font-nav text-pycon-header-text hover:text-pycon-header-hover focus-visible:outline-pycon-header-hover rounded-md text-center text-base leading-none font-bold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 lg:text-lg xl:text-[22px] 2xl:text-[24px]"
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>

          {/* Code of Conduct */}
          <Link
            href="/code-of-conduct"
            className="font-nav text-pycon-header-text hover:text-pycon-header-hover focus-visible:outline-pycon-header-hover rounded-md text-center text-base leading-none font-bold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 lg:text-lg xl:text-[22px] 2xl:text-[24px]"
            aria-current={pathname === '/code-of-conduct' ? 'page' : undefined}
          >
            Code of Conduct
          </Link>

          {/* Sponsorship Prospectus with Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className={`group font-nav focus-visible:outline-pycon-header-hover flex cursor-pointer items-center gap-1.5 rounded-md text-center text-base leading-none font-bold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 lg:text-lg xl:text-[22px] 2xl:text-[24px] ${
                dropdownOpen
                  ? 'text-pycon-header-hover'
                  : 'text-pycon-header-text hover:text-pycon-header-hover'
              }`}
            >
              <span>Sponsorship Prospectus</span>
              <ChevronDown
                className={`size-5 transition-transform duration-200 xl:size-6 ${
                  dropdownOpen
                    ? 'text-pycon-header-hover rotate-180'
                    : 'text-pycon-header-text group-hover:text-pycon-header-hover'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2">
                <div className="bg-pycon-beige border-pycon-header-text/15 animate-in fade-in slide-in-from-top-2 w-[260px] rounded-2xl border p-2 shadow-[0_12px_32px_0_rgba(49,37,65,0.15)] duration-150">
                  <div className="flex flex-col gap-1">
                    {SPONSORSHIP_OPTIONS.map((option) => (
                      <a
                        key={option.label}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/item font-nav text-pycon-header-text hover:text-pycon-header-hover flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors duration-150 xl:text-lg"
                      >
                        <span>{option.label}</span>
                        <ExternalLink
                          className="group-hover/item:text-pycon-header-hover size-4 opacity-60 transition-all group-hover/item:opacity-100"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About DurianPy */}
          <a
            href="https://durianpy.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-nav text-pycon-header-text hover:text-pycon-header-hover focus-visible:outline-pycon-header-hover rounded-md text-center text-base leading-none font-bold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 lg:text-lg xl:text-[22px] 2xl:text-[24px]"
          >
            About DurianPy
          </a>
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

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="border-pycon-header-text/10 bg-pycon-beige animate-in fade-in slide-in-from-top-2 rounded-b-[20px] border-t px-6 py-6 shadow-lg duration-200 lg:hidden">
          <nav className="flex flex-col gap-4 text-center" aria-label="Mobile Navigation">
            {/* Mobile Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-nav text-pycon-header-text hover:text-pycon-header-hover py-2 text-xl font-bold transition-colors duration-200"
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>

            {/* Mobile Code of Conduct */}
            <Link
              href="/code-of-conduct"
              onClick={() => setMobileMenuOpen(false)}
              className="font-nav text-pycon-header-text hover:text-pycon-header-hover py-2 text-xl font-bold transition-colors duration-200"
              aria-current={pathname === '/code-of-conduct' ? 'page' : undefined}
            >
              Code of Conduct
            </Link>

            {/* Mobile Sponsorship Prospectus Accordion */}
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => setMobileSponsorshipOpen((prev) => !prev)}
                className="font-nav text-pycon-header-text hover:text-pycon-header-hover flex w-full items-center justify-center gap-2 py-2 text-xl font-bold transition-colors duration-200"
                aria-expanded={mobileSponsorshipOpen}
              >
                <span>Sponsorship Prospectus</span>
                <ChevronDown
                  className={`size-5 transition-transform duration-200 ${
                    mobileSponsorshipOpen ? 'text-pycon-header-hover rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {mobileSponsorshipOpen && (
                <div className="my-1 flex w-full flex-col gap-2 rounded-xl px-4 pt-2 pb-1">
                  {SPONSORSHIP_OPTIONS.map((option) => (
                    <a
                      key={option.label}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-nav text-pycon-header-text hover:text-pycon-header-hover flex items-center justify-center gap-1.5 py-2 text-lg font-bold transition-colors duration-200"
                    >
                      <span>{option.label}</span>
                      <ExternalLink className="size-3.5 opacity-60" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile About DurianPy */}
            <a
              href="https://durianpy.org"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="font-nav text-pycon-header-text hover:text-pycon-header-hover py-2 text-xl font-bold transition-colors duration-200"
            >
              About DurianPy
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
