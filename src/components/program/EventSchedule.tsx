'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ProgramEntry, Schedule, ProgramEntryType } from '@/data/schedule';
import { Speaker } from '@/data/speaker'
import { cn, notLetterRegex } from '@/lib/utils'
import { Fragment, useState } from 'react';

export const formatDisplayTime = (isoTimeString: string): string => {
  const date = new Date(isoTimeString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Manila'
  });
};

export const calculateEventDurationInMinutes = (startTime: string, endTime: string): number => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  return Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60));
};

export const generateDayTimeSlots = (dayEvents: ProgramEntry[], intervalMinutes: number): Date[] => {
  if (dayEvents.length === 0) return [];

  const allEventTimes = dayEvents.flatMap((event) => [new Date(event.startTime), new Date(event.endTime)]);

  const earliestTime = new Date(Math.min(...allEventTimes.map((time) => time.getTime())));
  const latestTime = new Date(Math.max(...allEventTimes.map((time) => time.getTime())));

  // Round down to nearest interval
  earliestTime.setMinutes(Math.floor(earliestTime.getMinutes() / intervalMinutes) * intervalMinutes, 0, 0);

  const timeSlots = [];
  const currentTime = new Date(earliestTime);

  while (currentTime <= latestTime) {
    timeSlots.push(new Date(currentTime));
    currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
  }

  return timeSlots;
};

export const extractUniqueRoomsFromEvents = (events: ProgramEntry[]): string[] => {
  return Array.from(new Set(events.map((event) => event.room)));
};

export const calculateGridRowSpan = (startTime: string, endTime: string, intervalMinutes: number): number => {
  const durationMinutes = calculateEventDurationInMinutes(startTime, endTime);
  return Math.max(1, Math.round(durationMinutes / (intervalMinutes / 4)));
};

export const calculateGridRowStart = (eventStartTime: string, firstTimeSlot?: Date, intervalMinutes = 30): number => {
  if (!firstTimeSlot) {
    return 0;
  }

  const eventDate = new Date(eventStartTime);
  const timeDifferenceMinutes = (eventDate.getTime() - firstTimeSlot.getTime()) / (1000 * 60);
  return Math.floor(timeDifferenceMinutes / (intervalMinutes / 4)) + 1;
};

interface EventScheduleProps {
  schedules: Schedule[];
  timeInterval?: number; // in minutes, default 30
}

interface EventScheduleProps {
  schedules: Schedule[];
  timeInterval?: number; // in minutes, default 30
}

type EventColorConfig = [`bg-pycon-${string}`, `text-pycon-${string}`];
const getEventColorConfig = (eventType?: ProgramEntryType): EventColorConfig => {
  switch (eventType) {
    case 'break':
      return ['bg-pycon-gray', 'text-pycon-gray'];
    case 'workshop':
      return ['bg-pycon-orange', 'text-pycon-orange'];

    case 'session':
      return ['bg-pycon-violet', 'text-pycon-violet'];

    case 'open-spaces':
      return ['bg-pycon-lavender', 'text-pycon-lavender'];

    case 'registration':
    case 'opening-remarks':
    case 'lightning-session':
    default:
      return ['bg-pycon-red-orange', 'text-pycon-red-orange'];
  }
};

interface DayTabsProps {
  days: Array<{
    id: string;
    label: string;
    date: string;
  }>;
  activeDay: string;
  onDayChange: (dayId: string) => void;
}

function DayTabs({ days, activeDay, onDayChange }: DayTabsProps) {
  return (
    <div className="border-pycon-orange/30 mb-6 flex overflow-x-auto border-b">
      {days
        .sort((a, b) => new Date(`${a.date}T00:00:00+08:00`).getTime() - new Date(`${b.date}T00:00:00+08:00`).getTime())
        .map((day) => (
          <button
            key={day.id}
            onClick={() => onDayChange(day.id)}
            className={cn(
              'font-nunito cursor-pointer border-b-2 px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors',
              activeDay === day.id ? 'border-primary text-primary' : 'text-pycon-orange/50 hover:text-pycon-red/70 border-transparent'
            )}
          >
            {day.label}
          </button>
        ))}
    </div>
  );
}

interface BreakEntryProps {
  title: string;
}

function BreakEntry({ title }: BreakEntryProps) {
  return <h4 className="font-nunito text-center text-sm leading-relaxed font-bold">{title}</h4>;
}

interface RoomHeadersProps {
  rooms: string[];
}

