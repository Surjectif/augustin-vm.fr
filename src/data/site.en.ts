// ═══════════════════════════════════════════════════════════════════════════
//  Tout le contenu du site est ici. Les éléments à valider avec Augustin
//  sont marqués TODO :  grep -n TODO src/data/site.ts
// ═══════════════════════════════════════════════════════════════════════════

export const site = {
  url: import.meta.env.PUBLIC_SITE_URL || 'https://augustin-vinot-marull.fr',

  person: {
    firstName: 'Augustin',
    lastName: 'Vinot-Marull',
    role: 'Senior Qualitative Research Consultant · UX Researcher',
    city: 'Paris',
    email: 'augustin.vinotmarull@gmail.com',
    // TODO : on affiche le téléphone ? Par défaut non (spam).
    linkedin: 'https://www.linkedin.com/in/augustin-vinotmarull/',
  },

  // Accroche : la thèse du site, en une phrase.
  pitch:
    'I explore behaviours, perceptions and trade-offs to generate insights that inform decision-making.',

  intro: [
    "Having studied at EHESS and worked at Kantar and CSA / Havas, I lead qualitative research projects end to end: from framing the brief and designing the methodology to conducting fieldwork, analysing findings and presenting insights to executive teams.",
    "What interests me is understanding what people genuinely need, including what they do not express directly. I pay attention not only to what people say, but also to their practices, the constraints they face and the criteria shaping their choices.",
    "I use research materials to build an evidence-based interpretation of behaviour and identify the insights that matter most. The aim is to give teams clear guidance for their decisions, alongside practical recommendations they can take ownership of and put into action.",
  ],

  figures: [
    { value: 15, suffix: '+', label: 'qualitative studies per year' },
    { value: 250, suffix: '+', label: 'interviews conducted' },
    { value: 30, suffix: '+', label: 'focus groups moderated' },
  ],

  // Les exemples de projets fictifs ont été retirés : ne publier que des cas réels autorisés.

  // Research areas shown as areas of exploration, not as client case studies.
  studyCarousel: [
    { photo: 'deco-foret', tone: 'moss', category: 'Explore', topic: 'Understand users and their needs', method: 'In-depth interviews · observation · desk research', focus: 'Surface expectations, constraints and usage patterns.' },
    { photo: 'deco-champ', tone: 'stone', category: 'Evaluate', topic: 'Test concepts and offers', method: 'Interviews · focus groups', focus: 'Identify perceptions, barriers and conditions for adoption.' },
    { photo: 'deco-coucher', tone: 'dusk', category: 'Journeys', topic: 'Understand the customer experience', method: 'Interviews · journey analysis · observation', focus: 'Identify friction points and decisive moments.' },
    { photo: 'deco-sous-bois', tone: 'moss', category: 'Perceptions', topic: 'Explore brand image and communication', method: 'Interviews · focus groups · online communities', focus: 'Understand perceptions and how messages are received.' },
  ],

  // ── Parcours ───────────────────────────────────────────────────────────
  experience: [
    { photo: 'parcours-csa', when: '2023 →', where: 'CSA / Havas', what: 'Senior Qualitative Research Consultant', detail: 'End-to-end project management, B2B and B2C audiences, expert interviews, and coordination with quantitative research teams.' },
    { photo: 'parcours-kantar', when: '2022', where: 'Kantar Insights', what: 'Junior Qualitative Research Assistant', detail: 'Interview guides, moderation, online communities, and verbatim analysis.' },
  ],

  education: [
    { photo: 'parcours-ehess', when: '2018–20', where: 'EHESS, Paris', what: 'Master’s degree in Sociology', detail: 'Two dissertations on makerspaces and six months of fieldwork.' },
    { photo: 'parcours-berlin', when: '2017–18', where: 'TU Berlin', what: 'Sociology of technology and innovation', detail: 'Third-year undergraduate studies, taught in German.' },
    { photo: 'parcours-strasbourg', when: '2015–17', where: 'Université de Strasbourg', what: 'Social Sciences, advanced track', detail: 'Sociology, economics and law.' },
  ],

  // ── Méthode : chaîne façon réseau d’opérateurs TouchDesigner ────────────
  studies: [
    { label: 'AMF', title: 'Regulatory documentation', count: '170 investors · 5 studies', text: 'Readability and comprehension tests using an online community, repeated across five topics: SFDR Articles 8/9, investments, KIDs, structured products and ELTIFs.' },
    { label: 'Energy · UX', title: 'App prototype', count: '24 customers', text: 'Figma prototype testing: user journeys, usability, fluidity and features.' },
    { label: 'Professional body · UX', title: 'Business application', count: '16 professionals', text: 'From technicians to business owners: usage patterns, habits and areas for improvement.' },
    { label: 'Travel · UX', title: 'Travel websites', count: '18 customers and prospects', text: 'Exploring how people use travel websites.' },
    { label: 'Banking · UX', title: 'Banking app', count: '36 dissatisfied customers', text: 'App evaluation and improvement opportunities, including comparison with competing banking apps.' },
    { label: 'Insurance · UX', title: 'New website', count: '30 individuals and financial advisers', text: 'Customers and prospects: improvement opportunities, perceived brand image and segmentation.' },
    { label: 'Media', title: 'Internet TV platform', count: '30 face-to-face interviews', text: 'Use of an internet TV platform and experience personalisation.' },
    { label: 'ARCOM', title: 'Smart TV and YouTube', count: '16 in-home interviews', text: 'Exploring Smart TV usage and YouTube viewing on television.' },
  ],
  skillGroups: [
    { title: 'Research methods', items: ['In-depth interviews', 'Focus groups', 'Ethnography', 'Online communities', 'User research (UX Research)', 'Desk research'] },
    { title: 'Analysis & interpretation', items: ['Thematic analysis', 'Data analysis', 'User journey & usage analysis', 'Qualitative / quantitative integration'] },
    { title: 'Reporting & recommendations', items: ['Research summaries and reports', 'Strategic recommendations'] },
  ],
  analysisTools: ['Office suite', 'R', 'Modalisa', 'Python'],
  creativeTools: ['Photoshop', 'Illustrator', 'TouchDesigner'],
  languages: [
    { name: 'German', level: 'C1/C2' },
    { name: 'English', level: 'C1' },
    { name: 'Danish', level: 'A2' },
    { name: 'Portuguese (Brazilian)', level: 'A1' },
  ],
} as const;
