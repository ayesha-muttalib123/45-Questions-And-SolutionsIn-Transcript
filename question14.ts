type Guest={
    name: string;
    reason: string
}

let guest:Guest[]=[
    { name: "Ibn-e-Sina", reason: "discussing his views on science and philosophy" },
    { name: "Miss Fatima", reason: "learning about her groundbreaking research" },
    { name: "Elon Musk", reason: "talking about the future of space exploration and technology" }
]

 for(let i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i].name},\n Greetings !  Hope you ar doing well . You are being Invited to coming to the party for ${ guest[i].reason}  \n Thanks Regards \n Ayesha Muttalib `)
        
 }