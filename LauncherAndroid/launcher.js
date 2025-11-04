fetch('config/apps.json')
  .then(res => res.json())
  .then(apps => {
    const grid = document.getElementById('grid');
    apps.forEach(app => {
      const card = document.createElement('div');
      card.className = 'app-card';
      
      card.innerHTML = `
  <img src="${app.icon}" alt="${app.name}">
  <h3>${app.name}</h3>
  <p>${app.desc}</p>
  <button class="open-button">Descargar</button>
`;

const button = card.querySelector('.open-button');
button.onclick = () => {
  showNotification("NOTA: Al tener la app descargada, cierra la ventana extra, es necesaria para una descarga correcta.");
  window.open("https://www.dropbox.com/scl/fi/mqolevn7ede0lm4lgq2qi/NI-Inc-Launcher.exe?rlkey=4v0rwle1pf6uyajqi8ooocyqt&st=kjdr38qn&dl=1");
};

      grid.appendChild(card);
    });
  });

  function showNotification(message) {
  const box = document.getElementById('notification');
  const text = document.getElementById('notification-text');
  text.textContent = message;
  box.style.display = 'block';

  setTimeout(() => {
    box.style.display = 'none';
  }, 4000); // Oculta después de 4 segundos
}

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', () => {
  sideMenu.style.left = sideMenu.style.left === '0px' ? '-220px' : '0px';
});

// Funciones de cada botón
document.getElementById('config-btn').addEventListener('click', () => {
  alert("Descubriste una función en desarrollo");
});

document.getElementById('links-btn').addEventListener('click', () => {
  window.location.href = "links.html";
});

document.getElementById('updates-btn').addEventListener('click', () => {
  window.location.href = "patch-update.html";
});