


document.querySelector('input[name="txtcelular"]').addEventListener("keypress",function(event)
{
    var longitud=document.querySelector('input[name="txtcelular"]').value.length;
   if(longitud>= 9)
{
    window.event.preventDefault();
    return;
}


    var ascii=event.keyCode || event.wich;
    if(ascii<48 || ascii >57 )

    {
        window.event.preventDefault();
        return; 
    }

});
document.querySelector('input[name="txtUSU"]').addEventListener("keypress",function(event)
{

    var ascii=event.keyCode || event.wich;
    if((ascii>=48 && ascii <= 57 ) || (ascii==46)  ) 
     {
        window.event.preventDefault();
        return;
    }
 });
 function nuevo(frm)
{
    let test= /^\s*$/;
    if(test.test(frm.txtUSU.value))
    {
        window.event.preventDefault();
        alert("Ingrese el nombre")
        return;
    }
    test=/^([a-zA-Z0-9-_])+[@]([a-z])+[.][a-z]{2,3}$/;
    if(!test.test(frm.txtcorreoelec.value))
    {
        window.event.preventDefault();
        alert("Formato de email incorrecto");
        return;
    }
    test=/^\d{9}$/;
    if(!test.test(frm.txtcelular.value))
    {
        window.event.preventDefault();
        alert("Ingresar numero de celular");
        return;
    }
    alert("Datos completos")
}
 


 