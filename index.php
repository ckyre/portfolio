<!--GABRIEL ROULEAU 2020-->

<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Gabriel Rouleau</title>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="fonts-face.css">
        <link rel="stylesheet" href="style.css">
        <script src="hammer.min.js"></script>
        <script src="smooth-movement.js"></script>
        <script src="main.js"></script>
    </head>
    <body onload="Start()">

        <?php 
            //Obtention des projets dans la base de données
            $serveur = "localhost";
            $login = "root";
            $pass = "";
            $dbName = "portfolio";

            try {
                $connexion = new PDO("mysql:host=$serveur;dbname=$dbName", $login, $pass);
                $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                                        
                $requete = $connexion->prepare("SELECT * FROM projets");
                $requete->execute();
                $resultat = $requete->fetchall();
            }
            catch(PDOException $e){
                echo 'Echec : ' .$e->getMessage();
            }

            //Afficher le header
            include 'includes/header.php';          
        ?>
        <!--Stocker le contenu de la bdd dans une variable js-->   
        <script> var projets = <?php echo json_encode($resultat); ?>; </script>

        <!--Curseur personnalisé-->
        <div class="cursor-parent"><div class="cursor"></div></div>

        <!--Tout les projets-->
        <div class="projects-gallery">
            <ul>
                <!--<li style="opacity: 0;"><a onclick="OpenProject(0)"><img src="images/svg/arrow.svg" alt="" class="unselectable" ondragstart="return false"/><h1>TEST</h1></a></li>-->
            </ul>
        </div>

        <!--Fleches pour indiquer comment naviguer entre les projets (desactivées ici)-->
        <div class="navigation-arrows">
            <img class="left-arrow unselectable" src="images/svg/arrow.svg" alt=""/>
            <img class="right-arrow unselectable" src="images/svg/arrow.svg" alt=""/>
        </div>
        <div class="mouse-listener"></div>


        <!--Panel ou est présenté chaque projets en details-->
        <div class="project-description">
            <div class="grid">
                <div class="informations">
                    <!--Nom, clients, date, roles du projet-->
                    <h1 id="nom-projet">Nom du projet</h1>
                    <ul>
                        <li id="clients-parent"><h2>CLIENT</h2><p id="noms-clients">Client 1</p></li>
                        <li><h2 id="roles-title">MES RÔLES</h2><p id="roles">Rôle 1<br>Rôle 2<br/>Rôle 3</p></li>
                        <li id="date-parent"><h2>DATE</h2><p id="date">Mois, année</p></li>
                    </ul>
                </div>
                <!--Description du projet-->
                <p class="description">
                </p>
            </div>
            <!--Panel exclusif a la partie 'A propos'-->
            <div class="about-informations">
                <h1 class="about-title">A propos de moi</h1>
                <p class="about-description">
                </p>
                <ul class="about-social-networks">
                    <li><a href="https://dribbble.com/Ckyre"><img class="unselectable" src="images/svg/dribbble.svg" alt=""/></a></li>
                    <li><a href="https://twitter.com/Ckyre1"><img class="unselectable" src="images/svg/twitter.svg" alt=""/></a></li>
                </ul>
            </div>
            <!--Galerie d'images-->
            <ul class="gallery">
            </ul>
            <!--Boutton pour passer au projet suivant-->
            <div class="next-project"><a onclick="OpenNextProject()"><p>Projet suivant <span class="next-project-arrow">→</span><br/><span class="next-project-name">Nom</span></p></a></div>
        </div>

        <!--Barre de navigation en pied de page-->
        <?php include 'includes/footer.php'; ?>

    </body>
</html>