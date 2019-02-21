var objestudiantes ='{"estudiantes":['+
	'{"codigo":"201811","nombre":"Maria","nota":"70"},'+
	'{"codigo":"201711","nombre":"Pedro","nota":"50"},'+
	'{"codigo":"201611","nombre":"Andres","nota":"65"},'+
	'{"codigo":"201511","nombre":"Ana","nota":"85"},'+
	'{"codigo":"201411","nombre":"Luis","nota":"77"},'+
	'{"codigo":"201311","nombre":"Laura","nota":"82"},'+
	'{"codigo":"201211","nombre":"Gustavo","nota":"55"},'+
	'{"codigo":"201111","nombre":"Gabriela","nota":"99"},'+
	'{"codigo":"201011","nombre":"Samuel","nota":"36"},'+
	'{"codigo":"200911","nombre":"Valeria","nota":"87"}'+']}';

var resultado = JSON.parse(objestudiantes);
var datos = "";
var sp = "&nbsp";
var i;

function Mostrar(json)
{
		datos = "Codigo"+sp+"|"+" Nombre"+sp+"|"+" Nota"+"<br>";
		for(i=0; i<json.estudiantes.length;i++)
		{
			datos+=json.estudiantes[i].codigo+" | "+json.estudiantes[i].nombre+" | "+json.estudiantes[i].nota+"<br>";
		}
document.getElementById("Resultado").innerHTML = datos;
}

function Promedio(json)
{
	var sum = 0;
	var prom;
	for(i=0;i<json.estudiantes.length;i++)
	{
		datos= parseInt(json.estudiantes[i].nota);
		sum = sum + datos;
	}
	var prom = sum/10;
	document.getElementById("Resultado").innerHTML = "El promedio de notas es de: "+"<br>"+prom+" puntos.";
}

function NumMayor(json)
{
	var nota = 0;
	var nombre;
	for(i=0;i<json.estudiantes.length;i++)
	{
			datos = parseInt(json.estudiantes[i].nota);
			if( datos > nota)
			{
				nota = datos;
				nombre = json.estudiantes[i].nombre;
			}
	}
	document.getElementById("Resultado").innerHTML = "Estudiante: "+nombre+"<br>"+"Nota Mayor: "+nota+" puntos.";
}

function NumMenor(json)
{
	var nombre;
	for(i=0;i<json.estudiantes.length;i++)
	{
			if (json.estudiantes[0].nota > json.estudiantes[i].nota)
			{
			datos = parseInt(json.estudiantes[i].nota);
			nombre = json.estudiantes[i].nombre
			}
	}
	document.getElementById("Resultado").innerHTML = "Estudiante: "+nombre+"<br>"+"Nota Menor: "+datos+" puntos.";
}
