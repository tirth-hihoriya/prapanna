// Listen for submit

document.getElementById("loan-form").addEventListener("submit", computeResults);


function computeResults(e) {
  // UI

  const har = document.getElementById("har").value;
  const dj = document.getElementById("dj").value;
  const mar = document.getElementById("mar").value;
  const kmar = document.getElementById("kmar").value;
  const jee = document.getElementById("jee").value;
  const gm = document.getElementById("gm").value;
  const sm = document.getElementById("sm").value;
  const pbm = document.getElementById("pbm").value;
  const cm = document.getElementById("cm").value;
  const whatsappnumber = document.getElementById("whatsappnumber").value;
 


  //Compute Total Payment

  const total = (har*200 + dj*200 + mar*280 + kmar*360 + jee*220 + gm*0.8 + sm*0.6 + pbm*0.6 + cm*0.3).toFixed(2);
  var msg = "PRAPANNA NUTRI FOODS  %0a %0a ";
msg = msg + "Items      Qtn   Price %0a";
if(har != "")
{
  msg = msg + "Hardal(200/kg)   "+ har+  "kg    " +  har*200;        
}
if(dj != "")
{
  msg = msg + "DhanaJeeru(200/kg)   "+ gj+  "kg    " +  dj*200;        
}
if(mar != "")
{
  msg = msg + "Marchu(280/kg)   "+ mar+  "kg    " +  mar*280;        
}
  
  //Show results

//   document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

//   document.getElementById("totalInterest").innerHTML = "%" + totalInterest;
console.log(msg)
  document.getElementById("totalPayment").innerHTML = "Rs. " + total;
  
  document.location = "https://wa.me/+91" + whatsappnumber + "?text="+ msg;
  
  
  e.preventDefault();
}