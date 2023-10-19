/****************** 1 **********************/
articlesDB.push(new Article(
    "My 3D engine", `
    <div class="article-properties">
        <div class="flex space-between article-properties-container">
            <div class="article-prop-col">
                <p class="title">Roles</p>
                <ul>
                    <li>3D programming</li>
                </ul>
                <p class="title">Size of the team</p>
                <p>Alone</p>
            </div>
            <div class="article-prop-col">
                <p class="title">Tools</p>
                <ul>
                    <li>Visual Studio</li>
                    <li>Git</li>
                    <li>Premake</li>
                </ul>
                <p class="title">Date</p>
                <p>June 2021</p>
            </div>
        </div>

        <a class="download-btn github" href="https://github.com/Ckyre/Brio">
            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
            <p>Go to github repository</p>            
        </a>
    </div>

    <iframe id="ytb" width="560" height="315" src="https://www.youtube.com/embed/wmpEey7ClYQ" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>Game engines are very large systems. So this project is still under development, and I'm regularly implementing new features in C++. While we wait for it to become the next mainstream game engine, here are some of the features already implemented:</p>

    <ul>
        <li>A system of events and their propagation between application layers</li>
        <li>Input and event management with GLFW</li>
        <li>A 3D rendering system supporting the following elements:
            <ul class="no-margin">
                <li>The main buffers (vertex, index and frame buffers)</li>
                <li>Reading and compiling shaders</li>
                <li>2D textures and cubic textures</li>
                <li>Cameras with orthographic or perspective projection</li>
                <li>Materials with management of uniforms, buffer uniforms (for OpenGL) and some flags such as back-face culling activation</li>
                <li>Meshes with file reading thanks to ASSIMP</li>
                <li>Lit shaders for ambient, diffuse and specular light (Lambertian reflectance) and specular (Phong model). But also specular textures to mask certain reflections.</li>
                <li>Different types of light sources: point, directional and spot lights</li>
                <li>Skyboxes</li>
            </ul>
        </li>
        <li>A complete rendering system abstraction for the OpenGL API</li>
        <li>The beginnings of an editor interface thanks to ImGui</li>
        <li>The start of ECS thanks to EnTT</li>
    </ul>
`));


/****************** 2 **********************/
articlesDB.push(new Article(
    "Pretty Little Fears", `
    <div class="article-properties">
        <div class="flex space-between article-properties-container">
            <div class="article-prop-col">
                <p class="title">Roles</p>
                <ul>
                    <li>Gameplay programming</li>
                    <li>Environment design</li>
                    <li>3D modelling</li>
                </ul>
                <p class="title">Tools</p>
                <ul>
                    <li>Unity</li>
                    <li>Git</li>
                    <li>VS Community</li>
                </ul>
            </div>
            <div class="article-prop-col">
                <p class="title">Date</p>
                <p>October 2021</p>
                <p class="title">Duration</p>
                <p>2 weeks</p>
                <p class="title">Size of the team</p>
                <p>5</p>
            </div>
        </div>

        <a class="download-btn" href="https://droptop-studio.itch.io/pretty-little">
            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="64px" height="64px"><path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/></svg>
            <p>Play on itch.io</p>       
        </a>
    </div>

    <iframe id="ytb" width="560" height="315" src="https://www.youtube.com/embed/R87Z-PoDEwo" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>After a phase of reflection around the design choices of the code, I began integration with the player. This class is at the heart of all the game's systems in the game (with the exception of the interface), so it was only natural that I should start with it.</p>

    <div class="pdf">
        <a href="../assets/documents/GDD-Pretty-Little-Fears-Gabriel-ROULEAU.pdf" target="_blank" class="flex center space-between">
            <div class="pdf-desc flex center">
                <img src="../assets/images/previews/gdd-pretty-little-fears.png">
                <div>
                    <strong>Read the Game Design Document</strong>
                    <p>1.71 Mo</p>
                </div>
            </div>
            <svg viewBox="0 0 314 314" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="15.5" y1="168.5" x2="15.5" y2="296.5" stroke="#352D39" stroke-width="31" stroke-linecap="round"/><line x1="156.5" y1="15.5" x2="156.5" y2="215.5" stroke="#352D39" stroke-width="31" stroke-linecap="round"/><line x1="90.2533" y1="151.333" x2="154.333" y2="215.413" stroke="#352D39" stroke-width="31" stroke-linecap="round"/><line x1="159.333" y1="215.413" x2="223.413" y2="151.333" stroke="#352D39" stroke-width="31" stroke-linecap="round"/><line x1="298.5" y1="168.5" x2="298.5" y2="296.5" stroke="#352D39" stroke-width="31" stroke-linecap="round"/><line x1="15.5" y1="298.5" x2="298.5" y2="298.5" stroke="#352D39" stroke-width="31" stroke-linecap="round"/></svg>
        </a>
    </div>

    <p>Also, to make the code extensible I used a Finite-state Machine to describe each player state. This facilitated the integration of all systems requiring state knowledge, especially since I I gave the player a Singleton to make it easy to add references to this MonoBehaviour. this MonoBehaviour.</p>

    <img src="../assets/images/projects/pretty-little-fears.png">

    <p>In parallel with the programming, I had the pleasure of assisting the 3D artist on certain assets and of taking care of the dressing of certain secondary areas secondary areas, such as the junction between part 2 and part 3.</p>
`));

