/****************** 1 **********************/
articlesDB.push(new Article(
    "Refonte de site", `
    <div class="article-properties">
        <div class="flex space-between">
            <div class="article-prop-col">
                <p class="title">Taille de l'équipe</p>
                <p>5</p>
                <p class="title">Durée</p>
                <p>2 semaines</p>
                <p class="title">Date</p>
                <p>Octobre 2020</p>
            </div>
            <div class="article-prop-col">
                <p class="title">Rôles</p>
                <ul>
                    <li>Webdesign</li>
                    <li>Front-end developpement</li>
                </ul>
                <p class="title">Outils</p>
                <ul>
                    <li>Adobe XD</li>
                    <li>VS Code</li>
                    <li>Netlify</li>
                </ul>
            </div>
        </div>
    </div>

    <p>Description du projet ici...</p>
`));

/****************** 2 **********************/
articlesDB.push(new Article(
    "Minecraft OpenGL", `
    <div class="article-properties">
        <div class="flex space-between">
            <div class="article-prop-col">
                <p class="title">Taille de l'équipe</p>
                <p>Seul</p>
                <p class="title">Rôles</p>
                <ul>
                    <li>Programmation du Renderer</li>
                    <li>Création du générateur de terrain</li>
                </ul>
            </div>
            <div class="article-prop-col">
                <p class="title">Outils</p>
                <ul>
                    <li>VS Community</li>
                    <li>Git</li>
                </ul>
                <p class="title">Date</p>
                <p>Janvier 2021</p>
            </div>
        </div>
    </div>

    <p>Pour mieux comprendre les outils que j’utilise au quotidien tel que Unity et 
    Blender j’ai décidé de créer un petit moteur de jeu voxel avec l’API OpenGL. 
    Je travaille encore sur le moteur mais je souhaitais tout de même documenter 
    ma progression ici.

    <p>Je me suis tout d’abord renseigner afin de comprendre le pipeline à mettre en place 
    pour afficher mon premier triangle. Après avoir créé un tapon de sommets, définit 
    un layout pour ce dernier et compilé un vertex et fragment shader basique j’ai pu 
    effectuer mon premier draw call et afficher un triangle :</p>

    <img src="assets/images/projects/premier-triangle.png"/>

    <h3>Renderer</h3>

    <p>Ensuite, à l’aide des bibliothèques ASSIMP et stbi_image j’ai appris à 
    charger des fichiers .obj et à appliquer des textures :</p>

    <img src="assets/images/projects/chargment-modele-texture.png"/>

    <p>Grace au site <a href="http://www.opengl-tutorial.org/fr/beginners-tutorials/
    tutorial-8-basic-shading/">opengl-tutorial.org</a> j’ai ensuite découvert la 
    programmation de shaders en GLSL.</p>

    <img src="assets/images/projects/shader-point-light.png"/>

    <h3>Génération du terrain</h3>

    <p>Une fois le Renderer organisé et découpé en plusieurs classes j’ai commencé 
    la logique de génération du terrain par la création de mon premier chunk (ensemble de blocs). Le plus compliqué a été d’optimiser le chunk en affichant uniquement les faces visibles par le joueur.</p>

    <img src="assets/images/projects/premier-chunk.png"/>

    <p>J’ai ensuite mis en place le chargement et déchargement des chunks pour 
    rendre le monde infini :</p>

    <img src="assets/images/projects/generation-infinie.png"/>

    <p>Enfin, pour obtenir un terrain convainquant j’ai utilisé le bruit Simplex 
    afin de générer une height map. Pour rendre le terrain plus détaillé j’ai 
    appliqué 8 couches de bruit (octaves).</p>

    <img src="assets/images/projects/exemple-octaves.png"/>

    <p>Voilà donc l’état actuel du terrain :</p>

    <img src="assets/images/projects/height-map.png"/>

    <p>Je travaille actuellement sur des modifications du générateur de terrain 
    afin d’utiliser différents blocs dans un chunk.</p>
`));


