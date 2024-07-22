
let usernames: string[] = ['admin', 'Ayesha', 'Abdul', 'Roushan', 'Kouser'];


for (let i=0;i<usernames.length;i++) {
 
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
}

while (usernames.length>0) 
    
{
    usernames.pop()
}
if (usernames.length === 0) {
    console.log('We need to find some users!')

}


