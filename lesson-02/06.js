let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let passportNewLocation = {...passportWithAddress, address: {...passportWithAddress.address}};

passportNewLocation.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(passportNewLocation.address.city);