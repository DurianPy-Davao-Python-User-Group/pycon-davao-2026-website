import type { StaticImageData } from 'next/image';
import { Speaker } from '@/data/speaker';
import { speakers as speakerCatalog } from '@/data/speakers-data';

export type ProgramEntryType =
  | 'registration'
  | 'opening-remarks'
  | 'session'
  | 'break'
  | 'open-spaces'
  | 'workshop'
  | 'lightning-session';

export interface ProgramEntryDto {
  type: ProgramEntryType;
  room: string;
  title: string;
  startTime: string;
  endTime: string;
  color?: string | null;
  isAllRooms?: boolean;
  speakers?: Array<{
    speaker: Speaker;
  }> | null;
}

export interface ScheduleDto {
  id: string;
  date: string;
  label: string;
  timeInterval?: number | null;
  programEntries?: Array<ProgramEntryDto> | null;
}

export type ProgramEntry = Omit<ProgramEntryDto, 'speakers'> & {
  id: string;
  speakers: Speaker[] | null;
};

export type Schedule = Omit<ScheduleDto, 'programEntries'> & {
  programEntries: Array<ProgramEntry>;
};

function getSpeakerFromCatalog(id: string, talkTitle: string, order = 1): Speaker | null {
  const s = speakerCatalog.find((item) => item.id === id);
  if (!s) return null;

  const image =
    typeof s.avatarUrl === 'object' && s.avatarUrl && 'src' in s.avatarUrl
      ? (s.avatarUrl as StaticImageData).src
      : typeof s.avatarUrl === 'string'
        ? s.avatarUrl
        : '';

  const speakerTitle = [s.designation, s.company].filter(Boolean).join(' • ');

  return {
    id: s.id,
    name: s.name,
    speakerTitle,
    talkTitle,
    image,
    description: s.bio || '',
    order,
  };
}

function createSpeakerList(id: string, talkTitle: string, order = 1): Speaker[] | null {
  const speaker = getSpeakerFromCatalog(id, talkTitle, order);
  return speaker ? [speaker] : null;
}

const fatherKarel: Speaker = {
  id: 'fr-karel-san-juan',
  name: 'Fr. Karel San Juan, SJ',
  speakerTitle: 'University President • Ateneo de Davao University',
  talkTitle: 'ADDU Keynote - Father Karel',
  image: '',
  description: 'Keynote address with Ateneo de Davao University.',
  order: 1,
};

