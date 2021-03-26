const convertToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 64
    } else {
        throw Error('Amount needs to be in number')
    }
}

// const myValue = convertToRs(5)
// console.log(myValue);

try {
    const myValue = convertToRs(6)
    console.log(myValue);
} catch (e) {
    console.log(e);
}