const navDisplayToggle = document.querySelector("#navDisplayToggle");
const navItems = document.querySelectorAll('.navItem');
navDisplayToggle.addEventListener('click', function(){
    navItems.forEach(navItem => {
        navItem.classList.toggle('revealed');
    });
});

console.log("Hello from AWS!")