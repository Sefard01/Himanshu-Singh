const input = document.getElementById("searchInput");
const container = document.querySelector(".searchable-area");

const elements = container.querySelectorAll("h1, h2, h3, p, li");

let originals = new Map();

// store original HTML safely
elements.forEach(el => originals.set(el, el.innerHTML));

input.addEventListener("keyup", () => {
  const query = input.value.trim().toLowerCase();

  elements.forEach(el => {
    el.innerHTML = originals.get(el);

    if (query === "") return;

    const text = el.innerText.toLowerCase();
    if (!text.includes(query)) return;

    const regex = new RegExp(`(${query})`, "gi");
    el.innerHTML = el.innerHTML.replace(regex, `<mark>$1</mark>`);
  });
});


const pdfLinks = document.querySelectorAll(".pdf-link");
const pdfModal = document.getElementById("pdfViewerModal");
const pdfFrame = document.getElementById("pdfFrame");
const pdfTitle = document.getElementById("pdfTitle");
const closePdf = document.getElementById("closePdf");

pdfLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    pdfFrame.src = link.dataset.pdf;
    pdfTitle.innerText = link.dataset.title;
    pdfModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

closePdf.addEventListener("click", () => {
  pdfModal.classList.remove("active");
  pdfFrame.src = "";
  document.body.style.overflow = "auto";
});
