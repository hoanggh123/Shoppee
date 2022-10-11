my(1, 2, 3, 3, 4, 5, 5, 5, 5, 5, 5);
myt(1, 2, 3, 3, 4, 5, 5, 5, 5, 5, 5);
function my(a, b, c, d, e, g, g, h, i, t, f) {
  console.log(a, b, c, d, e, g, g, h, i, t, f);
}
function myt() {
  console.log(arguments);
}
function ar(mot,hai) {
  if (mot) {
    console.log(1);
  }
   if (mot) {
    console.log(1);
  }
  
}

var result = triple(10);
function triple(a) {
  return a * 3;
}
console.log(triple(10));

console.log(result);
function show() {
    function show2() {

        console.log("Goi ham abc");
    }
    show2();  
}

show();