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
    catch(PDOException $e) {
        echo 'Error : ' .$e->getMessage();
    }
?>

<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Gabriel Rouleau</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <script>var db = <?php echo json_encode($resultat); ?>;</script>

        <section class="left">
            <header>
                <h2>Gabriel</h2>
                <ul>
                    <li class="unselectable nav-link active" onclick="ShowContent(-1)">A propos</li>
                    <li class="unselectable nav-link" onclick="ShowContent(-2)">Contact</li>
                </ul>
            </header>
            <div class="content" id="content">
                <!-- Content here... -->
            </div>
        </section>

        <section class="right">
            <ul class="projects">
                <?php
                    for ($i=0; $i < count($resultat); $i++) 
                    { 
                        echo "<li class=\"project unselectable ".$i."\" id=\"project\" style=\"background-image: url('".$resultat[$i][2]."');\"><div><h1>".$resultat[$i][1]."</h1></div></li>";
                    }
                ?>            
            </ul>
        </section>

        <script src="includes/showdown.min.js"></script>
        <script src="script.js"></script>
    </body>
</html>