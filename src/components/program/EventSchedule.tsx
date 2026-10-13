'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ProgramEntry, Schedule, ProgramEntryType } from '@/data/schedule';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Speaker } from '@/data/speaker';
import { cn } from '@/lib/utils';
import { Fragment, useRef, useState } from 'react';

interface EventScheduleProps {
  schedules: Schedule[];
  timeInterval?: number; // in minutes, default 30
}

type EventColorConfig = [`bg-pycon-${string}`, `text-pycon-${string}`];
const getEventColorConfig = (eventType?: ProgramEntryType): EventColorConfig => {
  switch (eventType) {
    case 'break':
    case 'workshop':
      return ['bg-pycon-orange', 'text-pycon-orange'];

    case 'session':
    case 'open-spaces':
      return ['bg-pycon-teal', 'text-pycon-teal'];

    case 'registration':
    case 'opening-remarks':
    case 'lightning-session':
    default:
      return ['bg-pycon-green', 'text-pycon-green'];
  }
};

const formatDisplayTime = (isoTimeString: string): string => {
  const date = new Date(isoTimeString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Manila'
  });
};

const calculateEventDurationInMinutes = (startTime: string, endTime: string): number => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  return Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60));
};

const generateDayTimeSlots = (dayEvents: ProgramEntry[], intervalMinutes: number): Date[] => {
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

const CANONICAL_ROOM_ORDER = [
  'Finister Auditorium',
  'FinAud',
  'F613E',
  'F612 (Mac Lab)',
  'F600-F601 Combined',
  '7th Floor 2nd Lounge',
  'F711-F712 Combined',
];

const extractUniqueRoomsFromEvents = (events: ProgramEntry[]): string[] => {
  const rooms = Array.from(new Set(events.map((event) => event.room)));
  return rooms.sort((a, b) => {
    const isFinisterA = a.toLowerCase().includes('finister') || a.toLowerCase().includes('finaud');
    const isFinisterB = b.toLowerCase().includes('finister') || b.toLowerCase().includes('finaud');
    if (isFinisterA && !isFinisterB) return -1;
    if (!isFinisterA && isFinisterB) return 1;

    const idxA = CANONICAL_ROOM_ORDER.indexOf(a);
    const idxB = CANONICAL_ROOM_ORDER.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b);
  });
};

const MINUTES_PER_ROW = 5;

const calculateGridRowSpan = (startTime: string, endTime: string): number => {
  const durationMinutes = calculateEventDurationInMinutes(startTime, endTime);
  return Math.max(1, Math.round(durationMinutes / MINUTES_PER_ROW));
};

