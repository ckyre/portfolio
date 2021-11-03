/******************** CTA **************************/

const leftContainer = document.getElementById("left");
const rightContainer = document.getElementById("right");

const projectsSection = document.getElementById("projects");
const projectsSectionTop = projectsSection.offsetTop - (window.innerHeight / 2);
const cta = document.getElementById("cta");

rightContainer.addEventListener ('scroll', function(e) {
    if(rightContainer.scrollTop > projectsSectionTop)
        cta.classList.add("unactive");
    else
        cta.classList.remove("unactive");
});

// Smooth scroll anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/******************** Articles **************************/
class Article {
    constructor(title, content){
        this.Title = title;
        this.Content = content;
    }
}
var articlesDB = [];

var aProjectIsOpen = false;
var currentProject = -1;
var canChange = true;
const landingSection = document.getElementById("landing-section");
const articleSection = document.getElementById("article-section");
const articleTitle = document.getElementById("article-title");
const articleContent = document.getElementById("article-content");

function OpenArticle (id)
{
    if(canChange)
    {
        if(!aProjectIsOpen)
        {
            leftContainer.scrollTop = 0;

            articleTitle.innerHTML = articlesDB[id].Title;
            articleContent.innerHTML = articlesDB[id].Content;

            currentProject = id;
            aProjectIsOpen = true;

            // Fade animation
            landingSection.style.opacity = "0";
            canChange = false;
            setTimeout(function(){
                landingSection.style.display = "none";
                
                articleSection.style.display = "block";
                setTimeout(function() {
                    articleSection.style.opacity = "1";
                    canChange = true;
                }, 100);
            }, 200);
        }
        else if (id != currentProject) 
        {
            currentProject = id;

            // Fade animation
            canChange = false;
            articleSection.style.opacity = "0";
            setTimeout(function(){
                leftContainer.scrollTop = 0;
                articleTitle.innerHTML = articlesDB[id].Title;
                articleContent.innerHTML = articlesDB[id].Content;

                setTimeout(function() {
                    articleSection.style.opacity = "1";
                    canChange = true;
                }, 100);
            }, 200);
        }
    }
}

function CloseArticle()
{
    if(aProjectIsOpen) 
    {
        // Fade animation
        canChange = false;
        articleSection.style.opacity = "0";
        setTimeout(function(){
            articleSection.style.display = "none";
            
            landingSection.style.display = "block";
            setTimeout(function() {
                landingSection.style.opacity = "1";
                canChange = true;
            }, 100);
        }, 200);

        currentProject = 0;
        aProjectIsOpen = false;
    }
}

function getUrlVars()
{
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function OnContentLoaded()
{
    // Open url project
    var urlParameters = getUrlVars();
    var projectID = urlParameters["project"];

    if(projectID != null && projectID < articlesDB.length)
    {
        OpenArticle(urlParameters["project"]);
        projectsSection.scrollIntoView();
    }
}