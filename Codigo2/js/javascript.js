var estudiantes = [
  {codigo:"201811",nombre:"Maria",nota: 40},
  {codigo:"201811",nombre:"Pedro",nota: 20},
  {codigo:"201811",nombre:"Andres",nota: 65},
  {codigo:"201811",nombre:"Ana",nota:50}
];

window.onload = cargarEventos;

function cargarEventos(){
estudiantesJSON();
document.getElementById("BtnRegistrar").addEventListener("click",crearRegistro);
document.getElementById("BtnPromedio").addEventListener("click", mostrarPromedio);
document.getElementById("BtnNmayor").addEventListener("click", mostrarNmayor);
document.getElementById("BtnNmenor").addEventListener("click",mostrarNmenor);
}

function estudiantesJSON() {
  document.getElementById("cod").value = " ";
  document.getElementById("nom").value = " ";
  document.getElementById("not").value = " ";

  var tabla = document.getElementById("Estudiantes");
  var datosJSON = "";
  for(var i=0 ;i < estudiantes.length; i++)
  {
    datosJSON += "<tr><td>"+estudiantes[i].codigo+"</td><td>"+estudiantes[i].nombre+"</td><td>"+estudiantes[i].nota+"</td></tr>"+"<br>";
  }
  tabla.innerHTML = datosJSON;
  }

function crearRegistro() {
  event.preventDefault();
  var nuevocodigo = document.getElementById("cod").value;
  var nuevonombre = document.getElementById("nom").value;
  var nuevonota = document.getElementById("not").value;

  if(nuevocodigo == " " && nuevonombre == " " && nuevonota == " ")
  {
    alert("Completa el formulario.");
  } else {
    var nuevoalumno = {codigo: nuevocodigo, nombre: nuevonombre, nota: nuevonota};
    estudiantes.push(nuevoalumno);
  }

  var tabla = document.getElementById("Estudiantes");
  var datosJSON = "";
  for(var i=0 ;i < estudiantes.length; i++){
    datosJSON += "<tr><td>"+estudiantes[i].codigo+"</td><td>"+estudiantes[i].nombre+"</td><td>"+estudiantes[i].nota+"</td></tr>"+"<br>";
  }
  tabla.innerHTML = datosJSON;

  document.getElementById("cod").value = " ";
  document.getElementById("nom").value = " ";
  document.getElementById("not").value = " ";
}


function mostrarPromedio() {
    event.preventDefault();
    var sum = 0,prom;
    var datos= "";
  	for(var i=0;i<estudiantes.length;i++)
  	{
  		datos= parseInt(estudiantes[i].nota);
  		sum = parseInt(sum + datos);
  	}
    var total = sum;
    var prom = total/estudiantes.length;
    alert("El promedio de notas de los estudiantes es de: "+ prom +" puntos.");
}

function mostrarNmayor() {
    event.preventDefault();
    var nota = 0;
    var nombre= "";
    var datos= "";
  	for(var i=0;i<estudiantes.length;i++)
  	{
  			datos = parseInt(estudiantes[i].nota);
  			if( datos > nota)
        {
  				nota = datos;
  				nombre = estudiantes[i].nombre;
  			}
  	}
    alert("El nombre del estudiante es: "+nombre+", con la nota mayor de: "+nota+" puntos.")
}

function mostrarNmenor() {
    event.preventDefault();
    var nombre= "";
    var datos= "";
  	for(var i=0;i<estudiantes.length;i++)
  	{
  			if  (estudiantes[0].nota > estudiantes[i].nota)
  			{
  			datos = parseInt(estudiantes[i].nota);
  			nombre = estudiantes[i].nombre;
  			}
        else{
          datos = parseInt(estudiantes[0].nota);
          nombre = estudiantes[0].nombre;
        }
  	}
   alert("El nombre del estudiante es: "+ nombre +", con la nota menor de: "+datos+" puntos.")
}
