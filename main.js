
const product = (param1 , param2) => param1 * param2;

console.log(product(3,3));

const student ={
    name : "Manish",
    greet(){
        console.log(`My name is ${this.name}`);
    }
}

student.greet()