export const day1Entries: ProgramEntry[] = [
  // 08:00 AM - 09:00 AM
  {
    id: 'd1-reg',
    title: 'Registration',
    type: 'registration',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T08:00:00+08:00',
    endTime: '2026-10-17T09:00:00+08:00',
    speakers: null,
  },
  // 09:00 AM - 09:10 AM
  {
    id: 'd1-opening',
    title: 'Opening Remarks',
    type: 'opening-remarks',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T09:00:00+08:00',
    endTime: '2026-10-17T09:10:00+08:00',
    speakers: null,
  },
  // 09:10 AM - 09:40 AM
  {
    id: 'd1-addu-keynote',
    title: 'ADDU Keynote - Father Karel',
    type: 'session',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T09:10:00+08:00',
    endTime: '2026-10-17T09:40:00+08:00',
    speakers: [fatherKarel],
  },
  // 09:45 AM - 10:15 AM
  {
    id: 'd1-keynote-kristine',
    title: 'Rethinking Multilingual Machine Translation at Scale with PyTorch',
    type: 'session',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T09:45:00+08:00',
    endTime: '2026-10-17T10:15:00+08:00',
    speakers: createSpeakerList('kristine-mae-adlaon', 'Rethinking Multilingual Machine Translation at Scale with PyTorch'),
  },
  // 10:35 AM - 11:05 AM (Parallel Sessions)
  {
    id: 'd1-talk-arnel',
    title: 'What Python Communities Taught Me About Building a Career',
    type: 'session',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T10:35:00+08:00',
    endTime: '2026-10-17T11:05:00+08:00',
    speakers: createSpeakerList('arnel-jan-sarmiento', 'What Python Communities Taught Me About Building a Career'),
  },
  {
    id: 'd1-talk-zildjian',
    title: 'Python (and LaTeX) Is All You Need: Agentic Documents and The \\write18 Problem',
    type: 'session',
    room: 'F613E',
    startTime: '2026-10-17T10:35:00+08:00',
    endTime: '2026-10-17T11:05:00+08:00',
    speakers: createSpeakerList('zildjian-california', 'Python (and LaTeX) Is All You Need: Agentic Documents and The \\write18 Problem'),
  },
  {
    id: 'd1-talk-nhyl',
    title: 'Building Golden Paths: Taking Python to Production',
    type: 'session',
    room: 'F612 (Mac Lab)',
    startTime: '2026-10-17T10:35:00+08:00',
    endTime: '2026-10-17T11:05:00+08:00',
    speakers: createSpeakerList('nhyl-bryle-ibanez', 'Building Golden Paths: Taking Python to Production'),
  },
  {
    id: 'd1-talk-dominique',
    title: 'Low-Key Agentic AI in Resource Constrained Environments',
    type: 'session',
    room: 'F600-F601 Combined',
    startTime: '2026-10-17T10:35:00+08:00',
    endTime: '2026-10-17T11:05:00+08:00',
    speakers: createSpeakerList('dominique-gerald-cimafranca', 'Low-Key Agentic AI in Resource Constrained Environments'),
  },
  // 11:10 AM - 11:40 AM (Parallel Sessions)
  {
    id: 'd1-talk-jaime',
    title: 'Automating the Future: AI Automation',
    type: 'session',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T11:10:00+08:00',
    endTime: '2026-10-17T11:40:00+08:00',
    speakers: createSpeakerList('jaime-emanuel-lucero', 'Automating the Future: AI Automation'),
  },
  {
    id: 'd1-talk-jerry',
    title: 'End to end data lifecycle on AWS and Snowflake: from ingestion to self-service analytics',
    type: 'session',
    room: 'F613E',
    startTime: '2026-10-17T11:10:00+08:00',
    endTime: '2026-10-17T11:40:00+08:00',
    speakers: createSpeakerList('jerry-marte', 'End to end data lifecycle on AWS and Snowflake: from ingestion to self-service analytics'),
  },
  {
    id: 'd1-talk-jan',
    title: 'Rapid Prototyping with MicroPython: I Built an Instant Camera Twice',
    type: 'session',
    room: 'F612 (Mac Lab)',
    startTime: '2026-10-17T11:10:00+08:00',
    endTime: '2026-10-17T11:40:00+08:00',
    speakers: createSpeakerList('jan-dexter-diaz', 'Rapid Prototyping with MicroPython: I Built an Instant Camera Twice'),
  },
  {
    id: 'd1-talk-mel',
    title: 'Automating Python Package Versioning and Publishing to AWS CodeArtifact',
    type: 'session',
    room: 'F600-F601 Combined',
    startTime: '2026-10-17T11:10:00+08:00',
    endTime: '2026-10-17T11:40:00+08:00',
    speakers: createSpeakerList('mel-cadano', 'Automating Python Package Versioning and Publishing to AWS CodeArtifact'),
  },
  // 11:40 AM - 01:00 PM (Lunch)
  {
    id: 'd1-lunch',
    title: 'Lunch',
    type: 'break',
    room: 'F711-F712 Combined',
    isAllRooms: true,
    startTime: '2026-10-17T11:40:00+08:00',
    endTime: '2026-10-17T13:00:00+08:00',
    speakers: null,
  },
  // 01:10 PM - 03:10 PM: Workshops
  {
    id: 'd1-workshop-1',
    title: 'From Python to AI-Powered Django: Build a Quiz & Reviewer App',
    type: 'workshop',
    room: 'F612 (Mac Lab)',
    startTime: '2026-10-17T13:10:00+08:00',
    endTime: '2026-10-17T15:10:00+08:00',
    speakers: createSpeakerList('jeremy-patrick-pacabis', 'From Python to AI-Powered Django: Build a Quiz & Reviewer App'),
  },
  {
    id: 'd1-workshop-2',
    title: 'Speech Processing Using PyTorch: Paminaw! Teaching Machines to Listen in Cebuano and Tagalog',
    type: 'workshop',
    room: 'F600-F601 Combined',
    startTime: '2026-10-17T13:10:00+08:00',
    endTime: '2026-10-17T15:10:00+08:00',
    speakers: createSpeakerList('nash-golosino', 'Speech Processing Using PyTorch: Paminaw! Teaching Machines to Listen in Cebuano and Tagalog'),
  },
  // 01:10 PM - 01:40 PM: Sessions
  {
    id: 'd1-talk-jansen',
    title: 'Your Embedding Model Might Be Overqualified for the Job',
    type: 'session',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T13:10:00+08:00',
    endTime: '2026-10-17T13:40:00+08:00',
    speakers: createSpeakerList('jansen-marson-ang', 'Your Embedding Model Might Be Overqualified for the Job'),
  },
  {
    id: 'd1-talk-jordan',
    title: 'So You Think You Know Python?',
    type: 'session',
    room: 'F613E',
    startTime: '2026-10-17T13:10:00+08:00',
    endTime: '2026-10-17T13:40:00+08:00',
    speakers: createSpeakerList('jordan-duabe', 'So You Think You Know Python?'),
  },
  // 01:45 PM - 02:15 PM: Sessions
  {
    id: 'd1-talk-mark',
    title: 'Your Agent Works. Now What? Production AI Agents with Microsoft Foundry',
    type: 'session',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T13:45:00+08:00',
    endTime: '2026-10-17T14:15:00+08:00',
    speakers: createSpeakerList('mark-anthony-estopace', 'Your Agent Works. Now What? Production AI Agents with Microsoft Foundry'),
  },
  {
    id: 'd1-talk-brian',
    title: 'Buy Now or Wait? Predicting Steam Sales with Logistic Regression',
    type: 'session',
    room: 'F613E',
    startTime: '2026-10-17T13:45:00+08:00',
    endTime: '2026-10-17T14:15:00+08:00',
    speakers: createSpeakerList('brian-benedict-de-castro', 'Buy Now or Wait? Predicting Steam Sales with Logistic Regression'),
  },
  // 01:55 PM - 03:25 PM: Open Space & Career Mixer
  {
    id: 'd1-open-space',
    title: 'Open Space / Networking',
    type: 'open-spaces',
    room: '7th Floor 2nd Lounge',
    startTime: '2026-10-17T13:55:00+08:00',
    endTime: '2026-10-17T15:25:00+08:00',
    speakers: null,
  },
  {
    id: 'd1-career-mixer',
    title: 'Career Mixer',
    type: 'session',
    room: 'F711-F712 Combined',
    startTime: '2026-10-17T13:55:00+08:00',
    endTime: '2026-10-17T15:25:00+08:00',
    speakers: null,
  },
  // 02:20 PM - 02:50 PM: Sessions
  {
    id: 'd1-talk-zorex',
    title: "Your Agent Is Already a Python Developer. Here's Proof.",
    type: 'session',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T14:20:00+08:00',
    endTime: '2026-10-17T14:50:00+08:00',
    speakers: createSpeakerList('zorex-salvo', "Your Agent Is Already a Python Developer. Here's Proof."),
  },
  {
    id: 'd1-talk-alpha',
    title: 'Navigating the Grey: Building Resilient Python Scrapers That Survive at Scale',
    type: 'session',
    room: 'F613E',
    startTime: '2026-10-17T14:20:00+08:00',
    endTime: '2026-10-17T14:50:00+08:00',
    speakers: createSpeakerList('alpha-romer-coma', 'Navigating the Grey: Building Resilient Python Scrapers That Survive at Scale'),
  },
  // 02:55 PM - 03:25 PM: Panel Discussion
  {
    id: 'd1-panel',
    title: 'Panel Discussion',
    type: 'session',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T14:55:00+08:00',
    endTime: '2026-10-17T15:25:00+08:00',
    speakers: null,
  },
  // 03:45 PM - 04:25 PM: Lightning Talks
  {
    id: 'd1-lightning',
    title: 'Lightning Talks',
    type: 'lightning-session',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T15:45:00+08:00',
    endTime: '2026-10-17T16:25:00+08:00',
    speakers: null,
  },
  // 04:25 PM - 04:35 PM: Raffle Session
  {
    id: 'd1-raffle',
    title: 'Raffle Session',
    type: 'session',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T16:25:00+08:00',
    endTime: '2026-10-17T16:35:00+08:00',
    speakers: null,
  },
  // 04:35 PM - 04:45 PM: Closing Remarks
  {
    id: 'd1-closing',
    title: 'Closing Remarks',
    type: 'opening-remarks',
    room: 'Finister Auditorium',
    startTime: '2026-10-17T16:35:00+08:00',
    endTime: '2026-10-17T16:45:00+08:00',
    speakers: null,
  },
];

