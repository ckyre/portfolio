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

    <img src="assets/images/projects/speed-moto-services-3.gif">

    <h3>Webdesign</h3>
    <p>Nous avons donc commencé par lister les problèmes de conception de l'<a href="https://www.speedmotoservices.com/">ancienne version</a> 
    et réorganiser la hiérarchie du site pour rendre l’expérience utilisateur meilleure. 
    Nous avons opté pour un découpage simple en 3 pages : la boutique, la page contact et enfin, 
    page principale qui permet de se rendre rapidement sur les deux autres pages. 
    Je me suis occupé du design et de l’intégration de la boutique et de la page contact ainsi 
    qu'une partie de l’intégration de la page principale.</p>

    <img src="assets/images/projects/speed-moto-services-2.png">

    <p>Nous avons ensuite travaillé sur le design des pages avec Adobe XD. 
    L'objectif étant de garder un ensemble cohérent. Il a donc fallu communiquer pour se mettre 
    d’accord sur la couleur d’interaction ou les typographies par exemple.</p>

    <h3>Integration</h3>
    <p>Après la semaine consacrée au design, nous avons effectué l’intégration avec les 
    langages HTML, CSS et JS ainsi que la librairie P5 pour les éléments 3D.</p>

    <img src="assets/images/projects/speed-moto-services-1.png">

`);
articlesDB.push(a1);