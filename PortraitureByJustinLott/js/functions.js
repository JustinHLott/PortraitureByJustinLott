export function sanitizeInput(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

//load the header and footer and other custom components
export async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (el) {
    const html = await fetch(path).then(r => r.text());
    el.innerHTML = html;
  }
}