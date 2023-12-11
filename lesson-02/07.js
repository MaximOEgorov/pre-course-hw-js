let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
let passportMarried2 = {...passportMarried, married:true, address: {...passportMarried.address}};
console.log(JSON.stringify(passportMarried))
console.log(JSON.stringify(passportMarried2))
