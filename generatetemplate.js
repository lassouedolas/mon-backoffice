async function genererHTMLDepuisPDF(cheminPDF, fichierHTML) {
  try {
    const texte = await extraireTexteDepuisPDF(cheminPDF);

    // Exemple de structuration du texte extrait en HTML
    const contenuHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document PDF Converti</title>
</head>
<body>
  <h1>Contenu extrait du PDF</h1>
  <pre>${texte}</pre> <!-- Texte brut mis dans un bloc préformaté -->
</body>
</html>
    `.trim();

    // Écrire le contenu dans un fichier HTML
    fs.writeFileSync(fichierHTML, contenuHTML, "utf-8");
    console.log(`✅ Fichier HTML généré : ${fichierHTML}`);
  } catch (error) {
    console.error("Erreur lors de la génération du fichier HTML :", error);
  }
}

// Exemple d'utilisation
const cheminPDF = "sorties/exemple.pdf"; // Chemin du fichier PDF
const fichierHTML = "sorties/exemple.html"; // Chemin du fichier HTML de sortie
genererHTMLDepuisPDF(cheminPDF, fichierHTML);
