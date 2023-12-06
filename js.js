let btns = document.querySelectorAll("#seat");
const buyBtn = document.querySelector(".buy");
const resetBtn = document.querySelector(".reset");
let toBuy = [];
let VIPtickets = [];
let tickets = [];
let VIPbuy = [];
let buy = [];

document.addEventListener("keypress", eventKey);

function eventKey(event) {
    console.log(event.code);
    if (event.code == "KeyB") {
        console.log(buyTicket());
        updateCost();
    } else if (event.code == "KeyR") {
        buy = [];
        VIPbuy = [];
        toBuy =[];
        btns.forEach(button => {
            button.style.border = "solid 2px #979797";
            button.style.color = "black";
        });
        console.log(event.code);
    }
}

resetBtn.addEventListener("click", () => {
    // Zresetuj wszystkie tablice i zresetuj styl przycisków do domyślnego stanu
    toBuy = [];
    VIPbuy = [];
    buy = [];
    btns.forEach(button => {
        button.style.border = "solid 2px #979797";
        button.style.color = "black";
    });
 // Zaktualizuj koszt na 0 po resecie
    console.log("Zresetowano wybór miejsc i koszt biletów.");
});

if (buyBtn) {
    buyBtn.addEventListener("click", () => {
        console.log(buyTicket());
        updateCost();
    });
} else {
    console.log("Przycisk 'Kup' nie został znaleziony.");
}

function updateCost() {
    let VIPprice = 25;
    let ticketPrice = 15;

    for (let i = 0; i < toBuy.length; i++) {
        if (VIPtickets.includes(toBuy[i])) {
            VIPbuy.push(toBuy[i]);
        }
        if (tickets.includes(toBuy[i])) {
            buy.push(toBuy[i]);
        }
    }

    let result = (VIPprice * VIPbuy.length) + (ticketPrice * buy.length);
    window.alert("Koszt biletów to " + result + " PLN");
    VIPbuy = [];
    buy = [];
}

function statGenerator() {
    for (let i = 0; i < btns.length; i++) {
        let rnd = Math.random() * 3;
        if (btns[i].id == "reset" || btns[i].id == "buy") {
            tickets.pop(btns[i]);
            VIPtickets.pop(btns[i]);
            btns[i].style.backgroundColor="white";
        }
        if (rnd < 1) {
            btns[i].style.backgroundColor = "red";
        } else if (rnd < 2) {
            tickets.push(btns[i]);
        } else {
            VIPtickets.push(btns[i]);
            btns[i].style.backgroundColor = "gold";
        }
    }
}

function buyTicket() {
    VIPprice = 25;
    ticketPrice = 15;

    for (let i = 0; i < toBuy.length; i++) {
        if (VIPtickets.includes(toBuy[i])) {
            VIPbuy.push(toBuy[i]);
            for (let j = 0; j < toBuy.length; j++) {
                toBuy[j].style.backgroundColor = "red";
                toBuy[j].style.border = "2px solid #979797";
            }
        }
        if (tickets.includes(toBuy[i])) {
            buy.push(toBuy[i]);
            for (let j = 0; j < toBuy.length; j++) {
                toBuy[j].style.backgroundColor = "red";
                toBuy[j].style.border = "2px solid #979797";
            }
        }
    }
    toBuy=[];

    let result = (VIPprice * VIPbuy.length) + (ticketPrice * buy.length);
    console.log(result);
}

statGenerator();

btns.forEach(button => {
    button.addEventListener("click", () => {
        if (button.style.backgroundColor == "red") {
            window.alert("This seat is Unavailable! Please select a different seat.")
            button.style.border = "solid 2px #979797";
            button.style.color = "black";
        } else if (button.style.borderColor == "blue") {
            button.style.border = "solid 2px #979797";
            button.style.color = "#000000";
        } else {
            button.style.border = "solid 3px blue";
            button.style.color = "blue";
            toBuy.push(button);
        }
    });
});