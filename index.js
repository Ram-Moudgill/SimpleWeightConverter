let doc=document.getElementById("cards");
doc.style.display="none";
document.queryselector("#enterValue").addEventListener('input',(e)=>
{
     doc.style.display="block";
    console.log("something entered succesfully");
    let value=e.target.value;
    document.queryselector("#grams").innerHTML=`Grams: ${value/0.0022046} gms.`;
    document.queryselector("#kgs").innerHTML=`Kg: ${value*0.45359237} kgs.`;
    document.queryselector("#tan").innerHTML=`tonne: ${value*0.00045359237} ts.`;
})
