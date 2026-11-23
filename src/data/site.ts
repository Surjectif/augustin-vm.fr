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

  // Exemples de cas d'usage issus de missions réalisées.
  studyCarousel: [
    { photo: 'deco-foret', tone: 'moss', category: 'Finance · AMF', topic: 'Rendre la documentation financière compréhensible', method: '5 études · 170 épargnants · communauté en ligne', focus: 'Tester la lisibilité et la compréhension de documents sur les articles 8/9, les placements, les DIC, les produits structurés et les ELTIF.' },
    { photo: 'deco-champ', tone: 'stone', category: 'Énergie · UX', topic: 'Évaluer un prototype d’application', method: '24 clients · prototype Figma', focus: 'Observer les parcours, l’ergonomie, la fluidité et la pertinence des fonctionnalités avant le lancement.' },
    { photo: 'deco-coucher', tone: 'dusk', category: 'Services numériques · UX', topic: 'Améliorer des applications et des sites', method: '16 professionnels · 36 clients bancaires · 30 particuliers et CGP', focus: 'Comprendre les usages, identifier les points de friction et faire émerger des pistes d’amélioration.' },
    { photo: 'deco-sous-bois', tone: 'moss', category: 'Tourisme · Médias · ARCOM', topic: 'Comprendre les usages des plateformes', method: '18 clients et prospects · 30 entretiens en face-à-face · 16 entretiens à domicile', focus: 'Explorer les pratiques sur les sites de voyage, les plateformes TV par Internet, la Smart TV et YouTube.' },
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

  // ── Méthode : chaîne façon réseau d’opérateurs TouchDesigner ────────────
  method: [
    { op: 'brief1', label: 'Clarifier', text: 'Préciser les enjeux, formuler les questions et objectifs de recherche et poser les hypothèses à explorer.' },
    { op: 'design1', label: 'Concevoir', text: 'Définir les publics, choisir les méthodes et construire un dispositif adapté à la problématique.' },
    { op: 'field1', label: 'Enquêter', text: 'Conduire le terrain : entretiens, focus groups, observation ou communautés en ligne.' },
    { op: 'analysis1', label: 'Analyser', text: 'Croiser les matériaux, confronter les points de vue et dégager les logiques qui structurent les comportements.' },
    { op: 'out1', label: 'Recommander', text: 'Présenter les enseignements et formuler des recommandations opérationnelles.' },
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
