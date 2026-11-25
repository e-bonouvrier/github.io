// Ciel flottant : nuages, étoiles et croissant de lune
(function () {
  var ciel = document.getElementById("ciel");
  var hero = document.querySelector(".hero");
  if (!ciel) return;

  function alea(min, max) { return Math.random() * (max - min) + min; }

  function ajoute(parent, classe, props) {
    var el = document.createElement("span");
    el.className = classe;
    for (var cle in props) el.style.setProperty(cle, props[cle]);
    parent.appendChild(el);
  }

  for (var i = 0; i < 6; i++) {
    ajoute(ciel, "nuage", {
      "--x": alea(0, 80) + "vw",
      "--y": alea(4, 85) + "vh",
      "--t": alea(7, 14) + "rem",
      "--o": alea(0.55, 0.9),
      "--d": alea(70, 140) + "s",
      "--delai": -alea(0, 140) + "s"
    });
  }

  for (var j = 0; j < 16; j++) {
    ajoute(ciel, "etoile", {
      "--x": alea(2, 96) + "vw",
      "--y": alea(3, 95) + "vh",
      "--t": alea(0.6, 1.4) + "rem",
      "--c": j % 2 ? "var(--etoile)" : "var(--or)",
      "--d": alea(2.5, 6) + "s",
      "--delai": -alea(0, 6) + "s"
    });
  }

  if (hero) ajoute(hero, "lune", {});
})();