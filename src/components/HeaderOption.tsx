'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface HeaderOptionProps {
  href: string;
  label?: string;
  children?: React.ReactNode;
  isExternal?: boolean;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
}

export default function HeaderOption({
  href,
  label,
  children,
  isExternal,
  onClick,
  className,
  activeClassName,
}: HeaderOptionProps) {
  const pathname = usePathname();
  const autoExternal = isExternal ?? href.startsWith('http');
  const isActive = !autoExternal && pathname === href;

  const combinedClasses = cn(
    'text-pycon-header-text hover:text-pycon-header-hover font-nav font-bold transition-colors duration-200',
    className,
    isActive && activeClassName,
  );

  const content = children || label;

  if (autoExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={combinedClasses}
      aria-current={isActive ? 'page' : undefined}
    >
      {content}
    </Link>
  );
}
