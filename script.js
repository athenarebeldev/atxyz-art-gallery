document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("galleryContainer");
    const artListContainer = document.getElementById("artList");
    const searchInput = document.getElementById("searchInput");
  
    // Fetch JSON data
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        renderGalleries(data);
        renderArtList(data);
        setupSearch(data);
      })
      .catch((error) => console.error("Error loading data:", error));
  
    // Render gallery view
    function renderGalleries(galleries) {
      galleryContainer.innerHTML = ""; // Clear container
      galleries.forEach((gallery) => {
        const gallerySection = document.createElement("div");
        gallerySection.classList.add("gallery");
        gallerySection.innerHTML = `
          <h3>${gallery.gallery}</h3>
          <div class="art-container">
            ${gallery.pieces
              .map(
                (piece) => `
              <img src="${piece.image}" alt="${piece.title}" class="art-image" data-title="${piece.title}" />
            `
              )
              .join("")}
          </div>
        `;
        galleryContainer.appendChild(gallerySection);
      });
  
      // Add click event for art pieces
      document.querySelectorAll(".art-image").forEach((img) => {
        img.addEventListener("click", (e) => {
          const title = e.target.dataset.title;
          const art = galleries
            .flatMap((g) => g.pieces)
            .find((p) => p.title === title);
          showArtDetails(art);
        });
      });
    }
  
    // Render full art list
    function renderArtList(galleries) {
      artListContainer.innerHTML = ""; // Clear list
      galleries.forEach((gallery) => {
        gallery.pieces.forEach((piece) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${piece.title} by ${piece.artist} (${piece.year})`;
          listItem.addEventListener("click", () => showArtDetails(piece));
          artListContainer.appendChild(listItem);
        });
      });
    }
  
    // Search functionality
    function setupSearch(galleries) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filteredPieces = galleries.flatMap((g) =>
          g.pieces.filter(
            (p) =>
              p.title.toLowerCase().includes(query) ||
              p.artist.toLowerCase().includes(query)
          )
        );
        renderFilteredList(filteredPieces);
      });
    }
  
    // Render filtered list
    function renderFilteredList(pieces) {
      artListContainer.innerHTML = ""; // Clear list
      pieces.forEach((piece) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${piece.title} by ${piece.artist} (${piece.year})`;
        listItem.addEventListener("click", () => showArtDetails(piece));
        artListContainer.appendChild(listItem);
      });
    }
  
    // Show art details
    function showArtDetails(piece) {
      alert(`Title: ${piece.title}\nArtist: ${piece.artist}\nYear: ${piece.year}\nDescription: ${piece.description}`);
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll("img.lazy");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });
  
    lazyImages.forEach((img) => observer.observe(img));
  });
  