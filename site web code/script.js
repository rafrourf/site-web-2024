function openMenu(photoUrl, title, description, actions) {
    document.getElementById('large-photo').src = photoUrl;
    document.getElementById('menu-title').innerText = title;
    document.getElementById('menu-description').innerText = description;

    const menuActions = document.getElementById('menu-actions');
    menuActions.innerHTML = ''; // Réinitialiser les actions
    actions.forEach(action => {
        const li = document.createElement('li');
        li.innerText = action;
        menuActions.appendChild(li);
    });

    document.getElementById('menu').style.display = 'block';
}

function closeMenu() {
    document.getElementById('menu').style.display = 'none';
}