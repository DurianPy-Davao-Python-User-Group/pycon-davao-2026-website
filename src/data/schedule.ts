import { Speaker } from '@/data/speaker'

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
