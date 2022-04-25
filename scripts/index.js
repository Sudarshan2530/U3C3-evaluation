// Store the wallet amount to your local storage with key "amount"

let total = localStorage.getItem("amount") || 0;
document.querySelector("#wallet").innerText=total;
 addBalance = () =>{
    let amountValue= document.querySelector("#amount").value;
    total = Number(total) + Number(amountValue);
    document.querySelector("#wallet").innerText=total;
    localStorage.setItem("amount",total)
}
