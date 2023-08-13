let titel = "zoz";
let paragraph = "mostafa";
let date = "25/10" ;

let card = `
<div>
<h3> ${titel}</h3>
<p> ${paragraph}</p>
<spam> ${date}</spam>
</div>
`;

document.write(card.repeat(4));


// let a =10 ;
// let b = "20" ;
// let c = 80 
// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// let d = "-100";
// let e = "20" ;  
// let f = 30 ;  
// let g = true ; 

// console.log(-d * +e ); //2000
// console.log(-d * +e ); //2000
// console.log(++g); //2000
// console.log(++e); //2000
// console.log(++f); //2000
// console.log(-d + ++g * ++e + ++f); //173

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.trunc(Math.min( a , b , c , d))); 

// console.log(Math.pow(a, Math.floor(d)));//10000

// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(Math.trunc(d));
// console.log(Number.parseInt(d));

// console.log((Math.trunc(b) / Math.ceil(d)).toString()); //66.67 => string
// console.log(Math.ceil(Math.trunc(b) / Math.ceil(d))); //67 => number


let a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6))

console.log(a.charAt(13).toUpperCase().repeat(8))

console.log(a.slice(0,5).split())

console.log(a.substr(0,6) + a.substr(10,16))

console.log(a.charAt(0).toLowerCase() + a.slice(1, -1).toUpperCase() + a.slice(-1).toLowerCase());