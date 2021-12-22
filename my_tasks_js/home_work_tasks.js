
function factorChain(array) {
     let j = 0;
     for (let i = 1; i < array.length; i++) {
         if(array[i]/2!==array[j]){
             return false;
         }
         j++
     }
     return true;
 }
 console.log(factorChain([1,2,4,8,16,32]));


/*====birhil elementlarni olibtashlash====*/
function check(array) {
    return Array.from(new Set(array))
}
console.log(check([1,0,1,0]));
/*===usul=2===*/
function uniqBy(a) {
    let seen = new Set();
    return a.filter(item => {
        return seen.has(item) ? false : seen.add(item);
    });
}
console.log(uniqBy([1,0,1,0]));

