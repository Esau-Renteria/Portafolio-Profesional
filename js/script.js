let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible =true;
    }
}

function seleccionar(){
    //oculta el menu una vez que se selecciona una opcion
    document.getElementById("nav").classList ="";
    menuVisible =false;
}


//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript")
        habilidades[1].classList.add("HTML")
        habilidades[2].classList.add("CSS")
        habilidades[3].classList.add("PHP")
        habilidades[4].classList.add("laravel")
        habilidades[5].classList.add("python")
        habilidades[6].classList.add("sql")
        habilidades[7].classList.add("git-github")
    }
}

//detectar el scroll de la barra 
window.onscroll = function() {
    efectoHabilidades();
}