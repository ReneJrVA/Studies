
for (let num1 = 0; num1 < 100; num1++) {
    console.log(num1);

    if (num1 == 50) {
        break
    }
}

const object = {
    name: 'Rene',
    age: 22,
    city: 'Antwerp'
}

for (key in object) {
    console.log(object[key]);
}

const array = ['hb20', 'corola', 'miata']

for (item of array) {
    console.log(item)
}

let num2 = 0;

while (num2 < 5) {
    console.log(num2);
    num2++
}