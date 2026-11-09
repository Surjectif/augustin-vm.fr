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
    linkedin: '', // TODO : URL LinkedIn
  },

  // Accroche : la thèse du site, en une phrase.
  pitch:
    'Je cherche à comprendre ce dont les gens ont besoin — et ce qui se joue derrière ce qu’ils expriment.',

  intro: [
    'Formé à l’EHESS, passé par Kantar puis CSA / Havas, je pilote des études qualitatives de bout en bout : cahier des charges, design méthodologique, terrain, analyse, restitution en comité de direction.',
    'Ce qui m’intéresse, c’est de comprendre ce dont les personnes ont réellement besoin — y compris ce qu’elles n’expriment pas directement. Je cherche à dépasser les déclarations pour regarder les pratiques, les contraintes et les arbitrages qui orientent leurs choix.',
    'Pour y parvenir, je fais dialoguer les observations de terrain, les données et les apports de la recherche. J’aime remonter des faits aux mécanismes qui les expliquent, confronter les interprétations et construire une lecture solide d’un phénomène.',
  ],

  figures: [
    { value: 4, suffix: ' ans', label: 'd’expérience' },
    { value: 200, suffix: '+', label: 'entretiens menés' },
    { value: 20, suffix: '+', label: 'focus groups animés' },
  ],

  // ── Historique des études ──────────────────────────────────────────────
  // `photo` = nom du fichier dans src/assets/photos/ (voir le README du dossier).
  // TODO : TOUT CE BLOC EST UN EXEMPLE. À remplacer par les vraies études
  // d’Augustin (client ou secteur si confidentiel, sujet, méthode, livrable).
  studies: [
    { photo: 'etude-energie', year: '2025', org: 'Fournisseur d’énergie', theme: 'Ce que les ménages attendent d’une offre « verte »', method: 'Entretiens à domicile · 24', deliverable: 'Personas + recommandations offre', tag: 'énergie' },
    { photo: 'etude-territoire', year: '2025', org: 'Collectivité territoriale', theme: 'Acceptabilité d’un parc éolien, côté riverains', method: 'Focus groups · 4', deliverable: 'Note de synthèse, CODIR', tag: 'territoire' },
    { photo: 'etude-consommation', year: '2024', org: 'Distribution alimentaire', theme: 'Le vrac, entre conviction et contrainte', method: 'Ethnographie en magasin', deliverable: 'Parcours client commenté', tag: 'consommation' },
    { photo: 'etude-assurance', year: '2024', org: 'Mutuelle', theme: 'Les jeunes actifs face à la prévoyance', method: 'Communauté en ligne · 3 sem.', deliverable: 'Topline + rapport', tag: 'assurance' },
    { photo: 'etude-mobilite', year: '2023', org: 'Constructeur automobile', theme: 'Passer à l’électrique : les freins réels', method: 'Entretiens approfondis · 30', deliverable: 'Segmentation qualitative', tag: 'mobilité' },
    { photo: 'etude-biodiversite', year: '2023', org: 'Association naturaliste', theme: 'Ce qui fait (vraiment) adhérer', method: 'Entretiens + desk research', deliverable: 'Plateforme de messages', tag: 'biodiversité' },
    { photo: 'etude-petit-dejeuner', year: '2022', org: 'Kantar · grand compte FMCG', theme: 'Rituels du petit-déjeuner', method: 'Modération de communauté', deliverable: 'Analyse thématique des verbatim', tag: 'consommation' },
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
