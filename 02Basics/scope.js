let isAmGlobal = 'someValue'

if (true) {
    let iamLocal = 'someMoreValue'
    isAmGlobal = 'superman'
    console.log(isAmGlobal);
    console.log(iamLocal);
}

console.log(isAmGlobal);
// console.log(iamLocal); /** can't be access outside cos it's decleared inside the scope */