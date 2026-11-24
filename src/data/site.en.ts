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

  // Real-world use cases drawn from completed research projects.
  studyCarousel: [
    { photo: 'etude-assurance', tone: 'moss', category: 'Finance · AMF', topic: 'Making financial documentation easier to understand', method: '5 studies · 170 savers · online community', focus: 'Testing the readability and comprehension of documents on SFDR Articles 8/9, investments, KIDs, structured products and ELTIFs.' },
    { photo: 'voiture-electrique', tone: 'stone', category: 'Energy · UX', topic: 'Evaluating an app prototype', method: '24 customers · Figma prototype', focus: 'Assessing user journeys, usability, fluidity and feature relevance ahead of launch.' },
    { photo: 'teléphone-portable', tone: 'dusk', category: 'Digital services · UX', topic: 'Improving apps and websites', method: '16 professionals · 36 banking customers · 30 individuals and financial advisers', focus: 'Understanding usage, identifying friction points and developing areas for improvement.' },
    { photo: 'télévision', tone: 'moss', category: 'Travel · Media · ARCOM', topic: 'Understanding platform usage', method: '18 customers and prospects · 30 face-to-face media interviews · 16 in-home ARCOM interviews', focus: 'Exploring travel websites, internet TV platforms, Smart TV and YouTube usage.' },
  ],

  // ── Parcours ───────────────────────────────────────────────────────────
  experience: [
    { photo: 'parcours-csa', when: '2023 →', where: 'CSA / Havas', what: 'Senior Qualitative Research Consultant', detail: 'End-to-end project management, B2B and B2C audiences, expert interviews, and coordination with quantitative research teams.' },
    { photo: 'parcours-kantar', when: '2022', where: 'Kantar Insights', what: 'Junior Qualitative Research Assistant', detail: 'Interview guides, moderation, online communities, and verbatim analysis.' },
  ],

  education: [
    { photo: 'parcours-ehess', when: '2018–20', where: 'EHESS, Paris', what: 'Master’s degree in Sociology', thesisTitle: 'Making, doing together, doing for: the social dimensions of technical activity in co-creation spaces.', detail: 'Six months of fieldwork.' },
    { photo: 'parcours-berlin', when: '2017–18', where: 'TU Berlin', what: 'Sociology of technology and innovation', detail: 'Third-year undergraduate studies, taught in German.' },
    { photo: 'parcours-strasbourg', when: '2015–17', where: 'Université de Strasbourg', what: 'Social Sciences, advanced track', detail: 'Sociology, economics and law.' },
  ],

  // ── Method: research process ──────────────────────────────────────────
  method: [
    { op: 'brief1', label: 'Clarify', text: 'Clarify the issues, formulate research questions and objectives, and identify the hypotheses to explore.' },
    { op: 'design1', label: 'Design', text: 'Select the audiences and methods, then build a research approach suited to the brief.' },
    { op: 'field1', label: 'Investigate', text: 'Conduct fieldwork through interviews, focus groups, observation or online communities.' },
    { op: 'analysis1', label: 'Analyse', text: 'Bring evidence together, compare perspectives and identify the dynamics shaping behaviour.' },
    { op: 'out1', label: 'Recommend', text: 'Present the findings and formulate actionable recommendations.' },
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
