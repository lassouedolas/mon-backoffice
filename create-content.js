// contentGenerator.js

// Fonction pour générer une description de produit
function generateProductDescription(productName, category, features) {
    return `
        <h2>${productName}</h2>
        <p><strong>Catégorie:</strong> ${category}</p>
        <p><strong>Caractéristiques:</strong></p>
        <ul>
            ${features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
}

// Fonction pour créer un lien de téléchargement pour le manuel
function createManualDownloadLink(productName, pdfUrl) {
    return `<a href="${pdfUrl}" download>Télécharger le manuel de ${productName}</a>`;
}

// Fonction pour générer une FAQ
function generateFAQ(questionsAndAnswers) {
    return `
        <h3>FAQ</h3>
        ${questionsAndAnswers.map(({ question, answer }) => `
            <details>
                <summary>${question}</summary>
                <p>${answer}</p>
            </details>
        `).join('')}
    `;
}

// Fonction pour générer une fiche produit complète
function generateProductPage(product) {
    const description = generateProductDescription(product.name, product.category, product.features);
    const downloadLink = createManualDownloadLink(product.name, product.manualUrl);
    const faq = generateFAQ(product.faq);

    return `
        <div class="product-page">
            ${description}
            <section>
                <h3>Manuel d'utilisation</h3>
                ${downloadLink}
            </section>
            ${faq}
        </div>
    `;
}

// Exemple d'utilisation
const exampleProduct = {
    name: "Réfrigérateur XYZ",
    category: "Électroménager",
    features: ["Grande capacité", "Économie d'énergie", "Technologie NoFrost"],
    manualUrl: "/manuels/refrigerateur_xyz.pdf",
    faq: [
        { question: "Comment nettoyer le réfrigérateur?", answer: "Utilisez un chiffon humide et du savon doux." },
        { question: "Quelle est la garantie?", answer: "La garantie est de 2 ans." }
    ]
};

console.log(generateProductPage(exampleProduct));
