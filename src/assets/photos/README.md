# Photos du site

Chaque image est chargée **par son nom de fichier**. Pour changer une photo :

1. Remplacer le fichier par un autre **du même nom** (`.jpg`, `.jpeg`, `.png`, `.webp` ou `.avif` : l'extension peut changer, c'est le nom qui compte).
2. Pousser sur `main` : le site se reconstruit tout seul, recadre et compresse les images.

Fichier supprimé ou absent → un dégradé coloré s'affiche à la place, le site ne casse pas.
Taille conseillée : environ 1600 px sur le grand côté.

| Fichier | Où il apparaît | Cadrage |
|---|---|---|
| `portrait.jpg` | Hero (arche blanche à droite) + section Profil sur mobile | vertical, **fond blanc** |
| `hero-fond.jpg` | Fond du hero derrière le texte (absent = dégradé, c'est voulu) | paysage, plutôt sombre |
| `etude-energie.jpg` | Carrousel des études, 1re étude | carré (affiché en rond) |
| `etude-territoire.jpg` | Carrousel, 2e étude | carré (rond) |
| `etude-consommation.jpg` | Carrousel, 3e étude | carré (rond) |
| `etude-assurance.jpg` | Carrousel, 4e étude | carré (rond) |
| `etude-mobilite.jpg` | Carrousel, 5e étude | carré (rond) |
| `etude-biodiversite.jpg` | Carrousel, 6e étude | carré (rond) |
| `etude-petit-dejeuner.jpg` | Carrousel, 7e étude | carré (rond) |
| `parcours-csa.jpg` | Parcours : CSA / Havas | bandeau horizontal |
| `parcours-kantar.jpg` | Parcours : Kantar | bandeau horizontal |
| `parcours-ehess.jpg` | Parcours : EHESS | bandeau horizontal |
| `parcours-berlin.jpg` | Parcours : TU Berlin | bandeau horizontal |
| `parcours-strasbourg.jpg` | Parcours : Strasbourg | bandeau horizontal |
| `deco-foret.jpg` | Cercle à gauche du carrousel | carré (rond) |
| `deco-champ.jpg` | Cercle à droite du carrousel | carré (rond) |
| `deco-sous-bois.jpg` | Grand cercle, section « Ce qui m'anime » | carré (rond) |
| `deco-coucher.jpg` | Petit cercle, section « Ce qui m'anime » | carré (rond) |

Ajouter une étude : une ligne dans `studies` (`src/data/site.ts`) avec `photo: 'etude-xxx'`, et déposer `etude-xxx.jpg` ici.

## Crédits des photos provisoires

Trouvées via [Openverse](https://openverse.org), sous licence **CC0** ou **marque du domaine public (PDM)** : libres d'usage, attribution non obligatoire. À remplacer par de vraies photos quand elles existent.

| Fichier | Titre | Auteur | Licence | Source |
|---|---|---|---|---|
| `etude-energie.jpg` | 130625-094 Solar Panels | US Coast Guard Academy | PDM | https://www.flickr.com/photos/43228104@N07/9133269157 |
| `etude-territoire.jpg` | Wind turbines | U.S. Fish and Wildlife Service, Midwest Region | PDM | https://www.flickr.com/photos/49208525@N08/15885041575 |
| `etude-consommation.jpg` | Free farmers market, vegetables display | rawpixel | CC0 | https://www.rawpixel.com/image/5913183/photo-image-public-domain-wooden-free |
| `etude-assurance.jpg` | Woman working laptop | rawpixel | CC0 | https://www.rawpixel.com/image/5924243/photo-image-public-domain-hand-technology |
| `etude-mobilite.jpg` | Electric car charging station | rawpixel | CC0 | https://www.rawpixel.com/image/6020562/photo-image-public-domain-space-free |
| `etude-biodiversite.jpg` | Bees, Commercial Street Cafe | rawpixel | CC0 | https://www.rawpixel.com/image/11176478/image-flower-plant-bee |
| `etude-petit-dejeuner.jpg` | Coffee Latte | Sergey Zolkin | CC0 | https://stocksnap.io/photo/coffee-latte-MK3VLNK8NA |
| `parcours-csa.jpg` | Team Meeting | Startup Stock Photos | CC0 | https://stocksnap.io/photo/team-meeting-VQXYE2ZEHC |
| `parcours-kantar.jpg` | Writing Drawing | Green Chameleon | CC0 | https://stocksnap.io/photo/writing-drawing-8Y0EDX4VP9 |
| `parcours-ehess.jpg` | Paris Rooftops | The Met (via rawpixel) | CC0 | https://www.rawpixel.com/image/8030810/paris-rooftops |
| `parcours-berlin.jpg` | Night view Berlin TV Tower | voir la source | PDM | https://www.flickr.com/photos/136359789@N02/32812719334 |
| `parcours-strasbourg.jpg` | Strasbourg Cathedral | The Getty (via rawpixel) | CC0 | https://www.rawpixel.com/image/14248333/strasbourg-cathedral |
| `deco-foret.jpg` | Evergreen forest moss | rawpixel | CC0 | https://www.rawpixel.com/image/3304558/free-photo-image-moss-jungle-willow |
| `deco-sous-bois.jpg` | Mushroom Fungus Growing In The Forest Moss | Jennifer Bourn | CC0 | https://wordpress.org/photos/photo/69561f7fb3/ |
| `deco-champ.jpg` | Agricultural scenery, green field landscape | rawpixel | CC0 | https://www.rawpixel.com/image/5901162/photo-image-public-domain-plant-green |
| `deco-coucher.jpg` | Sunset Field | Dakota Roos | CC0 | https://stocksnap.io/photo/sunset-field-6F9D5EAEC7 |
| `portrait.jpg` | Augustin Vinot--Marull | — | droits réservés | photo personnelle |
