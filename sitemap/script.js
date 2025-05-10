// Crée une variable pour le bouton
const button = document.createElement('a');

// Configure le bouton
button.href = '../../acceuilsiteweb.html'; // Lien vers la page d'accueil
button.className = 'home-button'; // Ajoute la classe CSS
button.title = 'Accueil'; // Titre du bouton

// Ajoute l'icône de maison
const icon = document.createElement('span');
icon.className = 'icon';
icon.textContent = '🏠'; // Emoji de maison

// Ajoute l'icône au bouton
button.appendChild(icon);

// Ajoute le bouton au corps de la page
document.body.appendChild(button);

// Ajoute un événement de clic au bouton
button.addEventListener('click', function(event) {
    console.log('Bouton Accueil cliqué!');
});