export interface HomeFaqItem {
  question: string;
  answer: string;
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
      answer:
        'Yes. Proposal guidelines, available session formats, and submission deadlines will be shared when the call for proposals opens.',
    },
    {
      question: 'Do I need Python experience to attend?',
      answer:
        'No. The conference welcomes all experience levels, and the program will identify sessions so you can find topics suited to your background.',
    },
    {
      question: 'Will there be opportunities to volunteer?',
      answer:
        'Yes. Volunteer roles and application details will be announced closer to the conference date.',
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
