import { Speaker } from '@/data/speaker'

export const schedules: Schedule[] = [
  {
    id: 'day-1',
    date: '2026-10-10',
    label: 'DAY 1',
    timeInterval: 30,
    programEntries: [
      {
        id: 'event-1',
        title: 'Registration',
        type: 'registration',
        room: 'MAIN HALL',
        startTime: '2026-10-10T08:00:00+08:00',
        endTime: '2026-10-10T09:00:00+08:00',
        speakers: null,
      },
      {
        id: 'event-2',
        title: 'Opening Remarks',
        type: 'opening-remarks',
        room: 'MAIN HALL',
        startTime: '2026-10-10T09:00:00+08:00',
        endTime: '2026-10-10T09:30:00+08:00',
        speakers: null,
      },
      {
        id: 'event-3',
        title: 'Building Scalable Applications',
        type: 'session',
        room: 'BREAKOUT ROOM',
        startTime: '2026-10-10T09:30:00+08:00',
        endTime: '2026-10-10T10:30:00+08:00',
        speakers: [
          {
            id: 'speaker-1',
            name: 'John Doe',
            speakerTitle: 'Software Engineer',
            talkTitle: 'Building Scalable Applications',
            image: '/images/john-doe.jpg',
            description: 'An experienced software engineer specializing in scalable systems.',
            order: 1,
          },
        ],
      },
      {
        id: 'event-4',
        title: 'Coffee Break',
        type: 'break',
        room: 'MAIN HALL',
        startTime: '2026-10-10T10:30:00+08:00',
        endTime: '2026-10-10T11:00:00+08:00',
        speakers: null,
      },
      {
        id: 'event-5',
        title: 'Introduction to Machine Learning',
        type: 'workshop',
        room: 'BREAKOUT ROOM',
        startTime: '2026-10-10T11:00:00+08:00',
        endTime: '2026-10-10T12:30:00+08:00',
        speakers: null,
      },
      {
        id: 'event-6',
        title: 'Lightning Talks',
        type: 'lightning-session',
        room: 'MAIN HALL',
        startTime: '2026-10-10T13:30:00+08:00',
        endTime: '2026-10-10T14:30:00+08:00',
        speakers: null,
      },
    ],
  },
  {
    id: 'day-2',
    date: '2026-10-11',
    label: 'DAY 2',
    timeInterval: 30,
    programEntries: [
      {
        id: 'event-7',
        title: 'Advanced React Patterns',
        type: 'session',
        room: 'BREAKOUT ROOM',
        startTime: '2026-10-11T09:00:00+08:00',
        endTime: '2026-10-11T10:00:00+08:00',
        speakers: [
          {
            id: 'speaker-2',
            name: 'Jane Smith',
            speakerTitle: 'Frontend Developer',
            talkTitle: 'Advanced React Patterns',
            image: '/images/jane-smith.jpg',
            description: 'A frontend developer passionate about React and modern web technologies.',
            order: 1,
          },
        ],
      },
      {
        id: 'event-8',
        title: 'Open Spaces',
        type: 'open-spaces',
        room: 'BREAKOUT ROOM',
        startTime: '2026-10-11T10:00:00+08:00',
        endTime: '2026-10-11T11:00:00+08:00',
        speakers: null,
      },
      {
        id: 'event-9',
        title: 'Lunch Break',
        type: 'break',
        room: 'MAIN HALL',
        startTime: '2026-10-11T12:00:00+08:00',
        endTime: '2026-10-11T13:00:00+08:00',
        speakers: null,
      },
    ],
  },
];

export function getAllSchedules() {
  return
}

export type ProgramEntryType = 'registration' | 'opening-remarks' | 'session' | 'break' | 'open-spaces' | 'workshop' | 'lightning-session';

interface ProgramEntryDto {
  type: ProgramEntryType;
  room: string;
  title: string;
  startTime: string;
  endTime: string;
  color?: string | null;
  speakers?: Array<{
    speaker: Speaker;
  }> | null;
}

interface ScheduleDto {
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
