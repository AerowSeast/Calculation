let display = document.querySelector("#display");
let buttons = Array.from(document.querySelectorAll("table tr td"));
buttons.forEach(item => { 
    item.addEventListener("click", e => { 
        if (item.innerText == "C") {
            display.innerText = "";
        } else if (item.innerText == "=") {
            display.innerText = eval(display.innerText);
            if (eval(display.innerText) == undefined) { 
                display.innerText = "";
                alert("請重新輸入正確的數值");
            }
         }
         else { 
            display.innerText += item.innerText;
        }
    })
})



