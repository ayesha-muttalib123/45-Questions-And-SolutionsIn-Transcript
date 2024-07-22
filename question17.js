// type Guest = {
//     name: string;
//     reason: string;
// };
let guests = [
    { name: "Ibn-e-Sina", reason: "discussing his views on science and philosophy" },
    { name: "Miss Fatima", reason: "learning about her groundbreaking research" },
    { name: "Elon Musk", reason: "talking about the future of space exploration and technology" }
];
// Print initial invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i].name},\nGreetings! Hope you are doing well. You are being invited to come to the party for ${guests[i].reason}.\nThanks and regards,\nAyesha Muttalib`);
}
// Guest who can't make it
const guestWhoCantMakeIt = "Elon Musk";
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.\n`);
// Replace the guest who can't make it
for (let i = 0; i < guests.length; i++) {
    if (guests[i].name === guestWhoCantMakeIt) {
        guests[i] = { name: "Nikola Tesla", reason: "discussing his contributions to electrical engineering and his vision for the future" };
    }
}
// Inform about the bigger dinner table
console.log(`\nGood news! We found a bigger dinner table, so we can invite more guests.\n`);
// Add one new guest to the beginning
guests.unshift({ name: "Isaac Newton", reason: "discussing his laws of motion and universal gravitation" });
// Add one new guest to the middle using splice
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, { name: "Ada Lovelace", reason: "talking about her pioneering work in computer science" });
// Add one new guest to the end
guests.push({ name: "Galileo Galilei", reason: "discussing his contributions to astronomy and physics" });
// Print updated invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i].name},\nGreetings! Hope you are doing well. You are being invited to come to the party for ${guests[i].reason}.\nThanks and regards,\nAyesha Muttalib`);
}
// Shrinking guest list
console.log(`\nUnfortunately, the new dinner table won’t arrive in time, and we have space for only two guests.\n`);
// Remove guests until only two are left
while (guests.length > 2) {
    let removeguest = guests.pop();
    console.log(`Sorry ${removeguest?.name}, we can't invite you to the party.`);
}
// Print invitation messages for the two remaining guests
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i].name},\nYou are still invited to the dinner. Looking forward to seeing you!\nThanks and regards,\nAyesha Muttalib`);
}
guests.pop();
guests.pop();
console.log(guests);
export {};
