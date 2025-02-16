const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.links-group');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let activeLink = 0;

links.forEach((link, i) =>{
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(()=>{
                activeLink = i;
                sections[i].classList.add('active')
            }, 500)
        }
    })
})