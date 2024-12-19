const planets = {
    mercury: {
        title: "Mercure",
        description: "elle est la première planète qui a été créer sur notre système solaire. Un seul jour sur cette planète dur 1 année terrestre. Le soleil est tellement proche de Mercure qu'il apparait 4X plus gros que sur terre. La température Varie entre -173° et +427° donc la vie sur cette planète est impossible",
        image: "https://images.theconversation.com/files/245261/original/file-20181113-194491-1ie3n15.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=754&h=754&fit=crop&dpr=2"
    },
    venus: {
        title: "Vénus",
        description: ": Il s’agit d’une planète tellurique, c’est-à-dire une planète composée principalement de roche et de métal. Sa température est de 462°C. elle fais le tour du soleil en 243 jour dans le sens rétrograde. Il y a des vent violent de 350km/h.",
        image: "https://www.astronote.fr/wp-content/uploads/2020/04/plan%C3%A8te-V%C3%A9nus-scaled.jpg"
    },
    earth: {
        title: "Terre",
        description: "C’est la planète ou nous vivons actuellement, il y a 7.9 milliards d’habitant sur terre, la terre fais le tour du soleil en 365/366 jours : une année chez nous. Il y a 4 saisons qui se font par rapport à l’orientation de la terre par rapport au soleil. Une journée dure 24h. Il y a 7 continents sur terre habité ",
        image: "http://www.astrosurf.com/luxorion/Media/terre-landsat8-atlantique-2015.jpg"
    },
    mars: {
        title: "Mars",
        description: "Elle est la 4 ième  planète dans notre système solaire et il lui est souvent adjoint l’épithète de « planète rouge » en raison de sa couleur. Elle possède deux petites lunes, Phobos et Déimos. Mars a une atmosphère très peu dense, où domine le CO2, et des températures qui se situent en moyenne à –60°C. Les volcans géants (comme le mont Olympus) et les canyons importants de Mars sont bien connus. Les robots (comme les “rovers” de la NASA) tentent d’explorer sa surface.    ",
        image: "https://observer.com/wp-content/uploads/sites/2/2020/10/stsci-h-p1829d-m-2000x2000-1.jpg?quality=80&strip"
    },
    jupiter: {
        title: "Jupiter",
        description: "Jupiter est la 5ième il s'agit d'une géante gazeuse (redouverte entièrement d'un gaz) La température sur cette planète est de -148°C. jupiter ne possède pas de surface solide a cause de ce gaz. Elle subit également des perturbation athmosphérique",
        image: "https://3.bp.blogspot.com/-JzB2ruOjBOs/WJy8tR_tJSI/AAAAAAAABdA/26gANOQ4Y4IZyMnEGS2L8X-dvhVhGL0ZQCLcB/s1600/jupiter_HD.jpg"
    },
    saturn: {
        title: "Saturne",
        description: "saturne est la deuxième planète la plus grosse de notre systèpme solaire et la sixième planète en partant que soleil. Ils s’agit d’une géante gazeuse car elle est recouverte de gaz. Elle acomplit une révolution en 29ans et 167 jour. La température est de -178°C",
        image: "https://img.freepik.com/premium-photo/saturn-planet-with-night-view-rising-sun-realistic-view-solar-system-3d-rendering_508524-249.jpg?w=2000"
    },
    uranus: {
        title: "Uranus",
        description: "il s'agit d'une géante de glace, donc elle est entièrement recouverte de glace. Sa température est de -216°C. Pour ces deux raison, ;a possibilité de vivre sur cette planète est impossible.",        image: "https://www.telescopenerd.com/wp-content/uploads/uranus.png"
    },
    neptune: {
        title: "Neptune",
        description: "Nepture est une géante de glace, elle orbite a environ 4 milliards de kilimètres et effectue une rotation autour du soleil en 165 ans. Un jour sur nepture dur 16h06. sa température est de -214°C ",
        image: "https://images.squarespace-cdn.com/content/v1/5fa5ec79661ee904d2973ca0/dc27d038-8956-4408-88e0-61e3c265f5f5/neptune.png"
    }
};

document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => {
        const planetId = planet.id;
        const planetData = planets[planetId];

        document.getElementById('planet-image').src = planetData.image;
        document.getElementById('planet-image').style.display = 'block';
        document.getElementById('planet-title').textContent = planetData.title;
        document.getElementById('planet-description').textContent = planetData.description;
    });
});

// Crée une variable pour le bouton
const button = document.createElement('a');

// configuration du bouton
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