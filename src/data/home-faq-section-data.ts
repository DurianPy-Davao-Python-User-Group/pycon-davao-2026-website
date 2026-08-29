import React, { type ReactNode } from 'react';

export interface HomeFaqItem {
  question: string;
  answer: ReactNode;
}

export interface HomeFaqSectionData {
  data: HomeFaqItem[];
}

export const homeFaqSectionData: HomeFaqSectionData = {
  data: [
    {
      question: 'What is PyCon Davao 2026?',
      answer:
        'PyCon Davao 2026 is a community conference for Python developers, learners, educators, and technology enthusiasts to connect and share knowledge.',
    },
    {
      question: 'Who can attend the conference?',
      answer:
        'Everyone is welcome, from people writing their first lines of Python to experienced developers and industry professionals.',
    },
    {
      question: 'When and where will it take place?',
      answer:
        'The confirmed conference schedule and venue will be published on this website and the official PyCon Davao social channels.',
    },
    {
      question: 'How can I purchase a ticket?',
      answer:
        'Ticket options and registration instructions will be available on the conference website once registration opens.',
    },
    {
      question: 'What does my ticket include?',
      answer:
        'Ticket inclusions vary by ticket type. The registration page will list the sessions, meals, merchandise, and other benefits included with each option.',
    },
    {
      question: 'Can I submit a talk or workshop proposal?',
      answer: React.createElement(
        React.Fragment,
        null,
        'Yes. Proposal guidelines, available session formats, and submission deadlines will be shared when the call for proposals opens. ',
        React.createElement(
          'a',
          {
            href: 'https://forms.gle/3pRdF5pYaQY2XZn28',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'font-semibold underline underline-offset-2 hover:text-pycon-orange transition-colors',
          },
          'View proposal guidelines'
        )
      ),
    },
    {
      question: 'Do I need Python experience to attend?',
      answer:
        'No. The conference welcomes all experience levels, and the program will identify sessions so you can find topics suited to your background.',
    },
    {
      question: 'Is the venue accessible?',
      answer:
        'Accessibility information will be included with the final venue details. You may also contact the organizers about specific accommodations.',
    },
    {
      question: 'How can I contact the organizers?',
      answer:
        'Use the official contact details listed on this website for questions about registration, speaking, sponsorship, accessibility, or the event itself.',
    },
  ],
};

export const HomeFaqSectionData = homeFaqSectionData.data;