/****************** 3 **********************/
articlesDB.push(new Article(
    "Jeu avec une équipe grecque", `
    <div class="article-properties">
        <div class="flex space-between">
            <div class="article-prop-col">
                <p class="title">Taille de l'équipe</p>
                <p>5</p>
                <p class="title">Durée</p>
                <p>6 mois</p>
                <p class="title">Date</p>
                <p>Septembre 2019</p>
            </div>
            <div class="article-prop-col">
                <p class="title">Rôles</p>
                <ul>
                    <li>Programmation IA</li>
                    <li>Programmation gameplay</li>
                </ul>
                <p class="title">Outils</p>
                <ul>
                    <li>Unity</li>
                    <li>Unity Collab</li>
                    <li>VS Community</li>
                </ul>
            </div>
        </div>
    </div>

    <p>Souhaitant me lancer dans un projet plus conséquent et travailler en équipe, 
    j'ai postulé à une annonce sur un forum et rejoint une équipe de développeurs 
    indépendants grecs. J’ai travaillé en tant que programmeur sur leur projet de RPG 
    sur Unity, projet qui est actuellement arrêté. Il y avait un Game designer, 
    deux artistes et nous étions deux programmeurs.</p>

    <img src="assets/images/projects/mephis.jpg" />

    <h3>Le jeu</h3>

    <p>Ce jeu 3D à la troisième personne prenait place dans un monde médiéval 
    fantastique. Son Level design était inspiré par celui de Dark Souls qui offre 
    de nombreux chemins alternatifs. La progression était elle aussi non-linéaire 
    et se faisait via l’acquisition de compétences permettant au joueur de personnaliser 
    son style de jeu.</p>

    <img src="assets/images/projects/mephis_in_corridor.jpg" />

    <h3>Mes missions</h3>

    <p>A mon arrivée dans l’équipe j’ai mis en place <strong>l’intelligence 
    artificielle des ennemis</strong>.</p>

    <p>J'ai d'abord construit une classe gérant le pathfinding grâce au
    composant NavMeshAgent de Unity. Cette dernière est commune a tous les
    NPC et permet par exemple aux personnages de se rendre à un endroit
    ou de fuir un objet.</p>

    <p>Je me suis ensuite occupé de la classe responsable des combats, en mettant en 
    place un finite-state machine afin de décliner le code pour chaque ennemi 
    plus facilement. Le joueur pouvant adopter plusieurs façons de jouer, les ennemis 
    allaient donc avoir de nombreuses réactions différentes selon leurs types. 
    Vous trouverez ci-dessous une démonstration de certains comportements des ennemis 
    en infiltration :</p>

    <iframe id="ytb" width="560" height="315" src="https://www.youtube.com/embed/o-CC24HkcXo" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
    picture-in-picture" allowfullscreen></iframe>

    <h3>Difficultés rencontrées</h3>

    <p>La communication a parfois été compliqué étant donné que nos réunions hebdomadaires 
    étaient en anglais mais, mes coéquipiers ont toujours pris en compte mes difficultés 
    et j’ai énormément progressé depuis cette expérience. De plus, j’ai intégré l’équipe 
    avec des bases en C# mais, j’ai dû m’adapter assez vite et notamment apprendre à mettre 
    en place un système de finite-state machine pour les ennemis.</p>

    <img src="assets/images/projects/solsgardfinal.jpg" />

    <p>Je vous propose d’écouter la musique qu’un musicien a produit pour ce jeu :<br><br>
    <audio controls src="assets/sounds/battle-wip2.mp3"> Your browser does not support 
    the audio element.</audio></p>

`));

/****************** 4 **********************/
articlesDB.push(new Article(
    "Atelier jeux vidéo MMI", `
    <div class="article-properties">
        <div class="flex space-between">
            <div class="article-prop-col">
                <p class="title">Taille de l'équipe</p>
                <p>5</p>
                <p class="title">Durée</p>
                <p>1 semaines</p>
                <p class="title">Date</p>
                <p>Novembre 2020</p>
            </div>
            <div class="article-prop-col">
                <p class="title">Rôles</p>
                <ul>
                    <li>Programmation gameplay</li>
                    <li>Design game feel</li>
                </ul>
                <p class="title">Outils</p>
                <ul>
                    <li>Unity</li>
                    <li>Unity Collab</li>
                    <li>VS Community</li>
                </ul>
            </div>
        </div>
    </div>

    <iframe id="ytb" width="560" height="315" src="https://www.youtube.com/embed/ZXLYm_i6tGw" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>

    <p>Dans le cadre d’un atelier du DUT MMI à Bordeaux nous avons réalisé un jeu vidéo en une semaine sur 
    Unity. Le rendu final de ce projet est la vidéo ci-dessus.</p>

    <h3>Le jeu</h3>

    <p>Ce jeu est un beat them all 2D où le joueur doit éliminer des vagues d'ennemis avec un boomerang 
    afin de récolter de l’argent. Cet argent peut être dépensé pour améliorer l'équipement, acheter de la 
    vie ou passer au niveau suivant.</p>

    <img src="assets/images/projects/akagani-gameplay.gif">
    
    <iframe src="https://itch.io/embed/817421?bg_color=FFFCF9&amp;fg_color=352D39&amp;
    link_color=FF2E2E&amp;border_color=feebeb" width="552" height="167" frameborder="0">
    <a href="https://fikacorp.itch.io/akagani">Akagani by Fikacorp, MerlinWasTaken, Niweb, 
    Kayo SILVA, kodypistol, Gabriel ROULEAU</a></iframe>

`));
