// ═══════════════════════════════════════════════════════════════════════════
//  Tout le contenu du site est ici. Les éléments à valider avec Augustin
//  sont marqués TODO :  grep -n TODO src/data/site.ts
// ═══════════════════════════════════════════════════════════════════════════

export const site = {
  url: import.meta.env.PUBLIC_SITE_URL || 'https://augustin-vinot-marull.fr',

  person: {
    firstName: 'Augustin',
    lastName: 'Vinot--Marull',
    role: 'Chargé d’études qualitatives senior · UX Researcher',
    city: 'Paris',
    email: 'augustin.vinotmarull@gmail.com',
    // TODO : on affiche le téléphone ? Par défaut non (spam).
    linkedin: 'https://www.linkedin.com/in/augustin-vinotmarull/',
  },

  // Accroche : la thèse du site, en une phrase.
  pitch:
    'J’explore les usages, les perceptions et les arbitrages pour faire émerger des enseignements utiles à la décision.',

  intro: [
    "Formé à l’EHESS, passé par Kantar puis CSA / Havas, je pilote des études qualitatives de bout en bout : du cadrage de la demande à la conception méthodologique, la conduite du terrain, l’analyse et la présentation des enseignements en comité de direction.",
    "Ce qui m’intéresse, c’est de comprendre ce dont les personnes ont réellement besoin, y compris ce qu’elles n’expriment pas directement. Je m’intéresse autant à leurs discours qu’à leurs pratiques, aux contraintes qu’elles rencontrent et aux critères qui orientent leurs choix.",
    "Mon travail consiste à mettre ces éléments en perspective pour comprendre ce qui structure les comportements et distinguer les constats des interprétations. Il s’agit ensuite de faire émerger des enseignements solides, utiles à la décision, et de formuler des recommandations que les équipes peuvent s’approprier et mettre en œuvre.",
  ],

  figures: [
    { value: 4, suffix: ' ans', label: 'd’expérience' },
    { value: 200, suffix: '+', label: 'entretiens menés' },
    { value: 20, suffix: '+', label: 'focus groups animés' },
  ],

  // Les exemples de projets fictifs ont été retirés : ne publier que des cas réels autorisés.

  // Axes de recherche présentés comme champs d’exploration, pas comme études de cas clients.
  studyCarousel: [
    { photo: 'deco-foret', tone: 'moss', category: 'Explorer', topic: 'Comprendre les usages et les besoins', method: 'Entretiens approfondis · observation · desk research', focus: 'Faire émerger les attentes, les contraintes et les logiques d’usage.' },
    { photo: 'deco-champ', tone: 'stone', category: 'Évaluer', topic: 'Tester des concepts et des offres', method: 'Entretiens · focus groups', focus: 'Identifier les perceptions, les freins et les conditions d’adhésion.' },
    { photo: 'deco-coucher', tone: 'dusk', category: 'Parcours', topic: 'Comprendre l’expérience client', method: 'Entretiens · analyse des parcours · observation', focus: 'Repérer les points de friction et les moments décisifs.' },
    { photo: 'deco-sous-bois', tone: 'moss', category: 'Perceptions', topic: 'Analyser l’image et la communication', method: 'Entretiens · focus groups · communautés en ligne', focus: 'Comprendre les représentations et la réception des messages.' },
  ],

  // ── Parcours ───────────────────────────────────────────────────────────
  path: [
    { photo: 'parcours-csa', when: '2023 →', where: 'CSA / Havas', what: 'Chargé d’études qualitatives senior', detail: 'Pilotage complet, cibles B2B, B2C et experts, articulation avec les équipes quanti.' },
    { photo: 'parcours-kantar', when: '2022', where: 'Kantar Insights', what: 'Assistant chargé d’études quali', detail: 'Guides d’entretien, animation, modération de communautés en ligne, analyse de verbatim.' },
    { photo: 'parcours-ehess', when: '2018–20', where: 'EHESS, Paris', what: 'Master 2 Sociologie', detail: 'Deux mémoires sur les makerspaces, six mois de terrain.' },
    { photo: 'parcours-berlin', when: '2017–18', where: 'TU Berlin', what: 'Sociologie des techniques et de l’innovation', detail: 'Licence 3, en allemand.' },
    { photo: 'parcours-strasbourg', when: '2015–17', where: 'Université de Strasbourg', what: 'Sciences sociales, parcours renforcé', detail: 'Socio, éco, droit.' },
  ],

  // ── Méthode : chaîne façon réseau d’opérateurs TouchDesigner ────────────
  method: [
    { op: 'brief1', label: 'Cadrer', text: 'Reformuler la vraie question derrière le cahier des charges.' },
    { op: 'field1', label: 'Aller sur le terrain', text: 'Entretiens, focus groups, observation, communautés en ligne.' },
    { op: 'verbatim1', label: 'Écouter', text: 'Analyse thématique des verbatim, croisée avec la littérature.' },
    { op: 'synth1', label: 'Synthétiser', text: 'Toplines, rapports, personas, parcours : ce qui sert.' },
    { op: 'out1', label: 'Recommander', text: 'Des recommandations actionnables, défendues en CODIR.' },
  ],

  skills: [
    'Focus groups', 'Entretiens approfondis', 'Ethnographie', 'Desk research',
    'Communautés en ligne', 'Articulation quali / quanti', 'Recommandations stratégiques',
    'Recherche utilisateur (UX Research)', 'Analyse des usages et parcours', 'Analyse de données',
  ],
  analysisTools: ['Modalisa', 'Python', 'R', 'Pack Office'],
  creativeTools: ['Photoshop', 'Illustrator', 'TouchDesigner'],
  languages: [
    { name: 'Allemand', level: 'C1/C2' },
    { name: 'Anglais', level: 'C1' },
    { name: 'Danois', level: 'A2' },
    { name: 'Portugais (br.)', level: 'A1' },
  ],
} as const;
