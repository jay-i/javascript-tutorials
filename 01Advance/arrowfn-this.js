
// Note: Don't use arrow fn in this use case
// Don't use arrow fns in methods and constructors

const cameras = {
    price: 600,
    weight: 2000,
    des: function() {
        return `This canon camera is of ${this.price}$`
    }
}

console.log(cameras.des());

//////////////////////////////////

// For Redux guys
// const func = () => ({key: 'value'})
