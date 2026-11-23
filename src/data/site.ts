// ═══════════════════════════════════════════════════════════════════════════
//  Tout le contenu du site est ici. Les éléments à valider avec Augustin
//  sont marqués TODO :  grep -n TODO src/data/site.ts
// ═══════════════════════════════════════════════════════════════════════════

export const site = {
  url: import.meta.env.PUBLIC_SITE_URL || 'https://augustin-vinot-marull.fr',

  person: {
    firstName: 'Augustin',
    lastName: 'Vinot-Marull',
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
    { value: 15, suffix: '+', label: 'études qualitatives par an' },
    { value: 250, suffix: '+', label: 'entretiens menés' },
    { value: 30, suffix: '+', label: 'focus groups animés' },
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
  experience: [
    { photo: 'parcours-csa', when: '2023 →', where: 'CSA / Havas', what: 'Chargé d’études qualitatives senior', detail: 'Pilotage complet, cibles B2B, B2C et experts, articulation avec les équipes quanti.' },
    { photo: 'parcours-kantar', when: '2022', where: 'Kantar Insights', what: 'Assistant chargé d’études quali', detail: 'Guides d’entretien, animation, modération de communautés en ligne, analyse de verbatim.' },
  ],

  education: [
    { photo: 'parcours-ehess', when: '2018–20', where: 'EHESS, Paris', what: 'Master 2 Sociologie', detail: 'Deux mémoires sur les makerspaces, six mois de terrain.' },
    { photo: 'parcours-berlin', when: '2017–18', where: 'TU Berlin', what: 'Sociologie des techniques et de l’innovation', detail: 'Licence 3, en allemand.' },
    { photo: 'parcours-strasbourg', when: '2015–17', where: 'Université de Strasbourg', what: 'Sciences sociales, parcours renforcé', detail: 'Socio, éco, droit.' },
  ],

  // ── Exemples d'études réalisées ────────────────────────────────────────
  studies: [
    { label: 'AMF', title: 'Documentation réglementaire', count: '170 épargnants · 5 études', text: 'Tests de lisibilité et de compréhension menés via une communauté en ligne, reconduite sur cinq sujets : articles 8/9, placements, DIC, produits structurés et ELTIF.' },
    { label: 'Énergie · UX', title: 'Prototype d’application', count: '24 clients', text: 'Test d’un prototype Figma : parcours, ergonomie, fluidité et fonctionnalités.' },
    { label: 'Institution · UX', title: 'Application métier', count: '16 professionnels', text: 'Des techniciens aux chefs d’entreprise : usages, habitudes et axes d’amélioration.' },
    { label: 'Tourisme · UX', title: 'Sites de voyage', count: '18 clients et prospects', text: 'Exploration des usages et des pratiques sur les sites de voyage.' },
    { label: 'Banque · UX', title: 'Application bancaire', count: '36 clients insatisfaits', text: 'Évaluation de l’application et identification des axes d’amélioration, notamment par comparaison avec les applications concurrentes.' },
    { label: 'Assurance · UX', title: 'Nouveau site', count: '30 particuliers et CGP', text: 'Clients et prospects : axes d’amélioration, image perçue et segmentation.' },
    { label: 'Médias', title: 'Plateforme TV par Internet', count: '30 entretiens en face-à-face', text: 'Usages d’une plateforme de télévision par Internet et personnalisation de l’expérience.' },
    { label: 'ARCOM', title: 'Smart TV et YouTube', count: '16 entretiens à domicile', text: 'Exploration des usages de la Smart TV et de YouTube sur téléviseur.' },
  ],

  skillGroups: [
    { title: 'Méthodes d’enquête', items: ['Entretiens approfondis', 'Focus groups', 'Ethnographie', 'Communautés en ligne', 'Recherche utilisateur (UX Research)', 'Desk research'] },
    { title: 'Analyse et interprétation', items: ['Analyse thématique', 'Analyse de données', 'Analyse des usages et parcours', 'Articulation quali / quanti'] },
    { title: 'Restitution et recommandations', items: ['Synthèses et rapports', 'Recommandations stratégiques'] },
  ],
  analysisTools: ['Pack Office', 'R', 'Modalisa', 'Python'],
  creativeTools: ['GIMP', 'TouchDesigner', 'Photoshop', 'Illustrator'],
  languages: [
    { name: 'Allemand', level: 'C1/C2' },
    { name: 'Anglais', level: 'C1' },
    { name: 'Danois', level: 'A2' },
    { name: 'Portugais (br.)', level: 'A1' },
  ],
} as const;
