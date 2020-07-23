let doc=document.getElementById("cards");
doc.style.display="none";
document.getElementById("enterValue").addEventListener('input',(e)=>
{
     doc.style.display="block";
    console.log("something entered succesfully");
    let value=e.target.value;
    document.getElementById("grams").innerHTML=`Grams: ${value/0.0022046} gms.`;
    document.getElementById("kgs").innerHTML=`Kg: ${value*0.45359237} kgs.`;
    document.getElementById("tan").innerHTML=`tonne: ${value*0.00045359237} ts.`;
})
