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
  var msg = ".  %0a      PRAPANNA NUTRI FOODS  %0a %0a ";
msg = msg + "    Items      Qtn     Price(Rs.) %0a";
if(har != "")
{
  msg = msg + "Hardal       "+ har+  "kg    " +  har*200 + " %0a ";        
}
if(dj != "")
{
  msg = msg + "Dhana Jeeru   "+ dj+  "kg    " +  dj*200 + " %0a ";        
}
if(mar != "")
{
  msg = msg + "Marchu       "+ mar+  "kg    " +  mar*280 + " %0a ";        
}
  
if(kmar != "")
{
  msg = msg + "Kashmiri Marchu "+ kmar+  "kg    " +  kmar*360 + " %0a ";        
}

if(jee != "")
{ 
  msg = msg + "Jeeru       "+ jee+  "kg    " +  jee*220 + " %0a ";        
}

if(gm != "")
{
  msg = msg + "Garam Masala     "+ gm+  "g    " +  gm*0.8 + " %0a ";        
}
if(sm != "")
{
  msg = msg + "Sambhar Masala   "+ sm+  "g    " +  sm*0.6 + " %0a ";        
}
if(pbm != "")
{
  msg = msg + "Pavbhaji Masala  "+ pbm+  "g    " +  pbm*0.6 + " %0a ";        
}
if(cm != "")
{
  msg = msg + "Chat Masala     "+ cm+  "g    " +  cm*0.3 + " %0a ";    
    
}

msg = msg + " %0a Total Amount is                " + total;

msg = msg + " %0a %0a  Happy Life = Healthy Life ";


  //Show results

//   document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

//   document.getElementById("totalInterest").innerHTML = "%" + totalInterest;
console.log(msg)
  document.getElementById("totalPayment").innerHTML = "Rs. " + total;
  
  // document.location = "https://wa.me/+91" + whatsappnumber + "?text="+ msg;
  
  document.location = "https://wa.me/+919825108232?text="+ msg;
  
  
  e.preventDefault();
}