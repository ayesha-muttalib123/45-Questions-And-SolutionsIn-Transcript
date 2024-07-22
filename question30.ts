
let usernames: string[] = ['admin', 'Ayesha', 'Abdul', 'Roushan', 'Kouser'];


for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

let index=5

if(index > 0 && index<usernames.length){
    console.log(usernames[index])

} else {
    console.log(`Index ${index} is out of bounds.`);
}