/****************** 3 **********************/
articlesDB.push(new Article(
    "Akani, Defeat the world", `
    <div class="article-properties">
        <div class="flex space-between article-properties-container">
            <div class="article-prop-col">
                <p class="title">Size of the team</p>
                <p>5</p>
                <p class="title">Duration</p>
                <p>1 weeks</p>
                <p class="title">Date</p>
                <p>November 2020</p>
            </div>
            <div class="article-prop-col">
                <p class="title">Roles</p>
                <ul>
                    <li>Gameplay programming</li>
                    <li>Game feel design</li>
                </ul>
                <p class="title">Tools</p>
                <ul>
                    <li>Unity</li>
                    <li>Unity Collab</li>
                    <li>VS Community</li>
                </ul>
            </div>
        </div>

        <a class="download-btn" href="https://fikacorp.itch.io/akagani">
            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="64px" height="64px"><path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/></svg>
            <p>Play on itch.io</p>       
        </a>
    </div>

    <iframe id="ytb" width="560" height="315" src="https://www.youtube.com/embed/ZXLYm_i6tGw" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>

    <p>We had a clear idea of what the game feel should look like. And it was by keeping this vision at the heart of design decisions that we were able to deliver what we set out to do.</p>

    <p>Working as part of a team was very enjoyable, as I was able to concentrate on what really had an impact on the player's experience. As lead programmer, I was able to take the time to fine-tune the contRoles and player feedback. Un luxe que je m'accorderais volontiers pour les prochaines gam jam.</p>

    <img src="../assets/images/projects/akagani-gameplay.gif">
`));

/****************** 4 **********************/
articlesDB.push(new Article(
    "Game development with greek team", `
    <div class="article-properties">
        <div class="flex space-between article-properties-container">
            <div class="article-prop-col">
                <p class="title">Size of the team</p>
                <p>5</p>
                <p class="title">Duration</p>
                <p>6 month</p>
                <p class="title">Date</p>
                <p>September 2019</p>
            </div>
            <div class="article-prop-col">
                <p class="title">Roles</p>
                <ul>
                    <li>IA programming</li>
                    <li>Gameplay programming</li>
                </ul>
                <p class="title">Tools</p>
                <ul>
                    <li>Unity</li>
                    <li>Unity Collab</li>
                    <li>VS Community</li>
                </ul>
            </div>
        </div>
    </div>

    <p>When I joined the team, I set up the artificial intelligence of the enemies.</p>

    <p>First, I took care of the class responsible for combat, I set up a Finite-state Machine to make it easier for the code to be applied to each enemy. As the player could adopt several different ways of playing, the enemies would have many different reactions.</p>

    <iframe id="ytb" width="560" height="315" src="https://www.youtube.com/embed/o-CC24HkcXo" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>Our weekly meetings were held in spoken English. I've made a lot of progress since this experience, as I regularly had to share my point of view and report on my work to the other members.</p>

    <img src="../assets/images/projects/mephis.jpg">
`));