const input = document.getElementById("display")
const submit = document.getElementById("button")
const button = document.querySelectorAll("button")
let temp = "0"
let first = []
let operator = []

document.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.className === "numbers" || e.target.className === "operator" || e.target.id === "button") {
        input.value += e.target.innerHTML;
        if (e.target.className === "numbers") {
            temp += e.target.innerHTML
        }
        else if (e.target.className === "operator") {
            
            temp = parseInt(temp)
            if (isNaN(temp) || temp === undefined || temp === "") {
                // first.pop();
                input.value=input.value.slice(0,-1)
                temp = "";
            } else {
                operator.push(e.target.innerHTML);
                first.push(temp);
                temp = "";
            }
            
        }
        else if (e.target.id === "button"){
            input.value=input.value.slice(0,-1)
            temp=temp.slice(0,-1)
        }
    }
    else if (e.target.id === "equal") {
        if (temp.length == 0) alert("enter number");
        else {
            temp = parseInt(temp)
            first.push(temp)
            operation(operator)
        }
    }
    else if (e.target.id === "clear") {
        input.value = ""
        first = []
        temp = "0"
        operator = []
    }
    function operation(operator) {
        let result = first[0]
        console.log(first)
        console.log(operator)
        for (let index = 1; index < first.length; index++) {
            let num2 = first[index]
            console.log(`result =${result}`)
            console.log(operator[0])
            console.log(num2)
            switch (operator[0]) {
                case "+":
                    result = result + num2
                    operator.shift();
                    break;
                case "-":
                    result = result - num2
                    operator.shift();
                    break;
                case "*":
                    result = result * num2
                    operator.shift();
                    break;
                case "/":
                    result = result / num2
                    operator.shift();
                    break;
            }
            console.log(result)
        }
        input.value = result
        temp = result
        first = []
    }
})
