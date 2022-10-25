const billamount = document.querySelector("#bill-amount");
const cashgiven = document.querySelector("#cash-given");
const checkbutton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const notes = [2000, 500, 100, 50, 20, 10, 5, 1];

checkbutton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (Number(billamount.value) > 0)
   {
    if (Number(cashgiven.value) >= Number(billamount.value)) 
    {
      
      const amt= Number(cashgiven.value) - Number(billamount.value); 
      showChange(amt);
    } 
     else
     {
      showMessage("Give me more cash");
    }
    }
   else {
    showMessage("Bill amount cant be less then 0");
  }
});

function showChange(amt) {
  
  for (let i = 0; i < notes.length; i++)
  {
    const rem = Math.trunc(amt / notes[i]);
    
    amt = amt % notes[i];
    noOfNotes[i].innerText = rem;
  }
}



function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
function hideMessage() {
  message.style.display = "none";
}