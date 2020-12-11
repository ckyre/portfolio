<?php
    $serveur = "localhost";
    $login = "u156942223_user";
    $pass = "mrTsA8GKTQnGXKYS2x7tm4K6cq6reZXd7kV";
    $dbName = "u156942223_portfolio";
    
    try {
        // Get projects from database
        $connexion = new PDO("mysql:host=$serveur;dbname=$dbName", $login, $pass);
        $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                                            
        $requete = $connexion->prepare("SELECT * FROM projects ORDER BY id");
        $requete->execute();

        $resultat = $requete->fetchall();

        // Store descriptions of each projects in array
        $descriptions = [];
        foreach ($resultat as $projet) {
            array_push($descriptions, $projet[3]);
        }
    }
    catch(PDOException $e) {
        echo "Error : " .$e->getMessage();
    }

?>

<!doctype html>
<html lang="fr">
    <head>
        <!-- Page informations -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gabriel Rouleau</title>
        <meta name="description" content="Bienvenue ! Je m’appelle Gabriel, j'ai 18 ans et après avoir obtenu un bac S, je suis actuellement en première année de DUT MMI à Bordeaux." />
        <link rel="icon" href="assets/images/favicon.ico" />
        <meta property="og:title" content="Portfolio de Gabriel Rouleau" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://gabrielrouleau.fr/" />
        <meta property="og:image" content="http://gabrielrouleau.fr/assets/images/favicon.ico" />
        <meta property="og:description" content="Bienvenue ! Je m’appelle Gabriel, j'ai 18 ans et après avoir obtenu un bac S, je suis actuellement en première année du DUT MMI à Bordeaux." />
        <meta name="theme-color" content="#EB364B">
        <meta name="twitter:card" content="summary_large_image">

        <!-- Include CSS -->
        <link rel="stylesheet" href="style.css">

        <!-- Include scripts -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" defer></script>
        <script src="script.js" defer></script>
    </head>
    <body>
        <!-- Get projects descriptions from database and store it in js array -->
        <script>
            var descriptions = <?php echo json_encode($descriptions); ?>;

            // Get first project to open (in url)
            var startProject = <?php if(isset($_GET["project"])) { echo $_GET["project"]; } else { echo -1; } ?>;
        </script>

        <!-- Left section/panel -->
        <section class="left">
            <img src="assets/images/left-bg.svg" alt="Texte de fond du panneau gauche" class="bg-image unselectable">
            <header>
                <h2>Gabriel</h2>
                <ul>
                    <li class="unselectable nav-link active" data-id="-1">A propos</li>
                    <li class="unselectable nav-link" data-id="-2">Contact</li>
                    <li class="unselectable cv-button"><a href="assets/documents/CV_Gabriel_Rouleau.pdf" download><span>CV</span><img src="assets/images/download.svg" alt=""></a></li>
                </ul>
            </header>
            <div class="content">
                <!-- Projects descriptions here -->
            </div>
        </section>

        <!-- Face at center -->
        <img src="assets/images/profil.png" alt="Photo de profil" class="face-img">

        <!-- Right section/panel -->
        <section class="right">
            <img src="assets/images/right-bg.svg" alt="Texte de fond du panneau droit" class="bg-image unselectable">
            <ul class="projects">
                <?php
                    for ($i=0; $i < count($resultat); $i++) 
                    { 
                        echo "<li class=\"project unselectable\" data-id=\"".$i."\" style=\"background-image: url('".$resultat[$i][2]."');\"><div><h1>".$resultat[$i][1]."</h1></div></li>";
                    }
                ?>
            </ul>
        </section>
    </body>
</html>