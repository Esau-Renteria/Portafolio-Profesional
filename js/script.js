const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;


let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculta el menu una vez que se selecciona una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("HTML");
    habilidades[2].classList.add("CSS");
    habilidades[3].classList.add("PHP");
    habilidades[4].classList.add("laravel");
    habilidades[5].classList.add("python");
    habilidades[6].classList.add("sql");
    habilidades[7].classList.add("git-github");
  }
}

//detectar el scroll de la barra
window.onscroll = function () {
  efectoHabilidades();
};



//Funcion del dark mode
toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='LIGHT MODE'
    }else{
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='DARK MODE'
    }
});

//Funcion cambio de color


toggleColors.addEventListener("click", (e) =>{
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});

