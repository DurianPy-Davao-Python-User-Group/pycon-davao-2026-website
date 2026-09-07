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
        'PyCon Davao 2026 is a premier community-driven conference bringing together Python developers, educators, researchers, learners, and tech enthusiasts to connect, collaborate, and share knowledge.',
    },
    {
      question: 'When and where will the conference take place?',
      answer:
        'The confirmed conference schedule, venue details, and program guide will be published on the official PyCon Davao website and our official social media channels.',
    },
    {
      question: 'Who can attend PyCon Davao 2026?',
      answer:
        'PyCon Davao is open to anyone passionate about Python, programming, and technology. Students, software engineers, educators, researchers, industry professionals, and complete beginners are all warmly welcome.',
    },
    {
      question: 'Do I need Python experience to attend?',
      answer:
        'No prior Python experience is necessary. PyCon Davao welcomes attendees of all skill levels, offering sessions and activities suitable for both beginners and seasoned practitioners.',
    },
    {
      question: 'Can I submit a talk or workshop proposal?',
      answer: React.createElement(
        React.Fragment,
        null,
        'Yes. Proposal guidelines, session formats, and submission deadlines are available through our Call for Proposals (CFP). ',
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
      question: 'Is the venue accessible?',
      answer:
        'Venue accessibility details will be provided alongside our final venue announcement. If you require specific accommodations or assistance, please reach out to the organizing team in advance.',
    },
    {
      question: 'How do I register for PyCon Davao 2026?',
      answer:
        'Registration is handled securely through TechTix, accessible via the official PyCon Davao 2026 website. Choose your preferred ticket tier and complete the registration steps online.',
    },
    {
      question: 'What ticket options are available?',
      answer:
        'We offer multiple ticket tiers tailored for students, professionals, and community supporters. Please visit the Tickets section of the official PyCon Davao 2026 website for current pricing, inclusions, and availability.',
    },
    {
      question: 'What does my ticket include?',
      answer:
        'Ticket inclusions vary based on the selected tier, and may include access to sessions, conference kits, meals/refreshments, and certificates of attendance. A detailed breakdown is available on the official website.',
    },
    {
      question: 'Is one ticket valid for both days?',
      answer:
        'Registration for Sprint Day is separate from Main Conference tickets. Attendees can select Sprint Day as an optional add-on during checkout, or register for it individually.',
    },
    {
      question: 'Can I attend only the Main Conference?',
      answer:
        'Yes. You may register exclusively for the Main Conference. Review the available ticket options and inclusions on the official PyCon Davao 2026 website.',
    },
    {
      question: 'Can I attend only Sprint Day?',
      answer:
        'Yes. You may register to participate in Sprint Day only. Details and standalone ticket options can be found on the official website.',
    },
    {
      question: 'Is on-site registration available?',
      answer:
        'No. On-site registration will not be available for either the Main Conference or Sprint Day due to venue capacity and security protocols. All attendees must register online in advance.',
    },
    {
      question: 'Are tickets transferable?',
      answer:
        'No. PyCon Davao 2026 tickets are strictly non-transferable. Badges and event entry are reserved exclusively for the registered attendee named on the ticket.',
    },
    {
      question: 'What should I do if I encounter an issue with my registration?',
      answer: React.createElement(
        React.Fragment,
        null,
        'For ticketing inquiries, payment issues, or registration concerns, please reach out to us at ',
        React.createElement(
          'a',
          {
            href: 'mailto:contact@durianpy.org',
            className:
              'font-semibold underline underline-offset-2 hover:text-pycon-orange transition-colors',
          },
          'contact@durianpy.org'
        ),
        ' or send a message via the ',
        React.createElement(
          'a',
          {
            href: 'https://www.facebook.com/durianpy',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'font-semibold underline underline-offset-2 hover:text-pycon-orange transition-colors',
          },
          'DurianPy Facebook page'
        ),
        '.'
      ),
    },
    {
      question: 'Where can I ask questions or report issues about the website?',
      answer: React.createElement(
        React.Fragment,
        null,
        'For technical feedback, bug reports, or questions regarding the official event website, please email ',
        React.createElement(
          'a',
          {
            href: 'mailto:contact@durianpy.org',
            className:
              'font-semibold underline underline-offset-2 hover:text-pycon-orange transition-colors',
          },
          'contact@durianpy.org'
        ),
        ' or contact us through the ',
        React.createElement(
          'a',
          {
            href: 'https://www.facebook.com/durianpy',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'font-semibold underline underline-offset-2 hover:text-pycon-orange transition-colors',
          },
          'DurianPy Facebook page'
        ),
        '.'
      ),
    },
    {
      question: 'How can I contact the organizers for other inquiries?',
      answer: React.createElement(
        React.Fragment,
        null,
        'For inquiries regarding speaking, sponsorship, partnerships, or community collaborations, you can reach our team via email at ',
        React.createElement(
          'a',
          {
            href: 'mailto:contact@durianpy.org',
            className:
              'font-semibold underline underline-offset-2 hover:text-pycon-orange transition-colors',
          },
          'contact@durianpy.org'
        ),
        ' or connect with us on ',
        React.createElement(
          'a',
          {
            href: 'https://www.facebook.com/durianpy',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'font-semibold underline underline-offset-2 hover:text-pycon-orange transition-colors',
          },
          'Facebook'
        ),
        ', ',
        React.createElement(
          'a',
          {
            href: 'https://www.instagram.com/durianpy.dvo',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'font-semibold underline underline-offset-2 hover:text-pycon-orange transition-colors',
          },
          'Instagram'
        ),
        ', ',
        React.createElement(
          'a',
          {
            href: 'https://www.linkedin.com/company/durianpy',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'font-semibold underline underline-offset-2 hover:text-pycon-orange transition-colors',
          },
          'LinkedIn'
        ),
        ', or ',
        React.createElement(
          'a',
          {
            href: 'https://github.com/orgs/DurianPy-Davao-Python-User-Group',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'font-semibold underline underline-offset-2 hover:text-pycon-orange transition-colors',
          },
          'GitHub'
        ),
        '.'
      ),
    },
  ],
};

export const HomeFaqSectionData = homeFaqSectionData.data;
