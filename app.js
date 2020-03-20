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
 

//   // Calculate

//   const principal = parseFloat(UIamount);
//   const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
//   const calculatedPayments = parseFloat(UIyears) * 12;

//   //Compute monthly Payment

//   const x = Math.pow(1 + CalculateInterest, calculatedPayments);
//   const monthly = (principal * x * CalculateInterest) / (x - 1);
//   const monthlyPayment = monthly.toFixed(2);

//   //Compute Interest

//   const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

  const total = (har*200 + dj*200 + mar*280 + kmar*360 + jee*220 + gm*0.8 + sm*0.6 + pbm*0.6 + cm*0.3).toFixed(2);

  //Show results

//   document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

//   document.getElementById("totalInterest").innerHTML = "%" + totalInterest;

  document.getElementById("totalPayment").innerHTML = "Rs. " + total;

  e.preventDefault();
}