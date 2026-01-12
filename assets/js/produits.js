const produits = [
    {
        nom: "Baguette normale",
        categorie: "pains",
        prix: "1,20 €",
        image: "assets/images/produits/baguette.jpg"
    },
        {
        nom: "Baguette deux doigts",
        categorie: "pains",
        prix: "1,60 €",
        image: "assets/images/produits/baguette1.jpg"
    },
    {
        nom: "Demi croissant",
        categorie: "viennoiseries",
        prix: "1,10 €",
        image: "assets/images/produits/croissant.jpg"
    },
    {
        nom: "Gâteau smile",
        categorie: "gateaux",
        prix: "15,00 €",
        image: "assets/images/produits/gateau.jpg"
    }
];

function afficherProduits(categorie) {
    const container = document.getElementById("liste-produits");
    container.innerHTML = "";

    produits
  .filter(p => p.categorie === categorie)
  .forEach(p => {
    container.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="produit card h-100">
          <img
            src="${p.image}"
            alt="${p.nom}"
            class="img-fluid produit-img"
            width="400" height="300"
          >
          <div class="card-body">
            <h3 class="h6 mb-1">${p.nom}</h3>
            <p class="text-muted mb-0">${p.prix}</p>
          </div>
        </div>
      </div>
    `;
  });
}
