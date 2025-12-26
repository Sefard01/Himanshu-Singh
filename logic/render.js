const booksBox = document.getElementById("booksContainer");
const poemsBox = document.getElementById("poemsContainer");
const projectsBox = document.getElementsByClassName("projectsContainer")[0];

DATA.books.forEach(book => {
  booksBox.innerHTML += `
    <div class="bookCard">
<a href="#" class="pdf-link" data-pdf="${book.link}" data-title="${book.title}">
 <img src="${book.img}" alt="${book.title}" id="bookImg"/>
      </a>

      <h3>${book.title}</h3>
    </div>
  `;
});

DATA.poems.forEach(poem => {
  poemsBox.innerHTML += `<li><a href="${poem.link}" target="_blank">${poem.title}</a></li>`;
});

DATA.projects.forEach(project => {
  projectsBox.innerHTML += `<li><a href="${project.link}" target="_blank">${project.name}</a></li>`;
});


const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-menu");
});


