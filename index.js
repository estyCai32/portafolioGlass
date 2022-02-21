let dashboard = document.querySelector(".main-derecha");
let dashboardTitle = document.querySelector(".main-title h1");
let dashboardCards = document.querySelector(".main-derecha .cards");

let sobreMi = document.querySelector("#sobreMi");
let habilidades = document.querySelector("#habilidades");
let proyectos = document.querySelector("#proyectos");
let educacion = document.querySelector("#educacion");
let contacto = document.querySelector("#contacto");

sobreMi.addEventListener("click", mostrarSobreMi => {
    renderSobreMi();
});

habilidades.addEventListener("click", mostrarHabilidades => {
    renderHabilidades();
});

proyectos.addEventListener("click", mostrarProyectos => {
    renderProyectos();
});

educacion.addEventListener("click", mostrarEducacion => {
    renderEducacion();
});

contacto.addEventListener("click", mostrarContacto => {
    renderContactos();
});

// RENDERS
function renderHabilidades() {
    cambiarTitulo("Habilidades");
    limpiarCartas();

    let card4 = new Card("fab fa-html5", "HTML - CSS - JAVASCRIPT", "Tecnologias Basicas Front-End");
    dashboardCards.appendChild(card4.crearDivCard());

    let card1 = new Card("fab fa-java", "JAVA", "Programacion Orientada a Objetos - Test Cases con JUNIT");
    dashboardCards.appendChild(card1.crearDivCard());

    let card3 = new Card("fas fa-seedling", "SPRING", "Inyeccion de dependencias MAVEN - Spring Boot - Hibernate - Arquitectura MVC");
    dashboardCards.appendChild(card3.crearDivCard());

    let card2 = new Card("fas fa-database", "SQL", "MySQL Workbench");
    dashboardCards.appendChild(card2.crearDivCard());

    let card5 = new Card("fab fa-git", "GIT", "Git - GitHub");
    dashboardCards.appendChild(card5.crearDivCard());

    let card6 = new Card("fas fa-laptop-code", "IDE", "Eclipse - Intelli J - Visual Studio Code");
    dashboardCards.appendChild(card6.crearDivCard());

    let card7 = new Card("fab fa-php", "PHP", "PHP basico");
    dashboardCards.appendChild(card7.crearDivCard());

}

function renderSobreMi() {
    cambiarTitulo("Sobre Mi");
    limpiarCartas();

    let txtPerfil =
        "Estudiante de la carrera Tecnicatura en Desarrollo Web en la Universidad Nacional de la Matanza. Con solidos conocimientos en JAVA, POO, JUnit, HTML, CSS.Perfeccionandome en tecnologias como JAVASCRIPT, PHP, Spring, Spring Boot,MVC, Hibernate y SQL."
    let card1 = new Card(null, "PERFIL", txtPerfil);
    dashboardCards.appendChild(card1.crearDivCard());


    let txtExperiencia = "<h3> Circo Studio - Polo Informatico Unlam </h3><p> Trabajo en condicion de becario desde <b>enero 2022</b> en donde me estan capacitando en tecnologias como Angular y herramientas de Microsoft.</p>";
    let card3 = new Card(null, "EXPERIENCIA", txtExperiencia);
    dashboardCards.appendChild(card3.crearDivCard());



    let txtAptitudes = "Capacidad De Trabajo en Equipo, Proactivo, Responsable, Positivo. Mi principal objetivo es desarrollarme profesionalmente en un lugar que presente constantemente nuevos desafíos y adquirir nuevas habilidades todo el tiempo.";
    let card2 = new Card(null, "APTITUDES", txtAptitudes);
    dashboardCards.appendChild(card2.crearDivCard())
}

function renderContactos() {
    cambiarTitulo("Contacto");
    limpiarCartas();

    let card1 = new Card("fab fa-linkedin", "Linkedin", null);
    dashboardCards.appendChild(card1.crearDivConAHref("https://www.linkedin.com/in/esteban-barone/"));

    let card2 = new Card("fas fa-mail-bulk", "estybvb@gmail.com", "");
    dashboardCards.appendChild(card2.crearDivCard());

    let card4 = new Card("fab fa-twitter", "Twitter", null);
    dashboardCards.appendChild(card4.crearDivConAHref("https://twitter.com/estebanb30"));

    let card3 = new Card("fab fa-git", "GitHub", null);
    dashboardCards.appendChild(card3.crearDivConAHref("https://github.com/estyCai32"));

}

