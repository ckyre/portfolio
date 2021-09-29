/****************** CTA **********************/

const leftContainer = document.getElementById("left");
const rightContainer = document.getElementById("right");

const projectsSection = document.getElementById("projects");
const projectsSectionTop = projectsSection.offsetTop - (window.innerHeight / 2);
const cta = document.getElementById("cta");

rightContainer.addEventListener ('scroll', function(e) {
    if(rightContainer.scrollTop > projectsSectionTop)
    {
        cta.classList.add("unactive");
    }
    else
    {
        cta.classList.remove("unactive");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/****************** ARTICLES **********************/

const landingSection = document.getElementById("landing-section");
const articleSection = document.getElementById("article-section");
const articleTitle = document.getElementById("article-title");
const articleContent = document.getElementById("article-content");
var openProject = -1;

function OpenArticle (id)
{
    if(id != openProject)
    {
        articleTitle.innerHTML = articlesDB[id].Title;
        articleContent.innerHTML = articlesDB[id].Content;

        // Fade animation
        landingSection.style.opacity = "0";
        setTimeout(function(){
            landingSection.style.display = "none";
            
            articleSection.style.display = "block";
            setTimeout(function() {
                articleSection.style.opacity = "1";
            }, 100);
        }, 200);

        leftContainer.scrollTop = 0;
        openProject = id;
    }
}

function CloseArticle()
{
    if(openProject >= 0) 
    {
        // Fade animation
        articleSection.style.opacity = "0";
        setTimeout(function(){
            articleSection.style.display = "none";
            
            landingSection.style.display = "block";
            setTimeout(function() {
                landingSection.style.opacity = "1";
            }, 100);
        }, 200);

        openProject = -1;
    }
}