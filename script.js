const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".art-card");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    cards.forEach((card) => {
      card.hidden = selected !== "all" && card.dataset.category !== selected;
    });
  });
});

document.querySelectorAll(".order-product").forEach((button) => {
  button.addEventListener("click", () => {
    const style = document.querySelector('select[name="style"]');
    const details = document.querySelector('textarea[name="details"]');
    style.value = button.dataset.product.includes("Charcoal") || button.dataset.product === "Shades of You"
      ? "Charcoal portrait"
      : button.dataset.product === "Colour Stories" ? "Painting" : "Pencil sketch";
    details.value = `I'm interested in "${button.dataset.product}" (starting price ₹${button.dataset.price}). Please share the available options.`;
    document.getElementById("custom-order").scrollIntoView({ behavior: "smooth" });
    showToast("Artwork selected — complete the enquiry form below.");
  });
});

document.getElementById("orderForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const summary = [
    "ALEKH STUDIO — COMMISSION ENQUIRY",
    "--------------------------------",
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Artwork style: ${data.get("style")}`,
    `Preferred size: ${data.get("size")}`,
    `Budget: ${data.get("budget")}`,
    `City: ${data.get("city") || "Not provided"}`,
    "",
    "Idea / details:",
    data.get("details") || "Not provided",
    "",
    "This is an enquiry only. Final price and timeline to be confirmed."
  ].join("\\n");
  const result = document.getElementById("formResult");
  result.hidden = false;
  result.textContent = summary;
  const copy = document.createElement("button");
  copy.className = "copy-btn";
  copy.type = "button";
  copy.textContent = "Copy enquiry summary";
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(summary);
      showToast("Enquiry summary copied.");
    } catch {
      showToast("Please select and copy the enquiry text.");
    }
  });
  result.appendChild(document.createElement("br"));
  result.appendChild(copy);
  showToast("Your enquiry summary is ready.");
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
