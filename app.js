// Listen for submit

document.getElementById("loan-form").addEventListener("submit", computeResults);


function computeResults(e) {
  // UI

  const har = 2//document.getElementById("har").value;
  const dj = 3//document.getElementById("dj").value;
  const mar = 1//document.getElementById("mar").value;
  const kmar = 5//document.getElementById("kmar").value;
  const jee = 3//document.getElementById("jee").value;
  const gm = 50//document.getElementById("gm").value;
  const sm = 100//document.getElementById("sm").value;
  const pbm = 200//document.getElementById("pbm").value;
  const cm = 250//document.getElementById("cm").value;
  const whatsappnumber = document.getElementById("whatsappnumber").value;
 


  //Compute Total Payment

  const total = (har*200 + dj*200 + mar*280 + kmar*360 + jee*220 + gm*0.8 + sm*0.6 + pbm*0.6 + cm*0.3).toFixed(2);
  var msg = " %0a______________________________ %0a      PRAPANNA NUTRI FOODS  %0a ";
  msg = msg + "______________________________ %0a  %0a";
msg = msg + " Items               Qtn    Price(Rs.) %0a";
msg = msg + "----------------------------------------- %0a ";
if(har != "")
{
  msg = msg + "Hardal              "+ har+  "kg    " +  har*200 + " %0a ";        
}
if(dj != "")
{
  msg = msg + "Dhana Jeeru     "+ dj+  "kg    " +  dj*200 + " %0a ";        
}
if(mar != "")
{
  msg = msg + "Marchu             "+ mar+  "kg    " +  mar*280 + " %0a ";        
}
  
if(kmar != "")
{
  msg = msg + "Kashmiri      "+ kmar+  "kg    " +  kmar*360 + " %0a ";        
}

if(jee != "")
{ 
  msg = msg + "Jeeru               "+ jee+  "kg    " +  jee*220 + " %0a ";        
}

if(gm != "")
{
  msg = msg + "Garam M.    "+ gm+  "g    " +  gm*0.8 + " %0a ";        
}
if(sm != "")
{
  msg = msg + "Sambhar M."+ sm+  "g    " +  sm*0.6 + " %0a ";        
}
if(pbm != "")
{
  msg = msg + "Pavbhaji M."+ pbm+  "g    " +  pbm*0.6 + " %0a ";        
}
if(cm != "")
{
  msg = msg + "Chat M.   "+ cm+  "g    " +  cm*0.3 + " %0a ";    
    
}
msg = msg + "----------------------------------------- %0a ";
msg = msg + " %0a Total Amount =  Rs. " + total;
msg = msg + "----------------------------------------- %0a ";
msg = msg + " %0a %0a  Happy Life = Healthy Life ";


  //Show results

//   document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

//   document.getElementById("totalInterest").innerHTML = "%" + totalInterest;
console.log(msg)
  document.getElementById("totalPayment").innerHTML = "Rs. " + total;
  
  // document.location = "https://wa.me/+91" + whatsappnumber + "?text="+ msg;
  
  document.location = "https://wa.me/+919825127105?text="+ msg;
  
  
  e.preventDefault();
}