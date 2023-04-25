document.addEventListener('DOMContentLoaded', function () {
    let menuItems = [
        { label: 'Home', link: "/" },
        { label: 'Kategorien', link: '#' },
        {
            label: 'Verkaufen', link: '#',
            submenu: [
                { label: 'Neuer Artikel', link: '/newarticle' },
            ]
        },
        {
            label: 'Unternehmen',
            link: '#',
            submenu: [
                { label: 'Philosophie', link: '#' },
                { label: 'Karriere', link: '#' }
            ]
        }
    ];
    let kategorien=document.getElementById('data-kategorien').getAttribute('data-kategorien');
    kategorien=JSON.parse(kategorien);
    let kategorienMenuItem = menuItems.find(item => item.label === "Kategorien");
    kategorienMenuItem.submenu = kategorien.map(item => ({ label: item.ab_name, link: '#' }));
    const navbar = document.getElementById('navbar');
    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');
    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        const menuItemLink = document.createElement('a');
        menuItemLink.textContent = item.label;
        menuItemLink.href = item.link;
        menuItem.appendChild(menuItemLink);

        if (item.submenu) {
            const submenuList = document.createElement('ul');
            submenuList.classList.add('submenu-list');

            item.submenu.forEach(submenuItem => {
                const submenuListItem = document.createElement('li');
                const submenuItemLink = document.createElement('a');
                submenuItemLink.textContent = submenuItem.label;
                submenuItemLink.href = submenuItem.link;
                submenuListItem.appendChild(submenuItemLink);
                submenuList.appendChild(submenuListItem);
            });
            menuItem.appendChild(submenuList);
        }
        menuList.appendChild(menuItem);
    });
    navbar.appendChild(menuList);
});
