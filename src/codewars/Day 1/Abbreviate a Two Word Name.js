/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

function abbrevName(name) {
    let initials = name[0].toUpperCase();
    for (let i = 1; i <= name.length; i++) {
        if (name[i - 1] == ' ') {
            initials += `.${name[i].toUpperCase()}`;
        }
    }
    return initials;
}

// other solution 
function abbrevName(name) {

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}