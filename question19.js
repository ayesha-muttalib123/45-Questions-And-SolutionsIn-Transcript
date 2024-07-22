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
console.log("\nHey People I have founded bigger Dinning table ");
// add member in the middle
guests.splice(guests.length / 2, 0, { name: "Miss Kouser", reason: "disccussing his contribution towards Computer science" });
// add member at the beginning
guests.splice(0, 0, { name: "Miss Hvanah", reason: "disccussing about the research paper she worked on" });
// add member at the end
guests.splice(guests.length, 0, { name: "Miss Humna", reason: "disscuissing about the working on field of physics" });
// updated messages
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i].name},\nGreetings! Hope you are doing well. You are being invited to come to the party for ${guests[i].reason}.\nThanks and regards,\nAyesha Muttalib`);
}
console.log("number of people invited to the dinner:" + guests.length);
export {};
