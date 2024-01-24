const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn");
const resetbtn = document.getElementById("resetbtn");
const displayvalue = document.getElementById("displayvalue");

decrementbtn.addEventListener("click",() => {
    const value = Number(displayvalue.innerText);
    if (value > 0) {
        displayvalue.innerText = value - 1;
    
    }else{
        alert("no negetive value");
    }
});
incrementbtn.addEventListener("click",() =>{
    const value = Number(displayvalue.innerText);
    if (value >= 100){

        alert("100+ values are not allowed");
      } else{displayvalue.innerText = value +1;
        }
    

});
resetbtn.addEventListener("click",() =>{
    displayvalue.innerText = 0;
});