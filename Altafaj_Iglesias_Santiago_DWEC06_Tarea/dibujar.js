window.onload = () => {
  let textoPincel = "";
  let micolor;
  let micolorDividio;
/*selecionamos las casillas de los colores y les añadimos un lanzador de eventos*/
  let casillaColor = document.querySelectorAll("td");
  casillaColor.forEach((color, index) => {
    color.addEventListener("click", PintarA);
/*seleccionamos la clase con el color y añadimos un lanzador de eventos, como el primer color tiene
dos clase utilizamos el método split para seleccinar la primera que contiene el estilo color*/ 
    function PintarA() {
      micolor = color.getAttribute("class");
      micolorDividio = micolor.split(" ");
      micolor = micolorDividio[0];
      const pintar = document.querySelectorAll(".pintar");
/*a cada casilla le pasamos un lanzador de eventos ,las casillas tienen la clase pintar porque se la 
añadi yo al crear el tablero*/
      pintar.forEach((casillaColoreada, index) => {
        casillaColoreada.addEventListener("click", Pintarb);
      });
/*el textopincel guarda el contenido debajo de las casillas de los colores y 
despues se añade según la circunstacia*/
      textoPincel =
        "Haga CLICK encualquier celda para activar/desactivar el Pincel";
      const zonadibujo = document.getElementsByTagName("p");
      zonadibujo[1].innerHTML = textoPincel;
    }
  });
/*esta función añade un listener para capturar el raton en el tablero y otro listener para eliminarlo al hacer click*/
  function Pintarb() {
    let pintar = document.querySelectorAll(".pintar");
    pintar.forEach((casillaColoreada, index) => {
      casillaColoreada.addEventListener("click", borrarEvent);
      casillaColoreada.addEventListener("mouseover", Pintarc);
    });
    textoPincel = "PINCEL ACTIVADO";
    const zonadibujo = document.getElementsByTagName("p");
    zonadibujo[1].innerHTML = textoPincel;
  }
/*esta función primero comprueba que la casilla tenga menos de dos clases;
 despues al pasar el ratón sobre las casillas,añade la clase con el color referido anteriormente;
  posteriormente se cambia ,en el segundo pase, el color anterior por el nuevo que hemos recogido en el listener*/
  function Pintarc() {
    if (this.classList.length > 2) {
      let ultimaClase = this.classList.item(this.classList.length - 1);
      this.classList.replace(ultimaClase, micolor);
    } else {
      this.classList.add(micolor);
    }
  }
/*Esta función elimina el evento de mover el ratón y a la vez elimina el evento de Clickar el ratón que borra el evento anterior*/
  function borrarEvent() {
    let pintar = document.querySelectorAll(".pintar");
    pintar.forEach((casillaColoreada, index) => {
      casillaColoreada.removeEventListener("mouseover", Pintarc);
      casillaColoreada.removeEventListener("click", borrarEvent);
    });

    textoPincel = "PINCEL DESACTIVADO";
    const zonadibujo = document.getElementsByTagName("p");
    zonadibujo[1].innerHTML = textoPincel;
  }
/*En esta parte del programa creamos el tablero y con un bucle añadimos las 30 casillas y las 30 filas
 le añadimos la Clase con la que después vamos a referirnos a las casillas Y lo añadimos todo al body*/
  const tablerodibujo = document.createElement("table");

  for (let index = 1; index <= 30; index++) {
    let filas = document.createElement("tr");
    filas.setAttribute("class", "tablerodibujo");
    for (let index = 1; index <= 30; index++) {
      let celdas = document.createElement("td");

      filas.appendChild(celdas);
      celdas.classList.add("tablerodibujo", "pintar");
    }
    tablerodibujo.appendChild(filas);

    tablerodibujo.setAttribute("class", "tablerodibujo");
    const zonadibujo = document.getElementById("zonadibujo");
    zonadibujo.appendChild(tablerodibujo);
  }
};
