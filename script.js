/****************** CTA **********************/

const projectsSection = document.getElementById("projects");
const projectsSectionTop = projectsSection.offsetTop - (window.innerHeight / 2);
const cta = document.getElementById("cta");

window.addEventListener ('scroll', function(e) {
    if(window.scrollY > projectsSectionTop)
    {
        cta.classList.add("unactive");
    }
    else
    {
        cta.classList.remove("unactive");
    }
});

/****************** ARTICLES **********************/

const landingSection = document.getElementById("landing-section");
const articleSection = document.getElementById("article-section");
const articleTitle = document.getElementById("article-title");
const articleContent = document.getElementById("article-content");

function OpenArticle (id)
{
    landingSection.classList.add("unactive");
    articleSection.classList.remove("unactive");

    articleTitle.innerHTML = articlesDB[id].Title;
    articleContent.innerHTML = articlesDB[id].Content;
}

function CloseArticle()
{
    landingSection.classList.remove("unactive");
    articleSection.classList.add("unactive");
}