export function sanitizeInput(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// load the header and footer and other custom components
export async function loadComponent(id, path) {
  const el = document.getElementById(id);

  if (!el) return;

  const html = await fetch(path).then(r => r.text());
  el.innerHTML = html;

  // 👇 Header-specific logic runs AFTER insertion
  if (id === "headerComponent") {
    const word = document.body.dataset.headerWord;
    const titleSpan = document.getElementById("page-title");

    if (word && titleSpan) {
      titleSpan.textContent = `${word}`;
    }
  }
}

export function loadGallery({ folder, images, containerId, group = "gallery" }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  images.forEach(file => {
    const src = `${folder}/${file}`;

    const link = document.createElement("a");
    link.className = "example-image-link";
    link.href = src;
    link.setAttribute("data-lightbox", group);

    const img = document.createElement("img");
    img.className = "example-image";
    img.src = src;
    img.alt = file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    img.width = 350;

    link.appendChild(img);
    container.appendChild(link);
  });
}