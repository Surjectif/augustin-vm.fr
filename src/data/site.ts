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
    "Mon travail consiste à partir des matériaux d’enquête pour construire une interprétation argumentée des comportements et en tirer des enseignements hiérarchisés. L’objectif est de donner aux équipes des repères clairs pour orienter leurs décisions, ainsi que des recommandations concrètes qu’elles puissent s’approprier et mettre en œuvre.",
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
    { op: 'brief1', label: 'Clarifier', text: 'Préciser les enjeux, formuler les questions et objectifs de recherche et poser les hypothèses à explorer.' },
    { op: 'design1', label: 'Concevoir', text: 'Définir les publics, choisir les méthodes et construire un dispositif adapté à la problématique.' },
    { op: 'field1', label: 'Enquêter', text: 'Conduire le terrain : entretiens, focus groups, observation ou communautés en ligne.' },
    { op: 'analysis1', label: 'Analyser', text: 'Croiser les matériaux, confronter les points de vue et dégager les logiques qui structurent les comportements.' },
    { op: 'out1', label: 'Recommander', text: 'Présenter les enseignements et formuler des recommandations opérationnelles.' },
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
