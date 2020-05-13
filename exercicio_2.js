// Exercício: Utilizando o método da Newton Raphson, entrar a raiz da equação: X² + sen(x) = 0

function Calcula(x) {
    return Math.pow(x, 2)+(Math.sin(x));
}

function CalculaDr(x) {
    return 2*x+(Math.cos(x));
}

var NewtonRaphson = function() {

    let interactions = 0;
    let x1, x0;

    while(Calcula(x1) < 0.00001) {
        
        interactions++;

        if(interactions > 20) {
            console.log("Erro - Número máximo de interações atingido");
            return null;
        }

        x1 = x0 - (Calcula(x0)/CalculaDr(x0));
    }

    return Calcula(x1);
}