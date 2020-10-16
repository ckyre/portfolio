<?php
    $serveur = "localhost";
    $login = "root";
    $pass = "";
    $dbName = "portfolio";
    
    try {
        // Get projects from database
        $connexion = new PDO("mysql:host=$serveur;dbname=$dbName", $login, $pass);
        $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                                            
        $requete = $connexion->prepare("SELECT * FROM projets");
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
        <meta charset="utf-8">
        <title>Gabriel Rouleau</title>
        <link rel="icon" href="assets/images/commons/favicon.ico" />
        <link rel="stylesheet" href="style.css">
    </head>
    <body onload="OnLoaded()">
        <!-- Get projects descriptions from database and store it in js array -->
        <script>var descriptions = <?php echo json_encode($descriptions); ?>;</script>

        <!-- Left section/panel -->
        <section class="left">
            <img src="assets/images/commons/left-bg.svg" alt="" class="bg-image unselectable">
            <header>
                <h2>Gabriel</h2>
                <ul>
                    <li class="unselectable nav-link active" data-id="-1">A propos</li>
                    <li class="unselectable nav-link" data-id="-2">Contact</li>
                </ul>
            </header>
            <div class="content">
                <!-- Projects descriptions here -->
            </div>
        </section>

        <!-- Face at center -->
        <img src="assets/images/commons/loulou.png" alt="" class="face-img">

        <!-- Right section/panel -->
        <section class="right">
            <img src="assets/images/commons/right-bg.svg" alt="" class="bg-image unselectable">
            <ul class="projects">
                <?php
                    for ($i=0; $i < count($resultat); $i++) 
                    { 
                        echo "<li class=\"project unselectable\" data-id=\"".$i."\" style=\"background-image: url('".$resultat[$i][2]."');\"><div><h1>".$resultat[$i][1]."</h1></div></li>";
                    }
                ?>
            </ul>
        </section>
        
        <!-- Include scripts -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="assets/scripts/showdown.min.js"></script>
        <script src="script.js"></script>
    </body>
</html>