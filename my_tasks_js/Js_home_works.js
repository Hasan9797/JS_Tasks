

/*=======task=1========*/
// function revers(params) {
//     let num = 0
//     let arr = Array.from(String(params),(n) => Number(n))
//     for(let i=0; i<arr.length;i++){
//         for(let j=i+1; j<arr.length;j++){
//             if(arr[i] < arr[j]){
//                 num = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = num
//             }
//         }
//     }
//     let arr1 = Number(arr.join(''))
//     console.log(arr1);
    
// }
// revers(73065);


/*=======task=2========*/
// let objc = {
//     Joel: 22,
//     Fred: 32,
//     Renginald: 44,
//     Susan: 65,
//     Julian: 13
// }

// function sum(obj, num) {
//     for(let i in obj){
//         obj[i] = obj[i]+num
//     }
//     return obj
// }
// console.log(sum(objc, 2));

/*=======task=3========*/
// function alphNum(params) {
//     let obj = {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,
//     N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25};
//     let str = ''
//     for(let i of params){
//         for(let [key,value] of Object.entries(obj)){
//             if(i === key){
//                 str += value + ' '
//             }
//         }
//     }
//     console.log(str);
// }
// alphNum("JAVASCRIPT")


/*========task=4========*/
// function sotr_length(params) {
//     return params.sort((a,b)=>{
//         return a.length>b.length ? 1: -1;
//     })
// }
// let str = ['jumb','loopert', 'sorted','lopanagandus']
// console.log(sotr_length(str));


/*========task=5========*/
// function check(params, num) {
//     let nu = 0;
//         for (let i = 0; i < params.length; i++) {
//             for (let j = 0; j < params[i].length; j++) {
//                 if(params[i][j] === num){
//                     nu ++
//                 }
//             }
//         }
//         return nu === params.length? true:false;
// }
// console.log(check([[1,2],[3,1],[4,3,1],[1,5],[2,1,6]],2));


/*=======task=6=======*/
// function rom_num(params) {
//     let add = 0;
//     while(add !== String(params).length){
//         add++
//     }
//     return add
// }
// console.log(rom_num(0));