const calculateGridRowStart = (eventStartTime: string, firstTimeSlot?: Date): number => {
  if (!firstTimeSlot) {
    return 0;
  }

  const eventDate = new Date(eventStartTime);
  const timeDifferenceMinutes = (eventDate.getTime() - firstTimeSlot.getTime()) / (1000 * 60);
  return Math.floor(timeDifferenceMinutes / MINUTES_PER_ROW) + 1;
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

interface RoomHeadersProps {
  rooms: string[];
}

function RoomHeaders({ rooms }: RoomHeadersProps) {
  return rooms.map((roomName, index) => (
    <div
      style={{ gridColumnStart: index + 2, gridRowStart: 1 }}
      key={roomName}
      className="bg-pycon-custard-light sticky top-0 z-20 min-w-0 border-b border-pycon-orange/20 py-3 text-center shadow-xs"
    >
      <h3
        title={roomName}
        className="font-nunito font-bold text-pycon-orange truncate px-2 text-sm tracking-wide md:text-base"
      >
        {roomName}
      </h3>
    </div>
  ));
}

interface TimeSlotLabelsProps {
  timeSlots: Date[];
  rowsPerInterval: number;
}

function TimeSlotLabels({ timeSlots, rowsPerInterval }: TimeSlotLabelsProps) {
  return timeSlots.map((timeSlot, slotIndex) => (
    <div
      key={timeSlot.toISOString()}
      className="text-pycon-orange sticky left-0 z-10 flex flex-col items-end pe-4 text-sm"
      style={{
        gridRow: slotIndex * rowsPerInterval + 2,
        gridColumn: 1,
        gridRowStart: slotIndex * rowsPerInterval + 2,
        gridRowEnd: slotIndex * rowsPerInterval + 2 + rowsPerInterval,
      }}
    >
      <span className="font-nunito font-bold">{formatDisplayTime(timeSlot.toISOString())}</span>
    </div>
  ));
}

interface ProgramEntryCardProps {
  event: ProgramEntry;
  roomIndex: number;
  totalRooms: number;
  gridRowStart: number;
  gridRowSpan: number;
}

function ProgramEntryCard({ event, roomIndex, totalRooms, gridRowStart, gridRowSpan }: ProgramEntryCardProps) {
  const hasDetailedContent = (event.speakers && event.speakers.length > 0) || event.type === 'session';
  const isBreakOrRegistration = event.type === 'break' || event.type === 'registration';
  const duration = calculateEventDurationInMinutes(event.startTime, event.endTime);
  const isShortDuration = duration <= 15;
  const isLongDuration = duration > 45;

  const timeBlockPadding = isShortDuration
    ? 'px-2 py-1 justify-center'
    : isLongDuration
      ? 'px-2.5 pt-4 pb-3 justify-start'
      : hasDetailedContent
        ? 'px-2.5 pt-3 pb-2 justify-center'
        : 'px-2 py-2 justify-center';

  const contentPadding = isShortDuration
    ? 'px-3 py-1.5 justify-center'
    : isLongDuration
      ? 'px-3.5 pt-4 pb-3 justify-start'
      : hasDetailedContent
        ? 'px-3.5 py-2.5 justify-center'
        : 'px-3.5 py-2 justify-center';

  const [bgColorClass, textColorClass] = getEventColorConfig(event.type);

  return (
    <Card
      key={event.id}
      className="bg-pycon-custard-lighter border-pycon-orange/15 shadow-xs overflow-hidden border p-0 transition-shadow hover:shadow-md"
      style={{
        gridColumn: event.isAllRooms ? `2 / span ${totalRooms}` : (roomIndex >= 0 ? roomIndex + 2 : 2),
        gridRow: `${gridRowStart} / span ${gridRowSpan}`,
        minHeight: `${Math.max(gridRowSpan * 20, 36)}px`
      }}
    >
      <div className="flex h-full min-h-0">
        {/* Time Display Block */}
        <div
          className={cn(
            `font-nunito flex shrink-0 flex-col items-center ${timeBlockPadding} text-pycon-white min-w-20 font-bold`,
            bgColorClass
          )}
        >
          <div
            title={formatDisplayTime(event.startTime)}
            className="font-nunito text-pycon-white text-center text-xs leading-tight font-bold whitespace-nowrap"
          >
            {formatDisplayTime(event.startTime)}
          </div>
          <div
            title={`${duration} min`}
            className="font-nunito text-pycon-white text-center text-xs leading-tight font-bold opacity-90"
          >
            {duration} min
          </div>
        </div>

        {/* Event Content */}
        <div
          className={cn('font-nunito flex min-w-0 flex-1 flex-col overflow-hidden font-bold', contentPadding)}
        >
          {isBreakOrRegistration ? <BreakEntry title={event.title} /> : <SessionEntry event={event} />}
        </div>
      </div>
    </Card>
  );
}

interface BreakEntryProps {
  title: string;
}

function BreakEntry({ title }: BreakEntryProps) {
  return (
    <h4
      title={title}
      className="font-nunito text-sm leading-snug font-semibold text-pycon-dark-blue truncate"
    >
      {title}
    </h4>
  );
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

    if (event.speakers && event.speakers.length > 1) {
      return <SpeakersList speakers={event.speakers} />;
    }

    return null;
  };

  const hasSpeakers = Boolean(event.speakers && event.speakers.length > 0);
  const title = event.title;

  return (
    <div className="flex min-h-0 flex-col">
      <h4
        title={title}
        className={cn(
          'font-nunito text-sm leading-snug font-bold text-pycon-dark-blue break-words',
          hasSpeakers && 'mb-2'
        )}
      >
        {title}
      </h4>
      {sessionContent()}
    </div>
  );
}

interface SpeakersListProps {
  speakers: NonNullable<ProgramEntry['speakers']>;
}

