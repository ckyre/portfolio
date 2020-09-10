/*GABRIEL ROULEAU 2020*/

//Listes de toutes les positions du parent de la gallerie (differentes étapes du scroll)
var scrollEtapes = [document.documentElement.clientWidth * 0.2427083333];
var parentGalerie;

//Cercles de navigation (en bas)
var cerclesParent;
var cercles;
var ligneBleu;

//Fleches de navigation (apprait sur le projets adjacents)
var useArrow = false;
var leftArrow;
var rightArrow;

//Variables relatives a la navigation et l'animation
var currentIndex = 0;
var inAnimation = false;

//Curseur
var cursor;
var canClick = true;

//Description projets
var descriptionParent;




//Start et initialisation



//Fonction lue quand l'élement body est chargé
function Start ()
{
    parentGalerie = document.getElementsByClassName("projects-gallery")[0];
    parentGalerie.style.left = scrollEtapes[0] + 'px';

    descriptionParent = document.getElementsByClassName("project-description")[0];
    cerclesParent = document.getElementById("parent-cercles");

    //Si on utilise les fleches de navigation...
    leftArrow = document.getElementsByClassName("left-arrow")[0];
    rightArrow = document.getElementsByClassName("right-arrow")[0];
    if(useArrow)
    {
        //Recupere les deux fleches et met celle de gauche sur caché
        leftArrow.style.visibility = "hidden";
        rightArrow.style.visibility = "visible";
    }else 
    {
        //Si non on cache les fleches
        leftArrow.style.visibility = "hidden";
        rightArrow.style.visibility = "hidden";
    }


    //Instance d'Hammer qui permet de detecter le slide, avec un seuil de 150 px
    var mc = new Hammer(document.body);
    mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL , threshold: 100 }) );
    //Event Hammer pour detecter le slides de la souris
    mc.on("panleft panright", function(ev) {
        if(ev.type == "panleft")
        {
            GoToPoint(currentIndex + 1);
        }else if (ev.type == "panright")
        {
            GoToPoint(currentIndex - 1);
        }
    });


    document.addEventListener('keyup', event => {
        //Event pour la navigation avec la barre espace
        if (event.keyCode === 32) 
        {
            GoToPoint(currentIndex + 1);
        }

        //Quitter la description d'un projet
        else if(event.keyCode === 27 && projectOpen)
        {
            QuitProjectPanel();
        }
    });


    //Ajout de l'event mousemove pour que le curseur suive la souris
    cursor = document.querySelector('.cursor-parent');
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.clientY - 10)+"px; left: "+(e.clientX - 10)+"px;");
    });
    //Event onclick pour animer le curseur
    document.addEventListener('click', () => {
        if(canClick) 
        {
            canClick = false;
            cursor.children[0].classList.add("expand");
    
            setTimeout(() => {
                cursor.children[0].classList.remove("expand");
                canClick = true;
            }, 550);
        }
    });

    //Chargre les elements depuis la BDD
    InitializeProjectsSpace();

    //Land animation
    setTimeout(function(){
        for (let index = 0; index < 2; index++) {
            setTimeout(function(){
                const element = parentGalerie.children[0].children[index];
                element.style.opacity = 1;
            }, 250 * index);           
        }
    }, 200);

    //Crédit aux auteurs des scripts js utilisés
    console.log("Scripts utilisés : Hammer.js (http://hammerjs.github.io/) par Eight Media, SmoothMovement (http://code.iamkate.com/javascript/smooth-movement/) par Kate Rose Morley.")
}



