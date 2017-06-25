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

let num = [1,4,6,8,9,5,13,22];
let even = num.filter((n) => (n%2 != 1));
console.log(even);