const day2SprintLeads: Speaker[] = [
  getSpeakerFromCatalog('jesse-panganiban', 'Zero to Agents: Building An Agentic Harness w/ PydanticAI', 1),
  getSpeakerFromCatalog('ned-palacios', 'PWA Karaoke', 2),
  getSpeakerFromCatalog('arnel-jan-sarmiento-sprint', 'Hands-on Python for Absolute Beginners', 3),
  getSpeakerFromCatalog('francis-reid-arranguez', 'Hands-on Python for Absolute Beginners', 4),
  getSpeakerFromCatalog('zildjian-california', 'Cardiff: Print-Ready Python', 5),
].filter((s): s is Speaker => s !== null);

export const day2Entries: ProgramEntry[] = [
  {
    id: 'd2-sprints',
    title: 'Python Sprints',
    type: 'workshop',
    room: 'ADDU',
    startTime: '2026-10-18T08:00:00+08:00',
    endTime: '2026-10-18T16:00:00+08:00',
    speakers: day2SprintLeads,
  },
];

export const sampleSchedules: Schedule[] = [
  {
    id: 'day-1',
    date: '2026-10-17',
    label: 'DAY 1',
    timeInterval: 30,
    programEntries: day1Entries,
  },
  {
    id: 'day-2',
    date: '2026-10-18',
    label: 'DAY 2',
    timeInterval: 60,
    programEntries: day2Entries,
  },
];

export function getAllSchedules(): Schedule[] {
  return sampleSchedules;
}
