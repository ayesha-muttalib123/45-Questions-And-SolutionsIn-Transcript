let guests = [
    { name: "Ibn-e-Sina", reason: "discussing his views on science and philosophy" },
    { name: "Miss Fatima", reason: "learning about her groundbreaking research" },
    { name: "Elon Musk", reason: "talking about the future of space exploration and technology" }
];
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i].name},\nGreetings! Hope you are doing well. You are being invited to come to the party for ${guests[i].reason}.\nThanks and regards,\nAyesha Muttalib`);
}
const guestWhoCantMakeIt = "Elon Musk";
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.\n`);
for (let i = 0; i < guests.length; i++) {
    if (guests[i].name === guestWhoCantMakeIt) {
        guests[i] = { name: "Miss Roushan", reason: "discussing his contributions towards microbiology and his vision for the future" };
    }
}
// updated messages
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i].name},\nGreetings! Hope you are doing well. You are being invited to come to the party for ${guests[i].reason}.\nThanks and regards,\nAyesha Muttalib`);
}
export {};