function RoomHeaders({ rooms }: RoomHeadersProps) {
  return rooms.map((roomName, index) => {
    let splitContent: string;
    return (
      <div style={{ gridColumnStart: index + 2, gridRowStart: 1 }} key={roomName} className="sticky top-0 z-11 min-w-0 py-4 text-center">
        <h3 key={roomName} className="font-pipanganan text-pycon-orange truncate text-lg">
          {roomName.split('').map((x, i) => {
            const isLast = roomName.length === i + 1;
            const isNotLetter = notLetterRegex.test(x);

            if (isNotLetter) {
              splitContent = `${splitContent}${x}`;
            }

            if (!isNotLetter) {
              const content = splitContent;
              splitContent = '';
              return (
                <Fragment key={`${x}-${i}`}>
                  <span className="font-nunito font-black">{content}</span>
                  {x}
                </Fragment>
              );
            }

            if (isLast) {
              if (isNotLetter) {
                return (
                  <span key={`${x}-${i}`} className="font-nunito font-black">
                    {splitContent}
                  </span>
                );
              }

              return (
                <Fragment key={`${x}-${i}`}>
                  <span className="font-nunito font-black">{splitContent}</span>
                  {x}
                </Fragment>
              );
            }

            return '';
          })}
        </h3>

        <div className="bg-pycon-orange/30 mx-auto mt-2 h-px w-[90%]" />
      </div>
    );
  });
}

interface ProgramEntryCardProps {
  event: ProgramEntry;
  roomIndex: number;
  gridRowStart: number;
  gridRowSpan: number;
}

function ProgramEntryCard({ event, roomIndex, gridRowStart, gridRowSpan }: ProgramEntryCardProps) {
  const hasDetailedContent = (event.speakers && event.speakers.length > 0) || event.type === 'session';
  const isBreakOrRegistration = event.type === 'break' || event.type === 'registration';

  const timeBlockAlignment = hasDetailedContent ? 'justify-start' : 'justify-center';
  const timeBlockPadding = hasDetailedContent ? 'px-2 pt-4 pb-2' : 'px-2 py-2';
  const contentAlignment = hasDetailedContent ? 'justify-start' : 'justify-center';
  const eventDuration = calculateEventDurationInMinutes(event.startTime, event.endTime);

  const [bgColorClass, textColorClass] = getEventColorConfig(event.type);

  return (
    <Card
      key={event.id}
      className={cn('bg-pycon-custard-lighter overflow-hidden border-0 p-0 shadow-sm', textColorClass)}
      style={{
        gridColumn: roomIndex + 2,
        gridRow: `${gridRowStart} / span ${gridRowSpan}`,
        minHeight: `${Math.max(gridRowSpan * 25, 25)}px`
      }}
    >
      <div className="flex h-full min-h-0">
        {/* Time Display Block */}
        <div
          className={cn(
            `font-nunito flex flex-col items-center ${timeBlockAlignment} ${timeBlockPadding} text-pycon-white min-w-[80px] flex-shrink-0 text-sm font-bold`,
            bgColorClass
          )}
        >
          <div className="font-nunito text-pycon-white text-center leading-tight font-bold">{formatDisplayTime(event.startTime)}</div>
          <div className="font-nunito text-pycon-white text-center leading-tight font-bold opacity-90">{eventDuration} min</div>
        </div>

        {/* Event Content */}
        <div
          className={cn('font-nunito flex min-w-0 flex-1 flex-col overflow-hidden px-4 pb-4 font-bold', hasDetailedContent ? 'pt-4' : 'py-4', contentAlignment)}
        >
          {isBreakOrRegistration ? <BreakEntry title={event.title} /> : <SessionEntry event={event} />}
        </div>
      </div>
    </Card>
  );
}

function EmptyDayState() {
  return (
    <div className="text-muted-foreground py-12 text-center">
      <p className="font-nunito font-bold">No events scheduled for this day.</p>
    </div>
  );
}

interface TimeSlotLabelsProps {
  timeSlots: Date[];
}

function TimeSlotLabels({ timeSlots }: TimeSlotLabelsProps) {
  return timeSlots.map((timeSlot, slotIndex) => (
    <div
      key={timeSlot.toISOString()}
      className="text-pycon-orange sticky left-0 z-9 flex flex-col items-end pe-4 text-sm"
      style={{ gridRow: slotIndex * 4 + 2, gridColumn: 1, gridRowStart: slotIndex * 4 + 2, gridRowEnd: slotIndex * 4 + 2 + 4 }}
    >
      <span className="font-nunito font-bold">{formatDisplayTime(timeSlot.toISOString())}</span>
    </div>
  ));
}

interface SessionEntryProps {
  event: ProgramEntry;
}

function SessionEntry({ event }: SessionEntryProps) {
  const sessionContent = () => {
    if (event.speakers && event.speakers.length === 1) {
      const speaker = event.speakers[0];

      return <SpeakerInformation speaker={speaker} />;
    }
    return <></>;
  };

  const hasOnlyOneSpeaker = event.speakers && event.speakers.length === 1;
  const title = hasOnlyOneSpeaker ? event.speakers?.[0]?.talkTitle || event.title : event.title;

  return (
    <>
      <h4 className="font-nunito mb-3 text-sm leading-relaxed font-bold break-words">{title}</h4>
      {/* {event.speakers && event.speakers.length > 0 && <SpeakersList speakers={event.speakers} />} */}
      {sessionContent()}
    </>
  );
}

