'use client';

import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import HeaderOption from '@/components/HeaderOption';

export interface NavOption {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SponsorshipOption {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  primaryOptions: NavOption[];
  secondaryOptions: NavOption[];
  sponsorshipOptions: SponsorshipOption[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  primaryOptions,
  secondaryOptions,
  sponsorshipOptions,
}: MobileMenuProps) {
  return (
    <div
      className={cn(
        'grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden',
        isOpen
          ? 'pointer-events-auto grid-rows-[1fr] opacity-100'
          : 'pointer-events-none grid-rows-[0fr] opacity-0',
      )}
    >
      <div className="overflow-hidden">
        <div className="border-pycon-header-text/10 bg-pycon-beige rounded-b-[20px] border-t px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4 text-center" aria-label="Mobile Navigation">
            {/* Primary Options (Home, Code of Conduct, etc.) */}
            {primaryOptions.map((option) => (
              <HeaderOption
                key={option.label}
                href={option.href}
                label={option.label}
                isExternal={option.isExternal}
                onClick={onClose}
                className="py-2 text-xl"
                activeClassName={cn(option.href !== '/' && 'text-pycon-header-hover')}
              />
            ))}

            {/* Mobile Sponsorship Prospectus Accordion */}
            <MobileDropdownAccordion
              label="Sponsorship Prospectus"
              options={sponsorshipOptions}
              onClose={onClose}
            />

            {/* Secondary Options (About DurianPy, etc.) */}
            {secondaryOptions.map((option) => (
              <HeaderOption
                key={option.label}
                href={option.href}
                label={option.label}
                isExternal={option.isExternal}
                onClick={onClose}
                className="py-2 text-xl"
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

interface MobileDropdownAccordionProps {
  label: string;
  options: SponsorshipOption[];
  onClose: () => void;
}

function MobileDropdownAccordion({ label, options, onClose }: MobileDropdownAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'flex w-full items-center justify-center gap-2 py-2 font-sans text-xl font-bold transition-colors duration-200',
          isOpen
            ? 'text-pycon-header-hover'
            : 'text-pycon-header-text hover:text-pycon-header-hover',
        )}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            'size-5 transition-transform duration-200',
            isOpen ? 'text-pycon-header-hover rotate-180' : 'text-pycon-header-text',
          )}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn(
          'grid w-full transition-[grid-template-rows,opacity] duration-200 ease-in-out',
          isOpen
            ? 'pointer-events-auto grid-rows-[1fr] opacity-100'
            : 'pointer-events-none grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="my-1 flex w-full flex-col gap-2 rounded-xl px-4 pt-2 pb-1">
            {options.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-pycon-header-text hover:text-pycon-header-hover flex items-center justify-center gap-1.5 py-2 font-sans text-lg font-bold transition-colors duration-200"
              >
                <span>{option.label}</span>
                <ExternalLink className="size-3.5 opacity-60" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
