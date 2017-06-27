// let limit = 200;
// limit = 200;
// console.log(limit);

// const emails = ['a@b.c',"d@e.f"];
// emails.push('g@h.i');
// console.log(emails);

// let limit = 200;
// {
//   let limit = 10;
//   console.log("backstage limit: " + limit);
// }
// console.log("Venue limit: " + limit);

// let a = 'good';
// let msg = `${a} morning`;
// console.log(msg);

// let b = [20, 30, 40];
// let a = [10, ...b, 50];
// console.log(a);
// function collect (...a){
//   console.log(a);
// }
//
// collect("a",1,"b",2);

// let son = {name: "Simba", parents: 2};
// let name, parents;
// let {name: n, parents: p} = son;
// console.log(n,p);

// let cheer = () => {
//   console.log("hello after a sec!");
// };
// setTimeout(cheer,2000);

// let num = ['a',2,3];
// let b = num.map((n) => n+n);
// console.log(b);

// let num = [1,4,6,8,9,5,13,22];
// let even = num.filter((n) => (n%2 != 1));
// console.log(even);

// import { fellowship, total } from './fellowship';
// console.log(fellowship,total);

// import {add,multiply} from './math';
// console.log(add(3,24));
// console.log(multiply(3,24));

// import default member from module
// import X from './math';
// console.log(X(3,24));

// import Animal from './Animal';
// const Mufasa = new Animal('Mufasa',3.4);
// console.log(Mufasa);
// Mufasa.hello();

// import Lion from './Lion'
// const Simba = new Lion('Simba',1.8,"golden")
// Simba.hello()
// console.log(Simba)

// import Calculator from './Calculator'
// console.log(Calculator.add(24,3))
// console.log(Calculator.multiply(3,24))

// import Wizard from './Wizard'

// let harry = new Wizard('Harry Potter', 'Gryffendor', 'owl');
// harry.pet_name = 'Hedwig'

// console.log(harry.greet())
// console.log(harry.showPet())


// let S = new Set();
// S.add(3);
// S.add(5);

// console.log(S)
// console.log(S.has(2))

// for (let element of S.values()){
//     console.log(element);
// }

// let string = "ffjgjeroigbepaivnaeirgbqrg2   fkwnpvjijqb874t0287gbcwdljvbO";
// let letters = string.split("");
// let letters_map = new Map();
// for (var l in letters){
//     if(!letters_map.has(letters[l])){
//         letters_map.set(letters[l], 1)
//     } else {
//         letters_map.set(letters[l], letters_map.get(letters[l])+1)
//     }
// }

// console.log(letters_map);

// for(var letter of letters_map.entries()){
//     console.log(letter[0],letter[1]);
// }

// let product = function(x) {
//     return function (y){
//         return x*y
//     }
// }

// let product = x => y => x*y
    

// let m5 = product(5);
// console.log(m5);
// console.log(m5(3));

// import Budget from './Budget'

// let myBudg = new Budget();
// myBudg.add10();
// console.log(myBudg.showBal());
// myBudg.withdraw10();
// console.log(myBudg.showBal());

function* upto(limit){
    let count = 0;
    while(count<limit){
        let resetKey = yield count +=1; // this resetKey var handles the boolean passed to next() call
        if(resetKey){
            count = 0;
        }
    }
}

let u3 = upto(3);

console.log(u3.next().value);
console.log(u3.next().value);
console.log(u3.next(true).value);
console.log(u3.next().value);
