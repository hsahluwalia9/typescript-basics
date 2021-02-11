"use strict";
const dog1 = {
    name: "Ellie",
    breed: "Golden Retriever",
    gender: "Female",
    age: 0.5,
    weight: 35
};
const dog2 = {
    name: "Nikki",
    breed: "Beagle",
    gender: "Female",
    age: 5
};
const getDogAge = (dog) => dog.age;
console.log(getDogAge(dog1));
