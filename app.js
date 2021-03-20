// Listen for submit

document.getElementById("loan-form").addEventListener("submit", computeResults);


function computeResults(e) {
  // UI

  const har = document.getElementById("har").value;
  const dj = document.getElementById("dj").value;
  const mar = document.getElementById("mar").value;
  const kmar = document.getElementById("kmar").value;
  const jee = document.getElementById("jee").value;
  const mus = document.getElementById("mus").value;
  const meth = document.getElementById("meth").value;
  const ajm = document.getElementById("ajm").value;
  const suth = document.getElementById("suth").value;
  const gm = document.getElementById("gm").value;
  const sm = document.getElementById("sm").value;
  const pbm = document.getElementById("pbm").value;
  const cm = document.getElementById("cm").value;
  const ppm = document.getElementById("ppm").value;
  const dm = document.getElementById("dm").value;
  const dc = document.getElementById("dc").value;
  const dtd = document.getElementById("dtd").value;
  const baj = document.getElementById("baj").value;
  const ric = document.getElementById("ric").value;
  const kric = document.getElementById("kric").value;
  const jag = document.getElementById("jag").value;
  const go = document.getElementById("go").value;
  const whatsappnumber = document.getElementById("whatsappnumber").value;
 


  //Compute Total Payment

  const total = (har*220 + dj*220 + mar*280 + kmar*500 + jee*220 + mus*80 + meth*90 + ajm*250 +suth*600 + gm*0.85 + sm*0.65 + pbm*0.7 + cm*0.5 + Math.round(ppm*0.333333) + dm*110 + dc*65 + dtd*120 + baj*40 + ric*33 + kric*120 + jag*60 + go*2430).toFixed(0);
  var msg = " %0a___________________________ %0a PRAPANNA NUTRI FOODS  %0a ";
  msg = msg + "___________________________ %0a  %0a";
msg = msg + " Items                               Qtn    Price %0a";
msg = msg + "-------------------------------------------- %0a ";
if(har != "")
{
  msg = msg + "Hardal                             "+ har+  "kg      " +  har*220 + " %0a ";        
}
if(dj != "")
{
  msg = msg + "Dhana Jeeru                    "+ dj+  "kg      " +  dj*220 + " %0a ";        
}
if(mar != "")
{
  msg = msg + "Marchu                            "+ mar+  "kg      " +  mar*280 + " %0a ";        
}
  
if(kmar != "")
{
  msg = msg + "Kashmiri                          "+ kmar+  "kg      " +  kmar*500 + " %0a ";        
}

if(jee != "")
{  
  msg = msg + "Jeeru                                "+ jee+  "kg      " +  jee*220 + " %0a ";        
}

if(mus != "")
{ 
  msg = msg + "Mustard(rai)                     "+ mus+  "kg      " +  mus*80 + " %0a ";        
}

if(meth != "")
{ 
  msg = msg + "Methi                               "+ meth+  "kg      " +  meth*90 + " %0a ";        
}

if(ajm != "")
{ 
  msg = msg + "Ajmo                                "+ ajm+  "kg      " +  ajm*250 + " %0a ";        
}

if(suth != "")
{ 
  msg = msg + "Ginger Powder(suth)       "+ suth+  "kg      " +  suth*600 + " %0a ";        
}


if(gm != "")
{
  msg = msg + "Garam M.                        "+ gm+  "g    " +  gm*0.85 + " %0a ";        
}
if(sm != "")
{
  msg = msg + "Sambhar M.                    "+ sm+  "g    " +  sm*0.65 + " %0a ";        
}
if(pbm != "")
{
  msg = msg + "Pavbhaji M.                     "+ pbm+  "g    " +  pbm*0.7 + " %0a ";        
}
if(cm != "")
{
  msg = msg + "Chat M.                           "+ cm+  "g    " +  cm*0.5 + " %0a ";    
    
}

if(ppm != "")
{ 
  msg = msg + "Pani-Puri M.                    "+ ppm+  "g    " +  ppm*.333333 + " %0a ";        
}

if(dm != "")
{ 
  msg = msg + "Desi Moong                    "+ dm+  "kg      " +  dm*110 + " %0a ";        
}

if(dc != "")
{ 
  msg = msg + "Desi Channa                    "+ dc+  "kg      " +  dc*65 + " %0a ";        
}

if(dtd != "")
{ 
  msg = msg + "Desi Toor Dal                   "+ dtd+  "kg      " +  dtd*120 + " %0a ";        
}

if(baj != "")
{ 
  msg = msg + "Bajri                                 "+ baj+  "kg      " +  baj*40 + " %0a ";        
}

if(ric != "")
{ 
  msg = msg + "Rice                                 "+ ric+  "kg      " +  ric*33 + " %0a ";        
}

if(kric != "")
{ 
  msg = msg + "Krishna Kmod Rice          "+ kric+  "kg      " +  kric*120 + " %0a ";        
}

if(jag != "")
{ 
  msg = msg + "Jagerry(gol)                     "+ jag+  "kg      " +  jag*60 + " %0a ";        
}

if(go != "")
{ 
  msg = msg + "Groundnut Oil                 "+ go+  "kg      " +  go*2430 + " %0a ";        
}




msg = msg + "------------------------------------------- %0a ";
msg = msg + " %0a Total Amount =   Rs  " + total;
msg = msg + " %0a ------------------------------------------- %0a ";
msg = msg + " %0a %0a  Healthy Life = Happy Life ";
// msg = "``` " + msg + " ```";


  //Show results

//   document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

//   document.getElementById("totalInterest").innerHTML = "%" + totalInterest;
console.log(msg)
  document.getElementById("totalPayment").innerHTML = "Rs. " + total;
  
  document.location = "https://wa.me/+91" + whatsappnumber + "?text="+ msg;
  
  // document.location = "https://wa.me/+919825127105?text="+ msg;
  
  
  e.preventDefault();
}
