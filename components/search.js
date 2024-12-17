function setupSearch(artData) {
    const searchInput = document.getElementById("searchInput");
    const artList = document.getElementById("artList");

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filteredArt = artData.filter(art => 
            art.title.toLowerCase().includes(query) || 
            art.artist.toLowerCase().includes(query)
        );

        renderArtList(filteredArt);
    });
}
