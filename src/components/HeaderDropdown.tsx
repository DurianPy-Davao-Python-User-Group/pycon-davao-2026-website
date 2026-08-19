'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SponsorshipOption } from '@/components/MobileMenu';

export interface HeaderDropdownProps {
  label: string;
  options: SponsorshipOption[];
  className?: string;
}

export default function HeaderDropdown({ label, options, className }: HeaderDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
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

  return (
    <div
      ref={dropdownRef}
      className={cn('relative', className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          'group focus-visible:outline-pycon-header-hover flex cursor-pointer items-center gap-1.5 rounded-md text-center font-sans text-base leading-none font-bold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 lg:text-lg xl:text-[22px] 2xl:text-[24px]',
          isOpen
            ? 'text-pycon-header-hover'
            : 'text-pycon-header-text hover:text-pycon-header-hover',
        )}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            'size-5 transition-transform duration-200 xl:size-6',
            isOpen
              ? 'text-pycon-header-hover rotate-180'
              : 'text-pycon-header-text group-hover:text-pycon-header-hover',
          )}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2">
          <div className="bg-pycon-beige border-pycon-header-text/15 animate-in fade-in slide-in-from-top-2 w-[260px] rounded-2xl border p-2 shadow-[0_12px_32px_0_rgba(7,46,71,0.12)] duration-150">
            <div className="flex flex-col gap-1">
              {options.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item text-pycon-header-text hover:text-pycon-header-hover flex items-center justify-between rounded-xl px-4 py-3 font-sans text-base font-bold transition-colors duration-150 xl:text-lg"
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
  );
}
