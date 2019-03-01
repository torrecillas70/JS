function angulo()
{//Funcion solicitado en JavaScript
  var hora = document.getElementById("h").value;
  var min = document.getElementById("m").value;
  var angulo = 0;
  //Calculando el angulo y validando datos ingresados
  if(hora < 13)
  {
    if(min < 60)
    {
      if(hora < min)
      { angulo = ((11*min)/2) - (30*hora); }
      if( hora == '12')
      { angulo = (11*min)/2; }
      if( hora > min)
      { angulo = (30*hora) - ((11*min)/2); }
      alert("A las "+hora+":"+min+" el angulo es: "+angulo+"°");
    } else
    { alert("Minutos no valido"); }
  } else
  { alert("Hora no valida"); }
}
