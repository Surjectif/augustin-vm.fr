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
    linkedin: '', // TODO : URL LinkedIn
  },

  // Accroche : la thèse du site, en une phrase.
  pitch:
    'I seek to understand what people need — including what lies behind what they say.',

  intro: [
    'Educated at EHESS, with experience at Kantar and CSA / Havas, I lead qualitative research projects end to end: from research design and fieldwork to analysis and executive presentations.',
    'I want to understand what people genuinely need — including what they may not express directly. I look beyond stated opinions to examine the practices, constraints and trade-offs that shape their choices.',
    'To do so, I bring field observations, data and research literature into conversation. I work from evidence towards the mechanisms that explain it, testing interpretations and building a well-supported understanding of a phenomenon.',
  ],

  figures: [
    { value: 4, suffix: ' years', label: 'of experience' },
    { value: 200, suffix: '+', label: 'interviews conducted' },
    { value: 20, suffix: '+', label: 'focus groups moderated' },
  ],

  // ── Historique des études ──────────────────────────────────────────────
  // `photo` = nom du fichier dans src/assets/photos/ (voir le README du dossier).
  // TODO : TOUT CE BLOC EST UN EXEMPLE. À remplacer par les vraies études
  // d’Augustin (client ou secteur si confidentiel, sujet, méthode, livrable).
  studies: [
    { photo: 'etude-energie', year: '2025', org: 'Energy supplier', theme: 'What households expect from a “green” energy offer', method: 'In-home interviews · 24', deliverable: 'Personas + offer recommendations', tag: 'énergie' },
    { photo: 'etude-territoire', year: '2025', org: 'Local authority', theme: 'How local residents perceive a wind farm', method: 'Focus groups · 4', deliverable: 'Executive summary', tag: 'territoire' },
    { photo: 'etude-consommation', year: '2024', org: 'Food retail', theme: 'Bulk shopping: between values and constraints', method: 'In-store ethnography', deliverable: 'Annotated customer journey', tag: 'consommation' },
    { photo: 'etude-assurance', year: '2024', org: 'Health insurer', theme: 'Young professionals and income protection', method: 'Online community · 3 weeks', deliverable: 'Topline + report', tag: 'assurance' },
    { photo: 'etude-mobilite', year: '2023', org: 'Automotive manufacturer', theme: 'Switching to electric vehicles: the real barriers', method: 'In-depth interviews · 30', deliverable: 'Qualitative segmentation', tag: 'mobilité' },
    { photo: 'etude-biodiversite', year: '2023', org: 'Nature conservation NGO', theme: 'What really drives membership', method: 'Interviews + desk research', deliverable: 'Messaging platform', tag: 'biodiversité' },
    { photo: 'etude-petit-dejeuner', year: '2022', org: 'Kantar · major FMCG account', theme: 'Breakfast routines', method: 'Online community moderation', deliverable: 'Thematic analysis of verbatims', tag: 'consommation' },
  ],

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
