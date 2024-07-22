
function show_magicians(magicians_names: string[]){
    for (let i = 0; i < magicians_names.length; i++) {
        console.log(magicians_names[i]);
    }
}


function make_great(magicians_names: string[]) {
    for (let i = 0; i < magicians_names.length; i++) {
        magicians_names[i] = `the Great ${magicians_names[i]}`;
    }
}


let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller', 'David Blaine'];


make_great(magicians);


show_magicians(magicians);
