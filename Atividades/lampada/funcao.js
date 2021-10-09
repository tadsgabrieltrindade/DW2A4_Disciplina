main()

function main() {
    //se eu não passar nenhum valor ele pega o 100

    var cal = function (a = 100, b = 100) {
        return a + b;
    }

    //array function
    var mult = (a = 100, b = 100) => a * b 

    var a = 12;
    var b = 5;

    console.log("Soma: " + cal(a, b))
    console.log("Mult: " + mult(a, b))

}


