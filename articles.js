class Article {
    constructor(title, content){
        this.Title = title;
        this.Content = content;
    }
}
var articlesDB = [];

/****************** 1 **********************/

a1 = new Article("Refonte de site", `
    <div class="article-properties">
        <div class="flex space-between">
            <div class="article-prop-col">
                <p class="title">Rôles</p>
                <ul>
                    <li>Webdesign</li>
                    <li>Front-end developpement</li>
                </ul>
                <p class="title">Taille de l'équipe</p>
                <p>5</p>
                <p class="title">Outils</p>
                <ul>
                    <li>Adobe XD</li>
                    <li>VS Code</li>
                    <li>Netlify</li>
                </ul>
            </div>
            <div class="article-prop-col">
                <p class="title">Durée</p>
                <p>2 semaines</p>
                <p class="title">Date</p>
                <p>Octobre 2020</p>
            </div>
        </div>
    </div>

    <p>Dans le cadre d’un atelier du DUT MMI à Bordeaux, 
    nous avons effectué la refonte du site internet du garage bordelais Speed Moto Services. 
    Vous trouverez <a href="https://speed-motos-service.netlify.app/">notre version du site ici</a>.</p>

    <h3>Webdesign</h3>
    <p>Nous avons donc commencé par lister les problèmes de conception de l'<a href="https://www.speedmotoservices.com/">ancienne version</a> 
    et réorganiser la hiérarchie du site pour rendre l’expérience utilisateur meilleure. 
    Nous avons opté pour un découpage simple en 3 pages : la boutique, la page contact et enfin, 
    page principale qui permet de se rendre rapidement sur les deux autres pages. 
    Je me suis occupé du design et de l’intégration de la boutique et de la page contact ainsi 
    qu'une partie de l’intégration de la page principale.</p>
`);
articlesDB.push(a1);