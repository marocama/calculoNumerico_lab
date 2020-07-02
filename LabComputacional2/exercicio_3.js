function horner(array, x_scale, y_scale) {
   function recur(x, i, array) {
    return (i == 0) ? array[0] : array[i] + x*recur(x, --i, array);
   }
   return function(x) {
      return recur(x*x_scale, array.length-1, array)*y_scale;
   };
}

function zeros(n) {
   var array = new Array(n);
   for (var i=n; i--;) {
     array[i] = 0;
   }
   return array;
}

function denominator(i, points) {
   var result = 1;
   var x_i = points[i].x;
   for (var j=points.length; j--;) {
      if (i != j) {
        result *= x_i - points[j].x;
      }
   }
    console.log(result);
   return result;
}

function interpolation(i, points) {
   var coefficients = zeros(points.length);
   coefficients[0] = 1/denominator(i,points);
    console.log(coefficients[0]);
   var new_coefficients;

   for (var k = 0; k<points.length; k++) {
      if (k == i) {
        continue;
      }
      new_coefficients = zeros(points.length);
       for (var j= (k < i) ? k+1 : k; j--;) {
         new_coefficients[j+1] += coefficients[j];
         new_coefficients[j] -= points[k].x*coefficients[j];
      }   
      coefficients = new_coefficients;
   }
   console.log(coefficients);
   return coefficients;
}

function Lagrange(points) {
   var polynomial = zeros(points.length);
   var coefficients;
   for (var i=0; i<points.length; ++i) {
     coefficients = interpolation_polynomial(i, points);
     for (var k=0; k<points.length; ++k) {
        polynomial[k] += points[i].y*coefficients[k];
     }
   }
   return polynomial;
}