interface SpeakerInformationProps {
  speaker: Speaker;
}

function SpeakerInformation({ speaker }: SpeakerInformationProps) {

  return (
    <div className="flex min-w-0 items-start gap-3">
      <div className="min-w-0 flex-1 text-xs leading-relaxed">
        <div className="font-nunito font-bold break-words">{speaker.name}</div>
        {speaker.speakerTitle && <div className="font-nunito mt-1 text-xs leading-relaxed font-bold break-words">{speaker.speakerTitle}</div>}
      </div>
    </div>
  );
}

export function EventSchedule({ schedules }: EventScheduleProps) {
  const dates = schedules.map((x) => ({
    id: x.id,
    date: x.date, label: x.label
  }));

  const datesInMs = schedules.map((x) => new Date(`${x.date}T00:00:00+08:00`).getTime());
  const earliestDate = dates.find((x) => Math.min(...datesInMs) === new Date(`${x.date}T00:00:00+08:00`).getTime())?.id;

  const [selectedDayId, setSelectedDayId] = useState(earliestDate || '');

  const currentDaySchedule = schedules.find((x) => x.id === selectedDayId);
  const currentDayEvents = currentDaySchedule?.programEntries || [];

  const timeInterval = currentDaySchedule?.timeInterval ?? 30;
  const availableRooms = extractUniqueRoomsFromEvents(currentDayEvents);
  const dayTimeSlots = generateDayTimeSlots(currentDayEvents, timeInterval);

  const hasEventsForDay = currentDayEvents.length > 0;

  const sortedEvents = currentDayEvents.sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

  return (
    <>
      <div className="contents md:hidden">
        <DayTabs days={dates} activeDay={selectedDayId} onDayChange={setSelectedDayId} />

        <div className="flex flex-col gap-y-4">
          {sortedEvents.map((event) => {
            const isBreakOrRegistration = event.type === 'break' || event.type === 'registration';
            const [bgColorClass] = getEventColorConfig(event.type);

            return (
              <Card key={`${event.title}-${event.id}`} className="bg-pycon-custard-lighter border-none pt-0">
                <CardHeader className={cn(bgColorClass, 'text-pycon-white grid-rows-[auto] justify-center rounded-t-xl py-2 text-sm font-semibold')}>
                  {formatDisplayTime(event.startTime)} - {formatDisplayTime(event.endTime)}
                </CardHeader>
                <CardContent>{isBreakOrRegistration ? <BreakEntry title={event.title} /> : <SessionEntry event={event} />}</CardContent>
                {event.room && <CardFooter className="font-nunito justify-end text-sm font-bold">{event.room}</CardFooter>}
              </Card>
            );
          })}
        </div>
      </div>

      <div className="hidden w-full overflow-hidden md:block">
        <DayTabs days={dates} activeDay={selectedDayId} onDayChange={setSelectedDayId} />

        {hasEventsForDay ? (
          <div className="relative overflow-auto">
            <div
              className="z-1 grid min-w-fit gap-4"
              style={{
                gridTemplateColumns: `90px repeat(${availableRooms.length}, minmax(320px, 1fr))`,
                gridTemplateRows: `auto repeat(${dayTimeSlots.length * 4}, minmax(25px, auto))`
              }}
            >
              <RoomHeaders rooms={availableRooms} />
              <TimeSlotLabels timeSlots={dayTimeSlots} />

              {/* Event Cards Grid */}
              {currentDayEvents.map((event, index) => {
                const roomPosition = availableRooms.indexOf(event.room);
                const gridRowStart = calculateGridRowStart(event.startTime, dayTimeSlots[0], timeInterval) + 1;
                const gridRowSpan = calculateGridRowSpan(event.startTime, event.endTime, timeInterval);

                return (
                  <ProgramEntryCard
                    key={`${event.title}-${index}`}
                    event={event}
                    roomIndex={roomPosition}
                    gridRowStart={gridRowStart}
                    gridRowSpan={gridRowSpan}
                  />
                );
              })}

              {/* Row/Column BG */}
              <div style={{ gridRowStart: 1, gridRowEnd: dayTimeSlots.length * 4 + 4 }} className="bg-pycon-custard-light sticky left-0 z-8 col-start-1" />
              <div
                style={{ gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: availableRooms.length + 2 }}
                className="bg-pycon-custard-light sticky top-0 z-10"
              />
            </div>
          </div>
        ) : (
          <EmptyDayState />
        )}
      </div>
    </>
  );
}