//Fonction qui ajuste le contenu html en fonction de nombre de projets dans la BDD
function InitializeProjectsSpace () 
{
    var circlesInner = '<div class="line"></div><div class="line-blue"></div>';
    var projectsInner = '';

    for (let index = 0; index < projets.length; index++)
    {
        //Update nombres cercles
        circlesInner += '<li><a onclick="GoToPoint(' + index + ')"><svg height="40" width="40"><circle class="svg-circle" cx="20" cy="20" r="0.5vw" fill="#9e9e9e"/></svg></a></li>';

        //Update scroll etapes
        if (index < projets.length - 1)
        {
            scrollEtapes.push((scrollEtapes[scrollEtapes.length - 1] - document.documentElement.clientWidth * 0.6651041667)); //1277
        }

        //Update iste des projets
        if(index < 2)
        {
            projectsInner += '<li style="opacity: 0;"><a onclick="OpenProject(' + index + ', false)"><img src="' + GetBDDArray(projets[index][6])[0] + '" alt="" class="unselectable" ondragstart="return false"/><h1>' + projets[index][1] + '</h1></a></li>';
        }else
        {
            projectsInner += '<li><a onclick="OpenProject(' + index +', false)"><img src="' + GetBDDArray(projets[index][6])[0] + '" alt="" class="unselectable" ondragstart="return false"/><h1>' + projets[index][1] + '</h1></a></li>';

        }
    }
    cerclesParent.innerHTML = circlesInner;
    parentGalerie.children[0].innerHTML = projectsInner;

    //Recupere tout les cercles de navigation et place le premier comme actif
    cercles = Array.prototype.slice.call(document.getElementsByClassName("svg-circle"));
    cercles[0].classList.add("active");

    //Recupere tout les autres elements HTML necessaires
    ligneBleu = document.getElementsByClassName("line-blue")[0];

    nomProjetText = document.getElementById("nom-projet");
    nomsClientsText = document.getElementById("noms-clients");
    rolesText = document.getElementById("roles");
    dateText = document.getElementById("date");
    descriptionText = document.getElementsByClassName("description")[0];
    projetsGalerie = document.getElementsByClassName("gallery")[0];
    projectInformations = document.getElementsByClassName("grid")[0];
    aboutInformations = document.getElementsByClassName("about-informations")[0];
    aboutTitle = document.getElementsByClassName("about-title")[0];
    aboutDescription = document.getElementsByClassName("about-description")[0];
    nextProjectNameText = document.getElementsByClassName("next-project-name")[0];
    socialsNetworksLinks = document.getElementsByClassName("about-social-networks")[0];
}




//Navigation




function GoToPoint (index) 
{
    //Si index est supérieur a 0...
    if(index >= 0 && !projectOpen)
    {
        //Si l'utilisateur ne va pas au meme endroit et que aucune animation ne se joue
        if(index != currentIndex && !inAnimation) 
        {
            //Si il ne sors pas de l'array 'scrollEtapes'
            if(index <= scrollEtapes.length - 1)
            {
                //Une animation se joue...
                inAnimation = true;
            
                //Si les fleches de navigations sont utilisées
                if(useArrow)
                {
                    //Désactiver les fléches le temps de l'animation
                    leftArrow.style.visibility = "hidden";
                    rightArrow.style.visibility = "hidden";
                }
        
                //Met a jour l'index actuel et instancie la class SmoothMovement
                currentIndex = index;
                var movement = new SmoothMovement(parentGalerie.offsetLeft, scrollEtapes[currentIndex]);
                
                //Joue l'animation de scroll grace a la bibliothèque 
                //Smooth Movement (http://code.iamkate.com/javascript/smooth-movement/) crée par Kate Rose Morley
                movement.animate(
                    1,
                    function(left){
                        //Fonction lue chaque frames durant l'animation
                        //On met a jour la position de parent de la galerie de projets
                        parentGalerie.style.left = left + 'px';
                    },
                    function(){
                        //Fonction lue a la fin de l'animation

                        //On met a jour la couleur des cercles en bas de la page
                        document.getElementsByClassName("active")[0].classList.remove("active");
                        cercles[currentIndex].classList.add("active");

                        ligneBleu.style.width = ((40 / (cercles.length - 1)) * currentIndex) + 'vw';

                        //Si les fleches de navigations sont utilisées
                        if(useArrow) 
                        {
                            //On met a jour la visibilité des fleches
                            if(currentIndex == 0) {
                                leftArrow.style.visibility = "hidden";
                                rightArrow.style.visibility = "visible";
                            }else if (currentIndex < scrollEtapes.length - 1) {
                                leftArrow.style.visibility = "visible";
                                rightArrow.style.visibility = "visible";
                            }else {
                                leftArrow.style.visibility = "visible";
                                rightArrow.style.visibility = "hidden";
                            }
                        }

                        //L'animation se termine...
                        inAnimation = false;
                    }
                );
            }
            //Si l'index transmit sors de l'array c'est que l'utilisateur a utilisé la barre espace
            //donc on le renvoit au premier projet
            else{ GoToPoint(0); }
        }
    }
}




//Manipulation panel description projets




//Fonction permettant d'ouvrir un projet pour lire sa description, voir les images proposés ect...
//elle permet, si l'utilisateur clic sur un projet sur le cote de naviguer vers ce dernier.
var currentOpenProject = 0;
var projectOpen = false;

var projectInformations;
var aboutInformations;
var aboutDescription;
var aboutTitle;

