//基本使用
// var a = 1;
// let b = 2;
// const c = 3;
// console.log(a);
// console.log(b);
// console.log(c);
 //作用域问题
// {
//     var a1 = 1;
//     let b1 = 2;
//     let c1 = 3;
// }
// console.log(a1);
//报错
//console.log(b1);
//console.log(c1);

//变量提升
// console.log(a2);
// var a2 = 1;
//报错
//console.log(b2);
//let b2 = 2;
var a3 = 1;
if(true){
    console.log(a3);
    let a3 = 1;
}
