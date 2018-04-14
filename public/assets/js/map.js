 window.onload = function () {
//Declaracion de variables

var depMeta = document.getElementById("depMeta");
var acacias = document.getElementById("acacias");
var barrancadeUpia = document.getElementById("barrancadeUpia");
var cabuyaro = document.getElementById("cabuyaro");
var castillaLanueva = document.getElementById("castillaLanueva");
var cubarral = document.getElementById("cubarral");
var cumaral = document.getElementById("cumaral");
var elCalvario = document.getElementById("elCalvario");
var elDorado = document.getElementById("elDorado");
var elCastillo = document.getElementById("elCastillo");
var fuentedeOro = document.getElementById("fuentedeOro");
var granada = document.getElementById("granada");
var guamal = document.getElementById("guamal");
var laMacarena = document.getElementById("laMacarena");
var laUribe = document.getElementById("laUribe");
var lejanias = document.getElementById("lejanias");
var mapiripan = document.getElementById("mapiripan");
var mesetas = document.getElementById("mesetas");
var ptoConcordia = document.getElementById("ptoConcordia");
var ptoGaitan = document.getElementById("ptoGaitan");
var ptoLleras = document.getElementById("ptoLleras");
var ptoLopez = document.getElementById("ptoLopez");
var ptoRico = document.getElementById("ptoRico");
var restrepo = document.getElementById("restrepo");
var sancalosdeGuaroa = document.getElementById("sancalosdeGuaroa");
var sanjuandeArama = document.getElementById("sanjuandeArama");
var sanJuanito = document.getElementById("sanJuanito");
var sanMartin = document.getElementById("sanMartin");
var vistaHermosa = document.getElementById("vistaHermosa");

var villavicencio = document.getElementById("villavicencio");


  
//Eventos al click
/*depMeta.onclick = function(){ 
	//alert("haz hecho click en el depmeta");	
	$("#myModal").show();
	$.ajax({
			type: "POST",
			url: "infometa.html",
			success: function(a) {
	  
	       $('#carga').html(a);

	      }
      });
	}*/
  acacias.onclick = function(){ 
  //alert("haz hecho click en  acacias"); 
  $("#myModal").show();
  //contenido
  $.ajax({
      type: "GET",
      url: "/grupos",
     success: function(a) {
  
       $('.contenido').html(a);

      }
    });
  }
 barrancadeUpia.onclick = function(){ 
  //alert("haz hecho click en barranca de upia"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "map/listcity/infobarranca.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  } 
  cabuyaro.onclick = function(){ 
  //alert("haz hecho click en cabuyaro"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "map/listcity/infocabuyaro.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
laMacarena.onclick = function(){ 
	//alert("haz hecho click en la macarena"); 
	$("#myModal").show();
	$.ajax({
		type: "POST",
		url: "infomacarena.html",
		success: function(a) {        
		$('#carga').html(a);
		}
      });
	}
laUribe.onclick = function(){ 
	//alert("haz hecho click en la uribe"); 
	$("#myModal").show();
	$.ajax({
              type: "POST",
              url: "infouribe.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
	}
mesetas.onclick = function(){ 
	//alert("haz hecho click en mesetas"); 
	$("#myModal").show();
	$.ajax({
              type: "POST",
              url: "infomesetas.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
	}
vistaHermosa.onclick = function(){ 
	//alert("haz hecho click en vistahermosa"); 
	$("#myModal").show();
	$.ajax({
              type: "POST",
              url: "infovistahermosa.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
	}	
elDorado.onclick = function(){ 
	//alert("haz hecho click en el el dorado"); 
	$("#myModal").show();
	$.ajax({
              type: "POST",
              url: "infodorado.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
	}
cubarral.onclick = function(){ 
	//alert("haz hecho click en cubarral"); 
	$("#myModal").show();
	$.ajax({
              type: "POST",
              url: "infocubarral.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
	}
  

cumaral.onclick = function(){ 
  //alert("haz hecho click en cumaral"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infocumaral.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
restrepo.onclick = function(){ 
  //alert("haz hecho click en restrepo"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "inforestrepo.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }

sanJuanito.onclick = function(){ 
	//alert("haz hecho click en san juanito"); 
	$("#myModal").show();
	$.ajax({
              type: "POST",
              url: "infosanjuanito.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
	}
elCalvario.onclick = function(){ 
  //alert("haz hecho click en el calvario"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infocalvario.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }

castillaLanueva.onclick = function(){ 
  //alert("haz hecho click en castilla la nueva"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infocastilla.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }

sancalosdeGuaroa.onclick = function(){ 
  //alert("haz hecho click en san carlos de guaroa"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infosancarlos.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
mapiripan.onclick = function(){ 
  //alert("haz hecho click en mapiripan"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infomapiripan.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
ptoConcordia.onclick = function(){ 
  //alert("haz hecho click en puerto concordia"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infoconcordia.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
ptoRico.onclick = function(){ 
  //alert("haz hecho click en puerto rico"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infopuertorico.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
}
fuentedeOro.onclick = function(){ 
  //alert("haz hecho click en fuente de oro"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infofuenteoro.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
granada.onclick = function(){ 
  //alert("haz hecho click en granada"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infogranada.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
ptoLleras.onclick = function(){ 
  //alert("haz hecho click en ptolleras"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infoplleras.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
elCastillo.onclick = function(){ 
  //alert("haz hecho click en el castillo"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infocastillo.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
sanMartin.onclick = function(){ 
  //alert("haz hecho click en san martin"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "infosmartin.html",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }  

  //
/*ptoGaitan.onclick = function(){ 
  //alert("haz hecho click en puerto gaitan");
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "",
             success: function(a) {
          
               $('#carga').html(a);

              }
      }); 
  }
ptoLopez.onclick = function(){ 
  //alert("haz hecho click en puerto lopez"); 
  $("#myModal").show();
  $.ajax({
              type: "",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  } 
villavicencio.onclick = function(){ 
  //alert("haz hecho click en villavicencio"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
guamal.onclick = function(){ 
  //alert("haz hecho click en guamal"); 
  $("#myModal").show();
  $.ajax({
              type: "POST",
              url: "",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
  }
lejanias.onclick = function(){ 
	//alert("haz hecho click en lejanias"); 
	$("#myModal").show();
	$.ajax({
              type: "POST",
              url: "",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
	}
sanjuandeArama.onclick = function(){ 
	//alert("haz hecho click en san juan de arama"); 
	$("#myModal").show();
	$.ajax({
              type: "POST",
              url: "",
             success: function(a) {
          
               $('#carga').html(a);

              }
      });
	}
*/









//Hover
//$('#depMeta').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#laMacarena').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#laUribe').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#mesetas').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#vistaHermosa').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#elDorado').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#cubarral').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#guamal').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#castillaLanueva').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#acacias').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#sancalosdeGuaroa').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#villavicencio').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#elCalvario').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#sanJuanito').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#restrepo').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#cumaral').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#lejanias').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#elCastillo').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#granada').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#sanjuandeArama').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#fuentedeOro').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#ptoLleras').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#sanMartin').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#ptoRico').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#ptoConcordia').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#mapiripan').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#barrancadeUpia').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#cabuyaro').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#ptoGaitan').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});
$('#ptoLopez').hover( function () {$(this).addClass('hvr-bob'); }, function () { $(this).removeClass('hvr-bob');});



}