function SpeakersList({ speakers }: SpeakersListProps) {
  const hasSprintProjects = speakers.some((s) => s.talkTitle);

  if (hasSprintProjects) {
    return (
      <div className="mt-2.5 flex flex-col gap-3">
        {speakers.map((speaker) => {
          const initials = getSpeakerInitials(speaker.name);
          return (
            <div key={speaker.id} className="flex min-w-0 items-start gap-2.5">
              <SpeakerAvatar
                image={speaker.image}
                initials={initials}
                name={speaker.name}
                className="mt-0.5 h-9 w-9"
              />
              <div className="min-w-0 flex-1 leading-snug">
                <div
                  title={speaker.name}
                  className="font-nunito text-sm font-bold text-pycon-dark-blue truncate"
                >
                  {speaker.name}
                </div>
                {speaker.talkTitle && (
                  <div
                    title={speaker.talkTitle}
                    className="font-nunito text-orange-800 mt-0.5 text-sm font-semibold leading-snug"
                  >
                    {speaker.talkTitle}
                  </div>
                )}
                {speaker.speakerTitle && (
                  <div
                    title={speaker.speakerTitle}
                    className="font-nunito mt-0.5 text-sm font-normal leading-normal text-pycon-dark-blue/80"
                  >
                    {speaker.speakerTitle}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  const lessThan3Speakers = speakers.length && speakers.length < 3;
  return (
    <div className="space-y-1.5">
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2">
        {speakers.map((x) => (
          <SpeakerAvatar
            key={x.id}
            initials={getSpeakerInitials(x.name)}
            image={x.image}
            name={x.name}
            className="h-8 w-8"
          />
        ))}
      </div>

      <div className="font-nunito min-w-0 text-sm leading-relaxed text-pycon-dark-blue">
        {speakers.map((speaker, index) => (
          <Fragment key={speaker.id}>
            <span
              title={speaker.name}
              className="font-bold text-pycon-dark-blue"
            >
              {speaker.name}
            </span>
            {speaker.speakerTitle && lessThan3Speakers && (
              <span
                title={speaker.speakerTitle}
                className="font-normal text-pycon-dark-blue/80"
              >
                {' '}({speaker.speakerTitle})
              </span>
            )}
            <span className={cn(speakers.length === index + 1 && 'hidden')}>; </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function getSpeakerInitials(fullName: string) {
  return fullName
    .split(' ')
    .map((namePart) => namePart[0])
    .join('')
    .slice(0, 2);
}

function SpeakerAvatar({
  image,
  initials,
  name,
  className
}: {
  image?: string;
  initials: string;
  name?: string;
  className?: string;
}) {
  return (
    <Avatar className={cn('mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-full border border-pycon-orange/30 shadow-xs', className)}>
      <AvatarImage src={image} alt={name} className="aspect-square size-full object-cover object-center" />
      <AvatarFallback className="font-nunito bg-pycon-custard-light text-pycon-dark-blue text-xs font-bold sm:text-sm">{initials}</AvatarFallback>
    </Avatar>
  );
}

interface SpeakerInformationProps {
  speaker: Speaker;
}

function SpeakerInformation({ speaker }: SpeakerInformationProps) {
  const speakerInitials = getSpeakerInitials(speaker.name);

  return (
    <div className="flex min-w-0 items-start gap-2.5">
      <SpeakerAvatar
        image={speaker.image}
        initials={speakerInitials}
        name={speaker.name}
        className="mt-0.5 h-9 w-9"
      />
      <div className="min-w-0 flex-1 leading-snug">
        <div
          title={speaker.name}
          className="font-nunito font-bold text-pycon-dark-blue truncate text-sm"
        >
          {speaker.name}
        </div>
        {speaker.speakerTitle && (
          <div
            title={speaker.speakerTitle}
            className="font-nunito mt-0.5 text-sm font-normal leading-normal text-pycon-dark-blue/80 line-clamp-2 break-words"
          >
            {speaker.speakerTitle}
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyDayState() {
  return (
    <div className="text-muted-foreground py-12 text-center">
      <p className="font-nunito font-bold">No events scheduled for this day.</p>
    </div>
  );
}

export function EventSchedule({ schedules }: EventScheduleProps) {
  const dates = schedules.map((x) => ({
    id: x.id,
    date: x.date,
    label: x.label
  }));

  const datesInMs = schedules.map((x) => new Date(`${x.date}T00:00:00+08:00`).getTime());
  const earliestDate = dates.find((x) => Math.min(...datesInMs) === new Date(`${x.date}T00:00:00+08:00`).getTime())?.id;

  const [selectedDayId, setSelectedDayId] = useState(earliestDate || '');
  const gridContainerRef = useRef<HTMLDivElement>(null);

  const handleDayChange = (dayId: string) => {
    setSelectedDayId(dayId);
    if (gridContainerRef.current) {
      gridContainerRef.current.scrollTop = 0;
      gridContainerRef.current.scrollLeft = 0;
    }
  };

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
        <DayTabs days={dates} activeDay={selectedDayId} onDayChange={handleDayChange} />

        <div className="flex flex-col gap-y-4">
          {sortedEvents.map((event) => {
            const isBreakOrRegistration = event.type === 'break' || event.type === 'registration';
            const [bgColorClass, textColorClass] = getEventColorConfig(event.type);

            return (
              <Card key={`${event.title}-${event.id}`} className="bg-pycon-custard-lighter border-pycon-orange/20 overflow-hidden border pt-0 shadow-xs">
                <CardHeader className={cn(bgColorClass, 'text-pycon-white grid-rows-[auto] justify-center rounded-t-xl py-2 text-sm font-bold')}>
                  {formatDisplayTime(event.startTime)} - {formatDisplayTime(event.endTime)}
                </CardHeader>
                <CardContent className="p-3.5">{isBreakOrRegistration ? <BreakEntry title={event.title} /> : <SessionEntry event={event} />}</CardContent>
                {event.room && (
                  <CardFooter
                    title={event.room}
                    className="font-nunito justify-end text-sm font-semibold text-pycon-dark-blue pr-4 pb-3"
                  >
                    {event.room}
                  </CardFooter>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      <div className="hidden w-full md:block">
        <DayTabs days={dates} activeDay={selectedDayId} onDayChange={handleDayChange} />

        {hasEventsForDay ? (
          <div ref={gridContainerRef} className="relative overflow-auto max-h-[calc(100vh-140px)] rounded-xl border border-pycon-orange/20 shadow-xs">
            {(() => {
              const rowsPerInterval = Math.max(1, Math.round(timeInterval / MINUTES_PER_ROW));
              const totalGridRows = dayTimeSlots.length * rowsPerInterval;

              return (
                <div
                  className="z-1 grid min-w-fit gap-4 p-2"
                  style={{
                    gridTemplateColumns: `90px repeat(${availableRooms.length}, minmax(320px, 1fr))`,
                    gridTemplateRows: `auto repeat(${totalGridRows}, minmax(20px, auto))`
                  }}
                >
                  {/* Sticky Top-Left Corner Intersection */}
                  <div
                    style={{ gridColumnStart: 1, gridRowStart: 1 }}
                    className="bg-pycon-custard-light sticky top-0 left-0 z-30 flex items-center justify-center border-b border-pycon-orange/20 py-3 shadow-xs"
                  >
                    <span className="font-nunito text-pycon-orange text-xs font-bold uppercase tracking-wider">Time</span>
                  </div>

                  <RoomHeaders rooms={availableRooms} />
                  <TimeSlotLabels timeSlots={dayTimeSlots} rowsPerInterval={rowsPerInterval} />

                  {/* Event Cards Grid */}
                  {currentDayEvents.map((event, index) => {
                    const roomPosition = availableRooms.indexOf(event.room);
                    const gridRowStart = calculateGridRowStart(event.startTime, dayTimeSlots[0]) + 1;
                    const gridRowSpan = calculateGridRowSpan(event.startTime, event.endTime);

                    return (
                      <ProgramEntryCard
                        key={`${event.title}-${index}`}
                        event={event}
                        roomIndex={roomPosition}
                        totalRooms={availableRooms.length}
                        gridRowStart={gridRowStart}
                        gridRowSpan={gridRowSpan}
                      />
                    );
                  })}

                  {/* Row/Column BG */}
                  <div style={{ gridRowStart: 1, gridRowEnd: totalGridRows + 4 }} className="bg-pycon-custard-light pointer-events-none sticky left-0 z-0 col-start-1" />
                  <div
                    style={{ gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: availableRooms.length + 2 }}
                    className="bg-pycon-custard-light pointer-events-none sticky top-0 z-10 border-b border-pycon-orange/20"
                  />
                </div>
              );
            })()}
          </div>
        ) : (
          <EmptyDayState />
        )}
      </div>
    </>
  );
}
