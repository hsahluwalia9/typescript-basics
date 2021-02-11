interface Dog {
    name: string,
    breed: string,
    gender: string,
    age: number,
    // optional field
    weight?: number
}

const dog1: Dog = {
    name: "Ellie",
    breed: "Golden Retriever",
    gender: "Female",
    age: 0.5,
    weight: 35
}

const dog2: Dog = {
    name: "Nikki",
    breed: "Beagle",
    gender: "Female",
    age: 5
}

type getDogAgeFunc = (dog: Dog) => number;

const getDogAge: getDogAgeFunc = (dog: Dog) => dog.age;

console.log(getDogAge(dog1));