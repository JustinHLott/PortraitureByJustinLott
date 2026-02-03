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