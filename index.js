let doc=document.getElementById("cards");
doc.style.display="none";
document.querySelector("#enterValue").addEventListener('input',(e)=>
{
     doc.style.display="block";
    console.log("something entered succesfully");
    let value=e.target.value;
    document.querySelector("#grams").innerHTML=`Grams: ${value/0.0022046} gms.`;
    document.querySelector("#kgs").innerHTML=`Kg: ${value*0.45359237} kgs.`;
    document.querySelector("#tan").innerHTML=`tonne: ${value*0.00045359237} ts.`;
})
