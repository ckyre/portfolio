/****************** 1 **********************/
articlesDB.push(new Article(
    "Brio, mon moteur de jeu", `
    <div class="article-properties">
        <div class="flex space-between article-properties-container">
            <div class="article-prop-col">
                <p class="title">Rôles</p>
                <ul>
                    <li>Programmation 3D</li>
                    <li>Programmation moteur</li>
                </ul>
                <p class="title">Taille de l'équipe</p>
                <p>Seul</p>
            </div>
            <div class="article-prop-col">
                <p class="title">Outils</p>
                <ul>
                    <li>VS Community</li>
                    <li>Git</li>
                    <li>Premake</li>
                </ul>
                <p class="title">Date</p>
                <p>Juin 2021</p>
            </div>
        </div>

        <a class="download-btn github" href="https://github.com/Ckyre/Brio">
            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
            <p>Inspecter le repo github</p>            
        </a>
    </div>

    <iframe id="ytb" width="560" height="315" src="https://www.youtube.com/embed/wmpEey7ClYQ" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>Les moteurs de jeux sont des systèmes conséquents. Ce projet est donc toujours en cours de
    développement et j’implémente régulièrement de nouvelles fonctionnalités, en C++. 
    En attendant qu'il devienne le prochain moteur de jeu "mainstream", voici les 
    quelques <strong>fonctionnalités déjà implémentées</strong> :</p>

    <ul>
        <li>Un système d’événements et leurs propagations entre les layers de l'application</li>
        <li>La gestion des inputs et de certains événements grâce a GLFW</li>
        <li>Un système de rendu 3D supportant les éléments suivant :
            <ul class="no-margin">
                <li>Les principaux buffers (vertex, index et frame buffers)</li>
                <li>Lecture et compilation des shaders</li>
                <li>Textures de type 2D et cubes</li>
                <li>Cameras avec projection orthographique ou perspective</li>
                <li>Les matériaux avec gestion des uniforms, des uniforms buffer (pour OpenGL) et 
                de quelques flags tel que l'activation du back-face culling</li>
                <li>Les meshs avec lecture de fichiers grâce à ASSIMP</li>
                <li>Des shaders dit "Lit" supportant les lumières ambiantes, diffuses 
                (réflectance lambertienne) et spéculaires (modèle Phong). Mais aussi les 
                textures spéculaires pour masquer certains reflets.</li>
                <li>Différents types de sources de lumière : point, directional et spot lights</li>
                <li>Les skybox</li>
            </ul>
        </li>
        <li>Une abstraction complète du système de rendu pour l'API OpenGL</li>
        <li>Un début d'interface pour l'éditeur grâce a ImGui</li>
        <li>Un début de ECS grâce a EnTT</li>
    </ul>
`));


/****************** 2 **********************/
articlesDB.push(new Article(
    "Pretty Little Fears", `
    <div class="article-properties">
        <div class="flex space-between article-properties-container">
            <div class="article-prop-col">
                <p class="title">Rôles</p>
                <ul>
                    <li>Programmation gameplay</li>
                    <li>Environment design</li>
                    <li>3D modelling</li>
                </ul>
                <p class="title">Outils</p>
                <ul>
                    <li>Unity</li>
                    <li>Git</li>
                    <li>VS Community</li>
                </ul>
            </div>
            <div class="article-prop-col">
                <p class="title">Date</p>
                <p>Octobre 2021</p>
                <p class="title">Durée</p>
                <p>2 semaines</p>
                <p class="title">Taille de l'équipe</p>
                <p>5</p>
            </div>
        </div>

        <a class="download-btn" href="https://droptop-studio.itch.io/pretty-little">
            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="64px" height="64px"><path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/></svg>
            <p>Jouer sur itch.io</p>       
        </a>
    </div>

    <iframe id="ytb" width="560" height="315" src="https://www.youtube.com/embed/R87Z-PoDEwo" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>Après une phase de réflexion autour des choix de conception du code, 
    j'ai commencé l'intégration par le joueur. Cette classe est au centre de tous 
    les systèmes du jeu (à l'exception de l'interface), il était donc normal que je 
    commence par celle-ci.</p>

    <p>Aussi, <strong>afin de rendre le code extensible</strong> j'ai utilisé un 
    Finite-state Machine pour décrire chaque états du joueur. Cela a facilité 
    l'intégration de tous les systèmes nécessitant de connaitre les états, d'autant 
    que j'ai doté le joueur d'un Singleton pour faciliter l'ajout de référence vers 
    ce MonoBehaviour.</p>

    <img src="assets/images/projects/pretty-little-fears.png">

    <p>En parallèle de la programmation j'ai eu le plaisir d'assister 
    l'artiste 3D sur certaines assets et de m'occuper de l'habillage de 
    certaines zones secondaires tels que la jonction entre la partie 2 et 3.</p>
`));

/****************** 3 **********************/
articlesDB.push(new Article(
    "Akani, Defeat the world", `
    <div class="article-properties">
        <div class="flex space-between article-properties-container">
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

        <a class="download-btn" href="https://fikacorp.itch.io/akagani">
            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="64px" height="64px"><path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/></svg>
            <p>Jouer sur itch.io</p>       
        </a>
    </div>

    <iframe id="ytb" width="560" height="315" src="https://www.youtube.com/embed/ZXLYm_i6tGw" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>

    <p>Nous avions une idée claire de ce à quoi le game feel devait ressembler. Et c'est en gardant cette vision 
    au centre des décisions de conception que nous avons réussi à tenir ce que nous avions prévu.</p>

    <p>Travailler en équipe fut très agréable car j'ai pu me concentrer sur ce qui avait vraiment de l'impact 
    sur l'expérience du joueur. En tant que lead programmer, j'ai pu <strong>prenre le temps peaufiner</strong> les contrôles et 
    les feedbacks du joueur. Un luxe que je m'accorderais volontiers pour les prochaines gam jam.</p>

    <img src="assets/images/projects/akagani-gameplay.gif">
`));

/****************** 4 **********************/
articlesDB.push(new Article(
    "Jeu avec une équipe grecque", `
    <div class="article-properties">
        <div class="flex space-between article-properties-container">
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

    <p>À mon arrivée dans l’équipe j’ai mis en place 
    <strong>l’intelligence artificielle des ennemis</strong>.</p>

    <p>Je me suis d'abord occupé de la classe responsable des combats, 
    en mettant en place un Finite-state Machine afin de décliner le code pour 
    chaque ennemi plus facilement. Le joueur pouvant adopter plusieurs façons de jouer, 
    les ennemis allaient donc avoir de nombreuses réactions.</p>

    <iframe id="ytb" width="560" height="315" src="https://www.youtube.com/embed/o-CC24HkcXo" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>Nos réunions hebdomadaires étaient en anglais à l'oral. J’ai beaucoup progressé depuis 
    cette expérience puisque j'ai régulièrement dû partager mon point de vue et faire 
    des comptes rendus de mon travail aux autres membres.</p>

    <img src="assets/images/projects/mephis.jpg">
`));