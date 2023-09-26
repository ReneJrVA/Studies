//  && --> and
//  || --> or
//  ! --> not

const leeftijd = 20;
const type = 'admin';

/*if (leeftijd > 29 && type == 'admin') {
    console.log('Hij is ouder dan 29 jaar en is een admin.');
} else if (leeftijd > 25) {
    console.log('Hij is ouder dan 25 jaar en is een admin.');
} else {
    console.log('Hij heeft niet de minimum leeftijd.');
}
*/

switch (leeftijd) {
    case 20:
        console.log('Hij is 20 jaar oud.')
        break;
    case 21:
        console.log('Hij is 21 jaar oud.')
        break;

    default:
        console.log('Hij heeft niet de minimum leeftijd.')
}

