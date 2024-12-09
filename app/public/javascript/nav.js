document.addEventListener("DOMContentLoaded", ()=> {

    fetch('../Json/nav.json')
    .then (response => response.json())
    .then (data => {

        const navbar = document.getElementById('navagation');
        const navLinks = data.navLinks;

        const logo = document.createElement('img');
        logo.src = data.logo.src;  
        logo.alt = data.logo.alt;                   
        logo.id = 'logo';              
        navbar.appendChild(logo);

        navLinks.forEach(link =>{
            const aTag = document.createElement('a');
            aTag.href = link.url
            aTag.textContent = link.name;
            navbar.appendChild(aTag);
        });
    })

    .catch(error => {
        console.error("Error loading the navigation data:", error);
    });

});