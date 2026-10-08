import type { StaticImageData } from 'next/image';

import alphaRomerComa from '@/assets/speakers/alpha-romer-coma.jpg';
import arnelJanSarmiento from '@/assets/speakers/arnel-jan-sarmiento.jpg';
import brianBenedictDeCastro from '@/assets/speakers/brian-benedict-de-castro.jpeg';
import dominiqueGeraldCimafranca from '@/assets/speakers/dominique-gerald-cimafranca.jpg';
import francisReidArranguez from '@/assets/speakers/francis-reid-arranguez.jpeg';
import janDexterDiaz from '@/assets/speakers/jan-dexter-diaz.png';
import jansenMarsonAng from '@/assets/speakers/jansen-marson-ang.png';
import jerryMarte from '@/assets/speakers/jerry-marte.jpg';
import jordanDuabe from '@/assets/speakers/jordan-duabe.png';
import kristineMaeAdlaon from '@/assets/speakers/kristine-mae-adlaon.jpg';
import markAnthonyEstopace from '@/assets/speakers/mark-anthony-estopace.jpg';
import nedPalacios from '@/assets/speakers/ned-palacios.jpg';
import nhylBryleIbanez from '@/assets/speakers/nhyl-bryle-ibanez.jpg';
import zildjianCalifornia from '@/assets/speakers/zildjian-california.png';
import zorexSalvo from '@/assets/speakers/zorex-salvo.jpg';
import jessePanganiban from '@/assets/speakers/jesse-panganiban.jpg';
import nashGolosino from '@/assets/speakers/nash-golosino.png';
import jeremyPatrick from '@/assets/speakers/jeremy-patrick-pacabis.jpg';
import melCadano from '@/assets/speakers/mel-cadano.jpeg';

const avatarById: Record<string, StaticImageData> = {
  'kristine-mae-adlaon': kristineMaeAdlaon,
  'dominique-gerald-cimafranca': dominiqueGeraldCimafranca,
  'zildjian-california': zildjianCalifornia,
  'zorex-salvo': zorexSalvo,
  'jerry-marte': jerryMarte,
  'nhyl-bryle-ibanez': nhylBryleIbanez,
  'jordan-duabe': jordanDuabe,
  'jansen-marson-ang': jansenMarsonAng,
  'mark-anthony-estopace': markAnthonyEstopace,
  'alpha-romer-coma': alphaRomerComa,
  'brian-benedict-de-castro': brianBenedictDeCastro,
  'jan-dexter-diaz': janDexterDiaz,
  'arnel-jan-sarmiento': arnelJanSarmiento,
  'jesse-panganiban': jessePanganiban,
  'ned-palacios': nedPalacios,
  'arnel-jan-sarmiento-sprint': arnelJanSarmiento,
  'francis-reid-arranguez': francisReidArranguez,
  'nash-golosino': nashGolosino,
  'jeremy-patrick-pacabis': jeremyPatrick,
  'mel-cadano': melCadano,
};

export type category = 'keynote' | 'tech-talk' | 'sprint-lead';

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  company?: string;
  avatarUrl?: StaticImageData | string;
  category: category;
  bio?: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface SpeakerGroup {
  type: category;
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
    type: 'tech-talk',
    title: 'Tech Talk Speakers',
    badgeClassName: 'bg-pycon-orange-accent',
    borderClassName: 'border-pycon-orange-accent',
    gradientClassName: 'from-pycon-orange-accent/40',
  },
  {
    type: 'sprint-lead',
    title: 'Sprint Day Leads',
    badgeClassName: 'bg-accent',
    borderClassName: 'border-accent',
    gradientClassName: 'from-accent/40',
  },
];

