// Variables
const aboutHtml = "<h1>A propos</h1><p>Bienvenue ! Je m’appelle Gabriel, j'ai 18 ans et après avoir obtenu un bac S, je suis actuellement en première année du DUT MMI à Bordeaux.</p><p>Ma passion, pour le développement de jeux vidéo m’a permis d’acquérir de nombreuses compétences, de la programmation orientée objet au graphisme en passant par le game design et le développement web. Je vous propose de découvrir les compétences que j’ai à vous offrir à travers mes projets !</p><p>Je ne connais pas encore la place que j’aimerais occuper dans la longue chaîne de développement d’un jeu vidéo. <strong>Un stage dans un studio de développement de jeux vidéo</strong> me permettrait de me confronter à la réalité de l’industrie et je pourrais vous apporter ma motivation. Si vous êtes intéressé, <a onclick='ShowContent($(\".nav-link:not(:first-child)\").get(0));'>contactez-moi ici</a>.</p>";
const contactHtml = "<h1>Contact</h1><p>Si mon profil vous intéresse, n'hésitez pas à me contacter par <a href=\"mailto:gabriel.rouleau@mmibordeaux.com\" class=\"black\">mail</a> ou via <a href=\"https://www.linkedin.com/in/gabriel-rouleau-a9b7671b7/\" class=\"black\">LinkedIn</a>. Vous pouvez aussi voir les jeux que j'ai conçu sur <a href=\"https://ckyre.itch.io/\" class=\"black\">ma page itch.io</a>.</p><p>Bordeaux, France<br><a href=\"mailto:gabriel.rouleau@mmibordeaux.com\">gabriel.rouleau@mmibordeaux.com</a></p><div class=\"inline\"><a href=\"https://ckyre.itch.io\"><img src=\"assets/images/itchio.svg\" alt=\"\"></a><a href=\"https://www.linkedin.com/in/gabriel-rouleau-a9b7671b7/\"><img src=\"assets/images/linkedin.svg\" alt=\"\"></a></div>";
var canShowContent = true;

// On page was loaded
window.addEventListener("load", function () {
   setTimeout(function () {
        $(".bg-image").css("opacity", "0.03");
        $("header").css("opacity", "1");
        $(".face-img").css("opacity", "1");

        // Show first project to open or about page
        if(startProject >= 0 && startProject < $(".projects").get(0).children.length){
            ShowContent($(".projects").get(0).children[startProject]);
        }else {
            ShowContent($(".nav-link:first-child").get(0), false);
        }
        $(".content").css("opacity", "1");

        setTimeout(function () {
            for (let index = 0; index < $(".projects").get(0).children.length; index++)
            {
                setTimeout(function () {
                    $(".projects").get(0).children[index].style.opacity = "1";
                }, 150 * index);       
            }
        }, 500);
    }, 700);
});

// Update left panel
function ShowContent (from, applyAnimations = true) 
{
    if(canShowContent)
    {
        ClearActive();
        from.classList.add("active");
        id = GetProjectId(from);
        if(applyAnimations) 
        {
            canShowContent = false;
            $(".content").css("opacity", "0");
            setTimeout(function () {
                $(".left").scrollTop(0);
                if(id >= 0)
                {
                    $(".content").html(descriptions[id]);
                }else 
                {
                    if(id == -1)
                    {
                        $(".content").html(aboutHtml);
                    }else if (id == -2) 
                    {
                        $(".content").html(contactHtml);
                    }
                }
                $(".content").css("opacity", "1");
                canShowContent = true;
            } , 500);
        }else 
        {
            $(".left").scrollTop(0);
            if(id >= 0)
            {
                $(".content").html(descriptions[id]);
            }else 
            {
                if(id == -1)
                {
                    $(".content").html(aboutHtml);
                }else if (id == -2) 
                {
                    $(".content").html(contactHtml);
                }
            }
        }
    }
}

// On click events
Array.prototype.forEach.call($(".nav-link"), function(link) {
    link.addEventListener("click", function(e)
    {
        if(e.target.classList.contains("active") == false) 
        {
            ShowContent(e.target);
        }
    }, false);
});

Array.prototype.forEach.call($(".project"), function(project) {
    project.addEventListener("click", function(e)
    {
        if(e.target.classList.contains("active") == false) 
        {
            ShowContent(e.target);
        }
    }, false);
});

// Useful functions
function GetProjectId(element)
{
    return parseInt(element.dataset["id"]);
}

function ClearActive () 
{
    Array.prototype.forEach.call($(".project"), function(project) {
        project.classList.remove("active");
    });

    Array.prototype.forEach.call($(".nav-link"), function(link) {
        link.classList.remove("active");
    });
}
