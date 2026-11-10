// ═══════════════════════════════════════════════════════════════════════════
//  Tout le contenu du site est ici. Les éléments à valider avec Augustin
//  sont marqués TODO :  grep -n TODO src/data/site.ts
// ═══════════════════════════════════════════════════════════════════════════

export const site = {
  url: import.meta.env.PUBLIC_SITE_URL || 'https://augustin-vinot-marull.fr',

  person: {
    firstName: 'Augustin',
    lastName: 'Vinot--Marull',
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
    "My work is to put these elements into perspective: to understand what shapes behaviour, distinguish observations from interpretations, and develop robust insights that can inform decisions.",
  ],

  figures: [
    { value: 4, suffix: ' years', label: 'of experience' },
    { value: 200, suffix: '+', label: 'interviews conducted' },
    { value: 20, suffix: '+', label: 'focus groups moderated' },
  ],

  // Les exemples de projets fictifs ont été retirés : ne publier que des cas réels autorisés.

  // ── Parcours ───────────────────────────────────────────────────────────
  path: [
    { photo: 'parcours-csa', when: '2023 →', where: 'CSA / Havas', what: 'Senior Qualitative Research Consultant', detail: 'End-to-end project management, B2B and B2C audiences, expert interviews, and coordination with quantitative research teams.' },
    { photo: 'parcours-kantar', when: '2022', where: 'Kantar Insights', what: 'Junior Qualitative Research Assistant', detail: 'Interview guides, moderation, online communities, and verbatim analysis.' },
    { photo: 'parcours-ehess', when: '2018–20', where: 'EHESS, Paris', what: 'Master’s degree in Sociology', detail: 'Two dissertations on makerspaces and six months of fieldwork.' },
    { photo: 'parcours-berlin', when: '2017–18', where: 'TU Berlin', what: 'Sociology of technology and innovation', detail: 'Third-year undergraduate studies, taught in German.' },
    { photo: 'parcours-strasbourg', when: '2015–17', where: 'Université de Strasbourg', what: 'Social Sciences, advanced track', detail: 'Sociology, economics and law.' },
  ],

  // ── Méthode : chaîne façon réseau d’opérateurs TouchDesigner ────────────
  method: [
    { op: 'brief1', label: 'Frame the brief', text: 'Identify the real question behind the brief.' },
    { op: 'field1', label: 'Conduct fieldwork', text: 'Interviews, focus groups, observation and online communities.' },
    { op: 'verbatim1', label: 'Listen', text: 'Thematic analysis of verbatims, croisée avec la littérature.' },
    { op: 'synth1', label: 'Synthesize', text: 'Toplines, reports, personas and journeys: useful outputs.' },
    { op: 'out1', label: 'Recommend', text: 'Actionable recommendations, presented to executive teams.' },
  ],

  skills: [
    'Focus groups', 'In-depth interviews', 'Ethnography', 'Desk research',
    'Online communities', 'Qualitative / quantitative integration', 'Strategic recommendations',
    'User research (UX Research)', 'User journey & usage analysis', 'Data analysis',
  ],
  analysisTools: ['Modalisa', 'Python', 'R', 'Office suite'],
  creativeTools: ['Photoshop', 'Illustrator', 'TouchDesigner'],
  languages: [
    { name: 'German', level: 'C1/C2' },
    { name: 'English', level: 'C1' },
    { name: 'Danish', level: 'A2' },
    { name: 'Portuguese (Brazilian)', level: 'A1' },
  ],
} as const;