var nomProjetText;
var nomsClientsText;
var rolesText;
var dateText;
var descriptionText;
var projetsGalerie;
var nextProjectNameText;
var socialsNetworksLinks;
function OpenProject (index, froceMode) 
{
    //Si l'utilisateur clic sur le projet actuellement au centre... ou si la function est appelé en forceMode
    if((froceMode == false && index == currentIndex) || (froceMode == true)) 
    {
        projectOpen = true;
        currentOpenProject = index;

        //Recupere les valeurs du projets correspondant dans la BDD
        var valeurs = Object.values(projets[index]);

        //Set valeurs
        nomProjetText.innerHTML = valeurs[1];
        nomsClientsText.innerHTML = FormateBDDArray(valeurs[2]);
        rolesText.innerHTML = FormateBDDArray(valeurs[3]);
        dateText.innerHTML = valeurs[4];
        descriptionText.innerHTML = valeurs[5];

        //Update nom du projet suivant
        if(index === projets.length - 1){
            nextProjectNameText.innerHTML = Object.values(projets[0])[1];
        }else {
            nextProjectNameText.innerHTML = Object.values(projets[index + 1])[1];
        }
        
        //Si le projet a pour index 0, c'est forcement la partie 'A propos', on ajuste donc les titres
        if(index === 0) { projectInformations.style.display = "none"; aboutInformations.style.display = "block"; aboutDescription.innerHTML = valeurs[5];}
        else { projectInformations.style.display = "grid"; aboutInformations.style.display = "none"; }

        //Update galerie
        var imagesInner = "";
        GetBDDArray(valeurs[6]).forEach(lien => {
            imagesInner += '<li><img src="' + lien +'" alt=""></li>';
        });
        projetsGalerie.innerHTML = imagesInner;

        //Valeurs pour animations
        descriptionParent.style.display = "block";
        descriptionParent.style.pointerEvents = "auto";
        window.getComputedStyle(descriptionParent).getPropertyValue("opacity");
        document.body.style.overflowY = "visible";
        descriptionParent.style.opacity = "1";
        ResetProjectDescriptionStyle();

        //Open animation
        setTimeout(function(){ 
            if(index === 0){
                aboutTitle.style.opacity = "1";
                setTimeout(function(){ 
                    aboutDescription.style.opacity = "1";
                    setTimeout(function(){ 
                        socialsNetworksLinks.style.opacity = "1";   
                    }, 200);
                }, 300);
            }else {
                nomProjetText.style.opacity = "1";
                descriptionText.style.opacity = "1";
            }

            setTimeout(function(){
                for (let index = 0; index < nomProjetText.parentNode.children[1].children.length; index++) {
                    setTimeout(function(){ 
                        nomProjetText.parentNode.children[1].children[index].style.opacity = "1";
                    }, 150 * index);  
                }
                setTimeout(function(){ 
                    projetsGalerie.children[0].children[0].style.opacity = "1";
                }, 500);
            }, 500);  
        }, 600);
    }
    //Si non on navigue vers le projet
    else { GoToPoint(index); }
}



//Pour le bouton en bas de la description
function OpenNextProject () 
{
    //Si on atteint par la fin passer au suivant
    if((currentOpenProject + 1 < projets.length)){
        ResetProjectDescriptionStyle();
        setTimeout(function(){ 
            ScrollToTop();
            OpenProject(currentOpenProject + 1, true);
        }, 400);
    }
    //Sinon, revenir au premier
    else 
    { 
        ResetProjectDescriptionStyle();
        setTimeout(function(){ 
            ScrollToTop();
            OpenProject(0, true);
        }, 400);
    }
}


function QuitProjectPanel () 
{
    if(projectOpen) 
    {
        projectOpen = false;

        if(nomProjetText != null){
            nomProjetText.style.opacity = "0";
            descriptionText.style.opacity = "0";
            projetsGalerie.children[0].children[0].style.opacity = "0";
        }
        for (let index = 0; index < nomProjetText.parentNode.children[1].children.length; index++) {
            nomProjetText.parentNode.children[1].children[index].style.opacity = "0";                 
        }
    
        ScrollToTop();
        descriptionParent.style.opacity = "0";
        descriptionParent.style.pointerEvents = "none";
        document.body.style.overflowY = "visible";
        setTimeout(function(){ descriptionParent.style.display = "none";}, 500);
    }
}




//Fonction de style




function ResetProjectDescriptionStyle () 
{
    nomProjetText.style.opacity = "0";
    descriptionText.style.opacity = "0";
    projetsGalerie.children[0].children[0].style.opacity = "0";
    aboutTitle.style.opacity = "0";
    aboutDescription.style.opacity = "0";
    socialsNetworksLinks.style.opacity = "0";
    for (let index = 0; index < nomProjetText.parentNode.children[1].children.length; index++) {
        nomProjetText.parentNode.children[1].children[index].style.opacity = "0";                 
    }  
}

function ScrollToTop ()
{
    setTimeout(function () {
        window.scrollTo(0, 0);
    },2);
}




//Fonctions manipulations valeurs BDD




function FormateBDDArray (entree)
{
    return entree.replace(';', '<br/>');
}
function GetBDDArray (entree) 
{
    return entree.split(';');
}