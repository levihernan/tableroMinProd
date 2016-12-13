function flechitas(){

$('.number4').each(function(){
  console.log($(this).innerHTML);
  if (parseFloat($(this)[0].innerHTML)<0){
    $(this).addClass('downValue');
  } else if (parseFloat($(this)[0].innerHTML)>0){
    $(this).addClass('upValue');
  }
 });

/* AÑADIR PROTEGIDOS: Sector Monetario y Fiscal */
/* AÑADIR INVERSOS: Costos y Desempleo */

}
