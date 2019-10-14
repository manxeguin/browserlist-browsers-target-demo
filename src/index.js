const myFunction = () => {
    return [1,2,3,4,5,6,7,8,9].reduce((sum, val) => {
        return sum + val
    }, 0)
}

console.log(myFunction());