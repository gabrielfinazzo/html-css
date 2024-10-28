let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
let menuItems = document.querySelectorAll('.menu-item');

 menu.onclick = () => {
    menu.classList.toggle('fa-times');
}

menu.addEventListener("click", () => 
navbar.classList.toggle("active")); 

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});


/* E-mail */
const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    function formSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch("https://getform.io/f/aejjygpb", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }