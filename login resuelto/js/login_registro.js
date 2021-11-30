var usu=document.getElementById("Usu");

var contra=document.getElementById("Con");

var button=document.getElementById("Sub")

//Creamos el Evento//

button.addEventListener('click',()=>{

   if (usu.value=="HOLLYWOW" && contra.value=="cibertec2021") {
    alert("Bienvenido")
     location.href = "C:/Users/user/Downloads/pagina%20web/Inicio.html"
   } else {
       alert("Vuelve a Intentarlo");
   }
   
});