function renderEducacion() {
    cambiarTitulo("Educacion");
    limpiarCartas();

    let card1 = new Card("fas fa-university", "Universidad Nacional De La Matanza", "Tecnicatura en Desarrollo Web <br> 2do Año - 9 de 20 materias. <br> Materias como: Programacion Basica 1 y 2 (Java desde lo mas basico hasta POO), Base De Datos 1 (SQL), Programacion Web 1 y 2 (HTML, CSS, JS, PHP, GIT) y Taller Web 1 (Spring, maven, Hibernate) <a href=" + "images/historiaAcademica.jpeg" + " target='blank'>APROBADAS</a>.");
    dashboardCards.appendChild(card1.crearDivCard());

    let card2 = new Card("fas fa-school", "Instituto Jesus Resucitado", "Bachillerato En Ciencias Sociales - FINALIZADO 2019");
    dashboardCards.appendChild(card2.crearDivCard());



}

function renderProyectos() {
    cambiarTitulo("Proyectos");
    limpiarCartas();


    let txtCard1 = "Proyecto Realizado para la materia Taller Web 1 con Spring, Maven e Hibernate. Practicando conceptos de JUnit y Mockito con la integracion de la API de MercadoPago. <br> La idea es un proyecto de gestion de hospital con 3 diferentes tipos de usuarios (ADMIN, MEDICO Y USUARIO) donde se pueden solicitar turnos y/o ambulancias, calificar medicos, pagar los turnos via MercadoPago, etc";
    let card1 = new Card(null, "Hospital Florencia", txtCard1);
    dashboardCards.appendChild(card1.crearDivConAHref("https://github.com/CristianFer98/TPFinalEquipo3"));

    let txtCard2 = "Proyecto Realizado para la materia Programacion Web 2 con PHP, MySQL, Mustache y framework (hecho por el profe en clase jeje) para aprender el concepto de MVC con php y con la integracion de la API de MercadoPago. <br> Es un proyecto de central de viajes espaciales con 3 diferentes tipos de usuarios (ADMIN, MEDICO Y USUARIO) donde el usuario se realiza un chequeo medico online y puede reservar vuelos a diferentes lugares espaciales a partir de lo deje su revision medica.";
    let card2 = new Card(null, "Gaucho Rocket S.A", txtCard2);
    dashboardCards.appendChild(card2.crearDivConAHref("https://github.com/tomasPalavecino/Act.Nro2"));

    let txtCard3 = "Juego hecho por mi un dia de vacaciones que se corto la luz jaja, es un juego para practicar la precision en los flicks y reacción en los juegos FPS o Shooters";
    let card3 = new Card(null, "Aim Trainer - Juego", txtCard3);
    dashboardCards.appendChild(card3.crearDivConAHref("AimTrainer-V1-main/AimTrainer-V1-main/AimTrainer V1/index.html"));
}


// FUNCIONES GLOBALES

function limpiarCartas() {
    dashboardCards.innerHTML = "";
}

function cambiarTitulo(titulo) {
    dashboardTitle.innerHTML = titulo;
}

class Card {
    constructor(iClassName, h2Content, pContent) {
        this.iClassName = iClassName;
        this.h2Content = h2Content;
        this.pContent = pContent;
    }

    crearDivCard() {
        const divCard = document.createElement("div");
        divCard.className = "card animate__animated animate__backInRight";

        const i = document.createElement("i");
        i.className = `${this.iClassName}`;

        const divInfo = document.createElement("div");
        divInfo.className = "card-info";

        const h2 = document.createElement("h2");
        h2.innerHTML = `${this.h2Content}`;

        const p = document.createElement("p");
        p.innerHTML = `${this.pContent}`;

        divInfo.appendChild(h2);
        divInfo.appendChild(p);

        if (this.iClassName != null) {
            divCard.appendChild(i);
        }

        divCard.appendChild(divInfo);

        return divCard;
    }

    crearDivConAHref(enlace) {
        const divCard = document.createElement("div");
        divCard.className = "card animate__animated animate__backInRight";

        const i = document.createElement("i");
        i.className = `${this.iClassName}`;

        const divInfo = document.createElement("div");
        divInfo.className = "card-info";

        const a = document.createElement("a");
        a.innerHTML = `${this.h2Content}`;
        a.href = `${enlace}`;
        a.target = "BLANK";
        a.style = " color: #658ec6; font-weight: 500; opacity: 0.8; font-size: 1.5rem;text-decoration: none;";

        divInfo.appendChild(a);

        if (this.iClassName != null) {
            divCard.appendChild(i);
        }

        if (this.pContent != null) {
            const p = document.createElement("p");
            p.innerHTML = `${this.pContent}`;

            divInfo.appendChild(p);
        }

        divCard.appendChild(divInfo);

        return divCard;

    }
}


//Descargar CV Button
let botonCv = document.querySelector(".pro");
botonCv.addEventListener("click", mostrarCv => {
    var win = window.open("images/CURRICULUM 7.0.pdf", '_blank');
    win.focus();
});

//carga de pagina

document.body.onload = function() {
    renderSobreMi();
}