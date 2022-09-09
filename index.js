// Créer un événément au scroll

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (lastScroll < window.scrollY) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0px";
  }
  lastScroll = window.scrollY;
});

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
