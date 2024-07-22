function show_magicians(magicians_names) {
    for (let i = 0; i < magicians_names.length; i++) {
        console.log(magicians_names[i]);
    }
}
function make_great(magicians_names) {
    for (let i = 0; i < magicians_names.length; i++) {
        magicians_names[i] = `the Great ${magicians_names[i]}`;
    }
}
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller', 'David Blaine'];
make_great(magicians);
show_magicians(magicians);
export {};
