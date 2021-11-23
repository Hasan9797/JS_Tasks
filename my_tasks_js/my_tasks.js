/*=====task=1======*/
// function tengmi(num){

//     let intArr = Array.from(String(num), (n) => Number(n));

//     let element = ''
//     let element1 = ''

//     for(let i=0; i<intArr.length/2; i++){
//         element += String(intArr[i])
//     }
//     for(let j=intArr.length/2; j<intArr.length; j++){
//         element1 += String(intArr[j])
//     }

//     return element === element1 ? true : false;
// }
// console.log(tengmi(7227));


/*======task=2=======*/
// function second(params) {
//     return (params*60)*60;
// }
// console.log(second(24));


/*======task=3=======*/
// function max_elements(params) {
//     let max_arr = []
//     for(let i in params){
//         let max = params[i].reduce ((a,p) => {
//             return a>p ?a :p;
//         })
//         max_arr.push(max)
//     }
//     return max_arr
// }
// let array = [[4,2,3,7],[20,70,40,90],[1,2,0]];
// console.log(max_elements(array));


/*======task=4========*/

let array = [
    {
        user_id: 1,
        userName: 'Diyorbek',
        password: '1aaa6789'
    },
    {
        user_id: 2,
        userName: 'Iqbol',
        password: '1zzz6886'
    },
    {
        user_id: 3,
        userName: 'Gaday',
        password: '1xxx6779'
    }
]
let Todos = [{
    todo_id: 1,
    todo_txt: 'HAMMA TASHLASIN, uy ishlarini kup chilik tashlamayapti',
    user_id: 1
  },
  {
    todo_id: 2,
    todo_txt: 'HAMMA TASHLASIN, uy ishlarini kup chilik tashlamayapti',
    user_id: 3
  }
]


let userid = array.length
function Reguser(userName,password) {

    if (password.length < 8) {
        return "minimum characters of the password 8"
    }
    userid++
    let User = {
    user_id: userid,
    userName,
    password
    } 
    array.push(User)
    return array
}

let todo_id = Todos.length
function check(name1, pass,todo_txt){
    let user_i = 0
    for(let i=0; i<array.length; i++){
        if(array[i].userName === name1 && array[i].password === pass){
            user_i = array[i].user_id
        }
    }
    todo_id++
    let Todo = {
        todo_id: todo_id,
        todo_txt,
        user_id: user_i
    } 
    Todos.push(Todo)
    return Todos
}



    

console.log(Reguser('Hasan','seniooR9797'));

console.log(check('Iqbol','1zzz6886','kmdfklwfwaoijfikwfijaififdemfi sufjsdduf'));
