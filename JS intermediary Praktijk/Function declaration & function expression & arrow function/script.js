function test1(naam){
    console.log('function declaration', naam)
}
test1('RENE');

const test2 = function(naam1){
    console.log('This is an function expression', naam1)
}
test2('JR');

const test3 = (naam2) => {
    console.log('Arrow Function', naam2)
}
test3('Van')