// List of current usernames
let current_users = ['admin', 'Ayesha', 'Abdul', 'Roushan', 'Kouser'];
// List of new usernames to check
let new_users = ['ayesha', 'JOHN', 'mary', 'Roushan', 'KHALID'];
// Convert all current usernames to lowercase for case-insensitive comparison
let current_users_lowercase = current_users.map(user => user.toLowerCase());
// Loop through the new_users list to check for availability
for (let i = 0; i < current_users.length; i++) {
    if (current_users_lowercase[i].includes(new_users[i].toLowerCase())) {
        console.log(`The username "${new_users[i]}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_users[i]}" is available.`);
    }
}
export {};
