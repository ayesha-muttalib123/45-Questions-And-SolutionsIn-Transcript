// List of current usernames
let current_users = ['admin', 'Ayesha', 'Abdul', 'Roushan', 'Kouser'];
// List of new usernames to check
let new_users = ['ayesha', 'JOHN', 'mary', 'Roushan', 'KHALID'];
let current_users_lowercase = current_users.map(user => user.toLowerCase());
for (let i = 0; i < new_users.length; i++) {
    if (current_users_lowercase.includes(new_users[i].toLowerCase())) {
        console.log(`The username "${new_users[i]}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_users[i]}" is available.`);
    }
}
export {};
