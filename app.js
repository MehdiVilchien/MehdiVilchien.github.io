
const app = {

    init: function() {

        const body = document.querySelector("body");
        const pencil = document.querySelector(".pencil");

        // Ecouteur d'évenement de déplacement de la souris
        body.addEventListener("mousemove", app.handleMouseMove);

        // Ecouteur d'évenement au click sur le crayon
        pencil.addEventListener('click', app.handleClickPencil);

    },

    handleMouseMove: function (event){

        const body = document.querySelector("body");
        const picture = document.querySelector(".picture_profil");

        let xAxis = (window.innerWidth / 2 - event.pageX) / 30;
        let yAxis = (window.innerHeight / 2 - event.pageY) / 30;
        picture.style.transform = `rotateY(`+ xAxis + `deg) rotateX(`+ yAxis + `deg)`;

    },

    handleClickPencil: function (){
        document.body.style.cursor  = " url(./img/pencil.svg), pointer";
    }
}

document.addEventListener('DOMContentLoaded', app.init);