export const speakers: Speaker[] = [
  // Keynote
  {
    id: 'kristine-mae-adlaon',
    name: 'Kristine Mae Adlaon',
    category: 'keynote',
    designation: 'Head of Research',
    company:
      'Mindanao Natural Language Processing R&D Lab, University of the Immaculate Conception',
    bio: 'Kristine Mae M. Adlaon is a research faculty at the University of the Immaculate Conception, where she serves as Head of the Mindanao Natural Language Processing Research and Development Laboratory (MinNa LProc). Her research focuses on Artificial Intelligence, particularly Natural Language Processing, and its innovative applications at the intersection of computing, technology, language, culture, and human well-being. She has led several projects supported by local, national, and international funding agencies. A strong advocate for human-centered AI, Kristine is also actively engaged in community initiatives that advance language and cultural preservation and empower women in computing and technology.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/kristine-mae-adlaon-799609291/',
      twitter: 'https://www.facebook.com/dsc0ttishf0ld',
    },
    avatarUrl: avatarById['kristine-mae-adlaon'],
  },

  // Tech talks
  {
    id: 'dominique-gerald-cimafranca',
    name: 'Dominique Gerald Cimafranca',
    category: 'tech-talk',
    designation: 'System Architect',
    company: 'Apollotech Software Corporation',
    bio: 'Dom Cimafranca is a system architect at Apollotech Software Corporation and a data engineer. Explore how older-generation, non-GPU machines can be used for practical AI work in resource-constrained environments. This beginner-friendly talk covers the capabilities and limitations of local LLMs, how to extend small LLMs with Wikipedia RAG, and the use of Hermes, DeepSeek, and local services. It also introduces Agentic AI and explores how splitting LLM workloads can provide a more cost-effective approach to practical AI work.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/dom-cimafranca/',
    },
    avatarUrl: avatarById['dominique-gerald-cimafranca'],
  },
  {
    id: 'zildjian-california',
    name: 'Zildjian California',
    category: 'tech-talk',
    designation: 'Computational Research Assistant | Security Department Head',
    company: 'University of the Philippines - Mindanao',
    bio: "Zildjian California is a BS Computer Science student at the University of the Philippines Mindanao and a DOST Merit Scholar, working across computational research and application security. He created Cardiff, an open-source Python and XeLaTeX rendering CLI, where he designed the request-validation and input-safety layer and defined its failure taxonomy. He has merged contributions to TechTix hardening rich-text rendering against cross-site scripting, and led Project LUKE, a Flutter epidemic-response prototype that placed in the Top 15 of 160+ teams at the 1st Naga City Mayoral Hackathon. He serves as Security Department Head of AWS Cloud Club - UP Mindanao and is a member of DurianPy's Creatives Committee. He writes at zecalifornia.com.",
    socials: {
      linkedin: 'https://www.linkedin.com/in/zcalifornia/',
      twitter: 'https://www.facebook.com/zildjiancalifornia/',
    },
    avatarUrl: avatarById['zildjian-california'],
  },
  {
    id: 'zorex-salvo',
    name: 'Zorex Salvo',
    category: 'tech-talk',
    designation: 'Software Engineer',
    company: 'PythonPH',
    bio: 'Zorex Salvo is a software developer with nearly a decade of experience building web applications, backend systems, and developer-focused tools using Python and modern web technologies. Active in the Python Philippines community since 2017 and volunteering since 2018, he has contributed to community initiatives focused on collaboration, education, and growing the local Python ecosystem. In 2024, he served as Chair of PyCon PH and has attended various PyCons across the APAC region to connect with fellow community leaders and strengthen regional collaboration within the Python community.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/zorexsalvo/',
      twitter: 'https://facebook.com/zorexsalvo',
    },
    avatarUrl: avatarById['zorex-salvo'],
  },
  {
    id: 'jerry-marte',
    name: 'Jerry Marte',
    category: 'tech-talk',
    designation: 'Analytics Engineer | Fractional Data Consultant',
    company: 'Data Engineerinc Cebu',
    bio: "Jerry Marte is an Analytics Engineer at me&u Australia, where he works on the data platform behind the company's ordering products: ingestion from four source systems into Snowflake on AWS, the dbt transformation layer on top of it, and an LLM enrichment step running on Amazon Bedrock. He also takes on fractional data consulting work, and leads Data Engineering Cebu, a community group for data practitioners in the region.",
    socials: {
      linkedin: 'https://www.linkedin.com/in/jerry-marte/',
      twitter: 'https://www.facebook.com/jerry.marte.3/',
    },
    avatarUrl: avatarById['jerry-marte'],
  },
  {
    id: 'nhyl-bryle-ibanez',
    name: 'Nhyl Bryle Ibañez',
    category: 'tech-talk',
    designation: 'Platform Engineer',
    company: 'Confide Platform',
    bio: 'Nhyl Bryle Ibañez is a Platform Engineer at Confide Platform specializing in cloud infrastructure and security. He is an AWS Community Builder under the Cloud Operations category and the co-lead of AWS User Group Davao. He holds multiple AWS and Kubernetes certifications and is passionate about sharing practical lessons that help engineers build secure, scalable, and reliable cloud systems.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/nbryleibanez/',
      twitter: 'https://facebook.com/nhylbryle',
    },
    avatarUrl: avatarById['nhyl-bryle-ibanez'],
  },
  {
    id: 'jordan-duabe',
    name: 'Jordan Duabe',
    category: 'tech-talk',
    designation: 'Software Engineer',
    company: 'Anaqua',
    bio: 'SWE with years of industry experience building web and mobile applications. Interests include building custom mechanical keyboards, playing video games, and hiking. Also dabbles in GIS (Geographic Information Systems), linguistics, and music theory.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jordan-duabe/',
    },
    avatarUrl: avatarById['jordan-duabe'],
  },
  {
    id: 'jansen-marson-ang',
    name: 'Jansen Marson Ang',
    category: 'tech-talk',
    designation: 'Machine Learning Engineer',
    company: 'Maya Philippines Inc.',
    bio: 'Jansen Ang is a Machine Learning Engineer at a leading fintech company, specializing in AI engineering, with a focus on AIOps and Agentic workflows. He builds and optimizes intelligent systems that automate operations and improve reliability in real-world environments. He is an AWS Community Builder under the AI Engineering category and is active in organizing two other tech communities and supporting various tech communities. Outside of work, he contributes to open source, writes technical blogs, and delivers training sessions.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jansen-ang/',
      twitter: 'https://www.facebook.com/jansen.ang.37/',
    },
    avatarUrl: avatarById['jansen-marson-ang'],
  },
  {
    id: 'mark-anthony-estopace',
    name: 'Mark Anthony Estopace',
    category: 'tech-talk',
    designation: 'Senior Full Stack Developer',
    company: 'Cambridge University Press & Assessment',
    bio: 'Mark Anthony Estopace is a Microsoft MVP and Senior Full Stack Software Engineer at Cambridge University Press & Assessment, specializing in building scalable, enterprise-grade software solutions. He is an active open-source contributor, multi-award-winning hackathon participant, and community advocate. As the Community Lead of Microsoft Azure Community Philippines, Mark helps organize technical events and regularly shares his knowledge through talks on Microsoft Azure, AI, GitHub, and modern cloud technologies.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ma-estopace/',
      twitter: 'https://web.facebook.com/anth.est.2025/',
    },
    avatarUrl: avatarById['mark-anthony-estopace'],
  },
  {
    id: 'alpha-romer-coma',
    name: 'Alpha Romer Coma',
    category: 'tech-talk',
    designation: 'Senior Data Engineer',
    company: 'ViableView',
    bio: 'Alpha is a Senior Data Engineer at ViableView. He specializes in multimodality with text, videos, and audio, and works on Accelerated Computing with Google TPUs and AWS Trainium. He is a Certified Google Cloud Machine Learning Engineer Professional and an AWS Certified Machine Learning Engineer Associate. He was a speaker at PyTorch Conference Europe at Paris, France, where he talked about the De-mystifying PyTorch for ASICs: When (and Why) to Move Your Development to AI Accelerators, sharing the stage with experts from Google DeepMind, Microsoft, META, and NVIDIA, and global tech companies.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/alpharomercoma',
    },
    avatarUrl: avatarById['alpha-romer-coma'],
  },
  {
    id: 'brian-benedict-de-castro',
    name: 'Brian Benedict de Castro',
    category: 'tech-talk',
    designation: 'Data Analyst | Data Engineer ',
    company: 'AWS Student Builder Group - UP Mindanao | Coca Cola Europacific Aboitiz Philippines',
    bio: 'Benz is the AWS SBG UP-Min Data Analytics Head and a Data Analyst. His technical focus spans exploratory data analysis (EDA), machine learning, and advanced data visualization, with a particular fascination for how numbers tell stories and influence human behavior. Beyond building analytical pipelines, Benz is dedicated to leading student initiatives that make data science approachable, practical, and impactful for the community.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/brianbdecastro',
      twitter: 'https://www.facebook.com/brian.benedict.982',
    },
    avatarUrl: avatarById['brian-benedict-de-castro'],
  },
  {
    id: 'jan-dexter-diaz',
    name: 'Jan Dexter Diaz',
    category: 'tech-talk',
    designation: 'Freelance Software Engineer | AWS Student Builder Group Leader',
    company: 'AWS Student Builder Group - Apex (AdDU)',
    bio: 'Freelance software engineer, and digital artist crafting performant products enriched with visual storytelling. Currently based in Davao City, collaborating with startups, communities, and NGOs.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jan-dexter/',
      twitter: 'https://www.facebook.com/jan.dexter.23/',
    },
    avatarUrl: avatarById['jan-dexter-diaz'],
  },
  {
    id: 'arnel-jan-sarmiento',
    name: 'Arnel Jan Sarmiento',
    category: 'tech-talk',
    designation: 'Solutions Architect | Community Lead',
    company: 'Amazon Web Services (AWS) | DurianPy - Davao Python User Group',
    bio: "Arnel is a Solutions Architect at Amazon Web Services, serving as a trusted advisor who helps customers across diverse industries translate their business goals into robust technical solutions. He previously served as the Lead Infrastructure Engineer at one of Europe's fastest-growing companies. Beyond his work, Arnel is the Community Lead of DurianPy, Davao's official Python User Group, where he champions developer mentorship, hands-on technical learning, and open collaboration to strengthen the region's growing Python ecosystem.",
    socials: {
      linkedin: 'https://www.linkedin.com/in/arjsarmiento/',
      twitter: 'https://www.facebook.com/rnel.jan.sarmiento/',
    },
    avatarUrl: avatarById['arnel-jan-sarmiento'],
  },
  {
    id: 'nash-golosino',
    name: 'Nash Golosino',
    category: 'tech-talk',
    designation: 'Speech & ML Researcher | CS Student, UIC',
    company: 'University of the Immaculate Conception',
    bio: "Nash T. Golosino is a fourth-year BS Computer Science student majoring in Computational Health Informatics at the University of the Immaculate Conception (UIC) in Davao City, a consistent Dean's Lister, and a member of the MinNa LProc R&D Laboratory. His current research, SALITA (Speech-Adaptive Low-resource Intra-sentential Transcription Architecture), looks at how well multilingual speech recognition handles the way patients in Davao actually talk, often switching between Cebuano or Tagalog and English in the same sentence. Using Python and Hugging Face Transformers on PyTorch, he benchmarks Whisper, MMS, and SeamlessM4T on Tagalog and Cebuano speech. He studies how the choice of scoring convention can change which model ranks best, where errors pile up at language-switch points, and which mistakes would matter in a clinic, such as dropped negations or missing chief complaints. A paper from this work, co-authored with Ma. Nicole B. Morales and Kristine Mae Adlaon, is currently under review for NLPIR 2026. Outside the lab, Nash has led student government at UIC's College of Computer Studies, serving as College Secretary in 2024–2025 and College Governor in 2025–2026.",
    socials: {
      linkedin: 'https://www.linkedin.com/in/nash-golosino-9927b7304/',
      twitter: 'https://www.facebook.com/Nashiengg',
    },
    avatarUrl: avatarById['nash-golosino'],
  },
  {
    id: 'jeremy-patrick-pacabis',
    name: 'Jeremy Patrick Pacabis',
    category: 'tech-talk',
    designation: 'Software Developer',
    company: 'Ingenuity Software',
    bio: 'All-around full stack software developer. (will just send a longer version)',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jeremypacabis/',
      twitter: 'https://www.facebook.com/jeremypacabis/',
    },
    avatarUrl: avatarById['jeremy-patrick-pacabis'],
  },
  {
    id: 'mel-cadano',
    name: 'Mel Cadano',
    category: 'tech-talk',
    designation: 'Backend Engineer',
    company: '',
    bio: "",
    socials: {
      linkedin: 'https://www.linkedin.com/in/mel-cadano/',
      twitter: 'https://www.facebook.com/grmelcdn/',
    },
    avatarUrl: avatarById['mel-cadano'],
  },

  // Sprint leads
  {
    id: 'jesse-panganiban',
    name: 'Jesse Panganiban',
    category: 'sprint-lead',
    designation: 'CEO',
    company: 'Sageware Solutions Inc',
    bio: 'Jesse Panganiban is the CEO of Sageware Solutions Inc and a builder of teams and mission-critical systems. With experience leading engineering teams and delivering software solutions, he focuses on building practical systems that solve real-world problems. His work spans software architecture, product development, and emerging AI technologies, helping organizations turn ideas into reliable and scalable applications. Jesse is passionate about helping software engineers thrive in the AI era through hands-on learning and practical development experience. He believes that understanding how AI systems work is key to building solutions that go beyond off-the-shelf tools. In this workshop, he will guide participants through the fundamentals of creating agentic applications using PydanticAI. Through a self-paced, hands-on approach, attendees will gain practical experience building AI-powered workflows and develop the confidence to create custom AI solutions tailored to their own projects and use cases.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/thejpanganiban/',
      twitter: 'https://www.facebook.com/thejpanganiban',
    },
    avatarUrl: avatarById['jesse-panganiban'],
  },
  {
    id: 'ned-palacios',
    name: 'Ned Palacios',
    category: 'sprint-lead',
    designation: 'CTO',
    company: 'Dotside Studios',
    bio: "Ned Palacios is a software engineer and community builder based in Davao City, Philippines. A computer science graduate, he is passionate about building tools and applications that improve both developer and human experiences. He is the co-founder and CTO of Dotside Studios, a startup focused on building practical, high-impact products that help organizations and individuals create, connect, and thrive. He is also the community lead of WebDavao, formerly PWA Pilipinas Davao, where he helps grow and connect the local web community. Previously, Ned co-founded Davao Interschool Computer Enthusiasts (DICE), where he served as Student Relations Lead, and was a Google Developer Student Clubs Lead at the University of the Immaculate Conception (UIC). Outside of work and community building, Ned spends his time experimenting with side projects that he'll probably never finish.",
    socials: {
      linkedin: 'https://linkedin.com/in/nedp',
      twitter: 'https://facebook.com/slapden',
    },
    avatarUrl: avatarById['ned-palacios'],
  },
  {
    id: 'arnel-jan-sarmiento-sprint',
    name: 'Arnel Jan Sarmiento',
    category: 'sprint-lead',
    designation: 'Solutions Architect | Community Lead',
    company: 'Amazon Web Services (AWS) | DurianPy - Davao Python User Group',
    bio: "Arnel is a Solutions Architect at Amazon Web Services, serving as a trusted advisor who helps customers across diverse industries translate their business goals into robust technical solutions. He previously served as the Lead Infrastructure Engineer at one of Europe's fastest-growing companies. Beyond his work, Arnel is the Community Lead of DurianPy, Davao's official Python User Group, where he champions developer mentorship, hands-on technical learning, and open collaboration to strengthen the region's growing Python ecosystem.",
    socials: {
      linkedin: 'https://www.linkedin.com/in/arjsarmiento/',
      twitter: 'https://www.facebook.com/rnel.jan.sarmiento/',
    },
    avatarUrl: avatarById['arnel-jan-sarmiento-sprint'],
  },
  {
    id: 'francis-reid-arranguez',
    name: 'Francis Reid Arranguez',
    category: 'sprint-lead',
    designation: 'Backend Engineer',
    company: 'Healf/DurianPy',
    bio: "Francis is a Backend AI Engineer at Healf, a UK-based wellness marketplace, where he builds scalable, reliable backend systems and cloud infrastructure using Python and AWS. He is also a 4th-year Computer Science student at the University of the Philippines Mindanao and Head of Communications for DurianPy - Davao's Python User Group, and is an AWS Certified Cloud and AI Practitioner. He stays active in tech gatherings and community events, where he enjoys connecting with fellow developers, sharing what he's learned, and discovering new technologies to explore.",
    socials: {
      linkedin: 'https://www.linkedin.com/in/francisreidarranguez/',
      twitter: 'https://fb.com/ce.leruru',
    },
    avatarUrl: avatarById['francis-reid-arranguez'],
  },
];
