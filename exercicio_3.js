// Implementação do método Gauss Jacobi

let valores = [], interacoes = 200;

function Convercia(a) {
    
    let somaLinha;
    for (let index1 = 0; index1 < a.length; index1++) {

        somaLinha = 0;
        for (let index2 = 0; index2 < a[index1].length; index2++) {
            
            if(index2 !== index1) somaLinha += Math.abs(a[index1][index2]);   
        }
        if((somaLinha/a[index1][index2] >= 1)) return false;
    }
    return true;
}

function Precisao(e, a1, a2) {

    if(a1.length === a2.length) {
      for (var index = 0 ; index < a1.length ; index++) {
        if (Math.abs(a1[index] - a2[index]) >= e)
          return false;
      }
      return true;
    }
}

function GaussJacobi(a, b, x0, e) {

    valores.unshift(x0.slice());

    let aux = new Array(x0.length), interacoes = 0;

    while(!Precisao(e[0], valores[0], valores[1])) {

        interacoes++;
        for (let index1 = 0; index1 < a.length; index1++) {

            aux[index1] = b[index1];
            for (let index2 = 0; index2 < a[index1].length; index2++) {
                
                if(index2 !== index1) aux[index1] -= (a[index1][index2]*valores[0][index2]);   
            }
            aux[index1] /= a[index1][index1];
        }
        valores.unshift(aux.slice());

        if(interacoes > 100) break;
    }
}

