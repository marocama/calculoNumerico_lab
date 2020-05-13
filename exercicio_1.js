// Exercício: Utilizando o método da bissecção, resolva a equação: X² + sen(x) = 0 com 5 interações

function Calcula(x) {
    return Math.pow(x, 2)+(Math.sin(x));
}

var Bisseccao = function(a, b, i) {
    
    if(Math.sign(Calcula(a)) == Math.sign(Calcula(b))) {
        console.log("Erro - Os pontos A e B não estão nos lados opostos da solução");
        return null;
    }

    let x = (a+b)/2;
    
    for (let index = 0; index < i; index++) {
        
        if(Calcula(x) == 0) return x;

        (Calcula(x) > 0) ? a = x : b = x;
    }

    return x;
}