function renderGalleryView(data) {
    const galleryContainer = document.getElementById("galleryContainer");
    const fullArtList = document.getElementById("artList");

    // Clear containers
    galleryContainer.innerHTML = "";
    fullArtList.innerHTML = "";

    data.forEach((art) => {
        // Create a card for the gallery section
        const card = document.createElement("div");
        card.className = "art-card";
        card.innerHTML = `
            <img src="${art.image}" alt="${art.title}" style="width:100px;height:100px;">
            <h3>${art.title}</h3>
            <p>${art.artist}</p>
        `;
        card.addEventListener("click", () => alert(art.description));

        galleryContainer.appendChild(card);

        // Add to the full list section
        const listItem = document.createElement("li");
        listItem.textContent = `${art.title} - ${art.artist}`;
        fullArtList.appendChild(listItem);
    });
}

function renderArtList(data) {
    const artList = document.getElementById("artList");
    artList.innerHTML = "";

    data.forEach(art => {
        const listItem = document.createElement("li");
        listItem.textContent = `${art.title} - ${art.artist}`;
        artList.appendChild(listItem);
    });
}
