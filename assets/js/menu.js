// Ítems del menú
const menuItems = [
  { href: '/index.html', icon: 'bi bi-arrow-left', text: 'Inicio' } // Flecha hacia index
];

// Enlaces sociales
const socialLinks = [
  { href: 'https://www.behance.net/lopezrosasclaraDG', icon: 'bi bi-behance', target: '_blank' },
  { href: 'https://www.linkedin.com/in/clara-lopez-rosas/', icon: 'bi bi-linkedin', target: '_blank' },
  { href: 'https://wa.link/qhw9gc', icon: 'bi bi-whatsapp', target: '_blank' }
];

// Función para crear círculos con iconos centrados
function createCircleLink(href, iconClass, target = '_self') {
  const a = document.createElement('a');
  a.href = href;
  a.target = target;
  a.style.display = 'flex';
  a.style.alignItems = 'center';
  a.style.justifyContent = 'center';
  a.style.width = '50px';
  a.style.height = '50px';
  a.style.borderRadius = '50%';
  a.style.backgroundColor = '#1DF9A0'; // Fondo verde
  a.style.color = '#0c0b0bff'; // Icono blanco
  a.style.textDecoration = 'none';
  a.style.fontSize = '24px';
  a.style.transition = 'transform 0.2s';
  a.innerHTML = `<i class="${iconClass}"></i>`;
  return a;
}

function createNavMenu(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const nav = document.createElement('nav');
  nav.id = 'navmenu';
  nav.className = 'navmenu';
  nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  nav.style.alignItems = 'center';
  nav.style.gap = '20px';

  // Botón "Inicio" que ahora sí va al index.html
  nav.appendChild(createCircleLink(menuItems[0].href, menuItems[0].icon, '_self'));

  // Enlaces sociales
  const socialDiv = document.createElement('div');
  socialDiv.style.display = 'flex';
  socialDiv.style.flexDirection = 'column';
  socialDiv.style.alignItems = 'center';
  socialDiv.style.gap = '15px';
  socialDiv.style.marginTop = '10px';

  socialLinks.forEach(link => {
    const a = createCircleLink(link.href, link.icon, link.target);
    socialDiv.appendChild(a);
  });

  nav.appendChild(socialDiv);
  container.appendChild(nav);
}

// Insertar el menú
createNavMenu('menu-container');
