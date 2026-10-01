import type { StaticImageData } from 'next/image';

export type SpeakerType = 'keynote' | 'talk' | 'sprint';

export interface Speaker {
  id: number;
  firstName: string;
  lastName: string;
  speakerType: SpeakerType;
  designation: string;
  socials: string | null;
  image?: StaticImageData | string;
}

export interface SpeakerGroup {
  type: SpeakerType;
  title: string;
  badgeClassName: string;
  borderClassName: string;
  gradientClassName: string;
}

// Full class strings so Tailwind can detect them at build time.
export const speakerGroups: SpeakerGroup[] = [
  {
    type: 'keynote',
    title: 'Keynote Speakers',
    badgeClassName: 'bg-primary',
    borderClassName: 'border-primary',
    gradientClassName: 'from-primary/40',
  },
  {
    type: 'talk',
    title: 'Tech Talk Speakers',
    badgeClassName: 'bg-pycon-orange-accent',
    borderClassName: 'border-pycon-orange-accent',
    gradientClassName: 'from-pycon-orange-accent/40',
  },
  {
    type: 'sprint',
    title: 'Sprint Day Leads',
    badgeClassName: 'bg-accent',
    borderClassName: 'border-accent',
    gradientClassName: 'from-accent/40',
  },
];

const mockSpeakers: Speaker[] = [
  // Keynote
  {
    id: 1,
    firstName: 'Maria',
    lastName: 'Santos',
    speakerType: 'keynote',
    designation: 'Principal Engineer, Acme Corp',
    socials: 'https://www.linkedin.com/',
  },
  {
    id: 2,
    firstName: 'Jose',
    lastName: 'Reyes',
    speakerType: 'keynote',
    designation: 'Python Core Contributor',
    socials: 'https://github.com/',
  },
  {
    id: 3,
    firstName: 'Ana',
    lastName: 'Cruz',
    speakerType: 'keynote',
    designation: 'Head of Data, Lorem Labs',
    socials: null,
  },
  {
    id: 4,
    firstName: 'Miguel',
    lastName: 'Garcia',
    speakerType: 'keynote',
    designation: 'CTO, Ipsum Tech',
    socials: 'https://www.linkedin.com/',
  },
  {
    id: 5,
    firstName: 'Carmen',
    lastName: 'Bautista',
    speakerType: 'keynote',
    designation: 'ML Research Lead',
    socials: 'https://x.com/',
  },
  {
    id: 6,
    firstName: 'Rafael',
    lastName: 'Mendoza',
    speakerType: 'keynote',
    designation: 'PSF Fellow',
    socials: null,
  },
  {
    id: 7,
    firstName: 'Isabel',
    lastName: 'Torres',
    speakerType: 'keynote',
    designation: 'Engineering Manager, Dolor Inc',
    socials: 'https://www.linkedin.com/',
  },
  {
    id: 8,
    firstName: 'Carlos',
    lastName: 'Ramos',
    speakerType: 'keynote',
    designation: 'Open Source Maintainer',
    socials: 'https://github.com/',
  },
  {
    id: 9,
    firstName: 'Lucia',
    lastName: 'Flores',
    speakerType: 'keynote',
    designation: 'Professor of Computer Science',
    socials: null,
  },
  {
    id: 10,
    firstName: 'Antonio',
    lastName: 'Villanueva',
    speakerType: 'keynote',
    designation: 'Founder, Sit Amet Studio',
    socials: 'https://www.linkedin.com/',
  },
  {
    id: 11,
    firstName: 'Elena',
    lastName: 'Aquino',
    speakerType: 'keynote',
    designation: 'Staff Data Scientist',
    socials: 'https://x.com/',
  },
  {
    id: 12,
    firstName: 'Pedro',
    lastName: 'Castillo',
    speakerType: 'keynote',
    designation: 'Developer Advocate',
    socials: null,
  },

  // Tech talk
  {
    id: 13,
    firstName: 'Sofia',
    lastName: 'Navarro',
    speakerType: 'talk',
    designation: 'Backend Engineer',
    socials: 'https://github.com/',
  },
  {
    id: 14,
    firstName: 'Diego',
    lastName: 'Domingo',
    speakerType: 'talk',
    designation: 'Data Engineer',
    socials: null,
  },
  {
    id: 15,
    firstName: 'Teresa',
    lastName: 'Lim',
    speakerType: 'talk',
    designation: 'Software Engineer',
    socials: 'https://www.linkedin.com/',
  },
  {
    id: 16,
    firstName: 'Marco',
    lastName: 'Tan',
    speakerType: 'talk',
    designation: 'DevOps Engineer',
    socials: 'https://github.com/',
  },
  {
    id: 17,
    firstName: 'Patricia',
    lastName: 'Gonzales',
    speakerType: 'talk',
    designation: 'ML Engineer',
    socials: null,
  },
  {
    id: 18,
    firstName: 'Andres',
    lastName: 'Fernandez',
    speakerType: 'talk',
    designation: 'Full-Stack Developer',
    socials: 'https://x.com/',
  },
  {
    id: 19,
    firstName: 'Rosa',
    lastName: 'Dela Cruz',
    speakerType: 'talk',
    designation: 'QA Automation Engineer',
    socials: 'https://www.linkedin.com/',
  },
  {
    id: 20,
    firstName: 'Gabriel',
    lastName: 'Morales',
    speakerType: 'talk',
    designation: 'Security Researcher',
    socials: null,
  },
  {
    id: 21,
    firstName: 'Beatriz',
    lastName: 'Pascual',
    speakerType: 'talk',
    designation: 'Student, Lorem University',
    socials: 'https://github.com/',
  },
  {
    id: 22,
    firstName: 'Fernando',
    lastName: 'Salazar',
    speakerType: 'talk',
    designation: 'Cloud Architect',
    socials: 'https://www.linkedin.com/',
  },
  {
    id: 23,
    firstName: 'Cristina',
    lastName: 'Rivera',
    speakerType: 'talk',
    designation: 'Data Analyst',
    socials: null,
  },
  {
    id: 24,
    firstName: 'Luis',
    lastName: 'Ocampo',
    speakerType: 'talk',
    designation: 'Game Developer',
    socials: 'https://github.com/',
  },

  // Sprint
  {
    id: 25,
    firstName: 'Victoria',
    lastName: 'Manalo',
    speakerType: 'sprint',
    designation: 'pandas Contributor',
    socials: 'https://github.com/',
  },
  {
    id: 26,
    firstName: 'Ramon',
    lastName: 'Soriano',
    speakerType: 'sprint',
    designation: 'PyGame Maintainer',
    socials: 'https://github.com/',
  },
  {
    id: 27,
    firstName: 'Angela',
    lastName: 'Javier',
    speakerType: 'sprint',
    designation: 'Community Organizer',
    socials: null,
  },
];

// Deterministic "random" email so server and client render the same URL.
function mockAvatarUrl({ id, firstName, lastName }: Speaker): string {
  const params = new URLSearchParams({
    email: `${((id * 2654435761) >>> 0).toString(36)}@example.com`,
    name: `${firstName} ${lastName}`,
    v: '3',
    size: '100',
  });
  return `https://classyprofile.com/api/avatar?${params}`;
}

export const speakersData: Speaker[] = mockSpeakers.map((speaker) => ({
  ...speaker,
  image: speaker.image ?? mockAvatarUrl(speaker),
}));
