var r = document.querySelector(':root');
const mainKleur = getComputedStyle(document.documentElement).getPropertyValue('--achtergrondkleur');
var dm = 0
function darkmode(){
if (dm == 0){
    myFunction_get()
    myFunction_set()
    dm = 1
}
else{
    myFunction_get()
    myFunction_setLight()
    dm = 0 
}
}


function myFunction_get() {
    var rs = getComputedStyle(r);
  }
  function myFunction_set() {
    r.style.setProperty('--achtergrondkleur', '#000000');
    r.style.setProperty('--first-color', '#03fc35 ');
    r.style.setProperty('--second-color', '#127a00 ');
   
    
  }
  function myFunction_setLight() {
    r.style.setProperty('--achtergrondkleur', '#ffffff');
    r.style.setProperty('--first-color', '#97BC91 ');
    r.style.setProperty('--second-color', '#3A4A36 ');
   
  }
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.navlink')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navmenu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.navmenu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.homedata, .aboutimg, .skillssubtitle, .skillstext',{}); 
sr.reveal('.homeimg, .aboutsubtitle, .abouttext, .skillsimg',{delay: 400}); 
sr.reveal('.homesocial-icon',{ interval: 200}); 
sr.reveal('.skillsdata, .workimg, .contactinput',{interval: 200}); 
