const app = document.querySelector("#app");
const links = document.querySelectorAll("nav a");

const content = {
  home: `
    <h1>Welcome to Studio 01</h1>
    <img src="https://picsum.photos/400/250?1">
    <p>This is the home page.</p>
  `,
  about: `
    <h1>About Us</h1>
    <img src="https://picsum.photos/400/250?2">
    <p>This is the about page.</p>
  `,
  services: `
    <h1>Services</h1>
    <img src="https://picsum.photos/400/250?3">
    <p>This is the services page.</p>
  `,
  contact: `
    <h1>Contact</h1>
    <img src="https://picsum.photos/400/250?4">
    <p>This is the contact page.</p>
  `
};


app.innerHTML = content["home"];

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    
    console.log("Clicked:", this.id);

    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

    const page = this.id;

    
    if (content[page]) {
      app.innerHTML = content[page];
    } else {
      console.log("ERROR: page not found");
    }
  });
});