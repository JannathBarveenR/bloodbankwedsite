const sections = {
  home: document.getElementById('home'),
  donate: document.getElementById('donate'),
  request: document.getElementById('request'),
  inventory: document.getElementById('inventory'),
  contact: document.getElementById('contact')
};

const links = {
  home: document.getElementById('home-link'),
  donate: document.getElementById('donate-link'),
  request: document.getElementById('request-link'),
  inventory: document.getElementById('inventory-link'),
  contact: document.getElementById('contact-link'),
  donateHero: document.getElementById('donate-link-hero')
};

function hideAllSections() {
  for (let section in sections) {
    sections[section].style.display = 'none';
  }
}

function showSection(section) {
  hideAllSections();
  sections[section].style.display = 'block';
}

for (let key in links) {
  links[key].addEventListener('click', function() {
    if (key === 'donateHero') {
      showSection('donate');
    } else {
      showSection(key);
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  showSection('home'); // Show home section by default
});