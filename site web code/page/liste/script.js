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
        description: "Jupiter est la plus grande planète du système solaire.",
        image: "https://3.bp.blogspot.com/-JzB2ruOjBOs/WJy8tR_tJSI/AAAAAAAABdA/26gANOQ4Y4IZyMnEGS2L8X-dvhVhGL0ZQCLcB/s1600/jupiter_HD.jpg"
    },
    saturn: {
        title: "Saturne",
        description: "Saturne est célèbre pour ses anneaux.",
        image: "https://img.freepik.com/premium-photo/saturn-planet-with-night-view-rising-sun-realistic-view-solar-system-3d-rendering_508524-249.jpg?w=2000"
    },
    uranus: {
        title: "Uranus",
        description: "Uranus est unique car elle tourne sur le côté.",
        image: "https://www.telescopenerd.com/wp-content/uploads/uranus.png"
    },
    neptune: {
        title: "Neptune",
        description: "Neptune est la planète la plus éloignée du soleil.",
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