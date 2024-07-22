let Data = [
    {
        name: "John Doe",
        age: 30,
        address: "123 Main St, Anytown, USA",
        phone: 1234567890,
        email: "john.doe@example.com"
    },
    {
        name: "Jane Smith",
        age: 25,
        address: "456 Elm St, Othertown, USA",
        phone: 9876543210,
        email: "jane.smith@example.com"
    },
];
for (let i = 0; i < Data.length; i++) {
    console.log(Data[i]);
}
export {};
// Reusability: Interfaces can be reused across
//  different parts of your application. If you
//   have multiple functions or classes that use the same 
//   type of object, defining an interface once and using it everywhere ensures consistency.
// typescript
// Copy code
// interface Country {
//   name: string;
//   capital: string;
//   population: number;
//   continent: string;
// }
// function printCountryInfo(country: Country): void {
//   console.log(`Country: ${country.name}, Capital: ${country.capital}`);
// }
// let usa: Country = { name: "United States", capital: "Washington, D.C.", population: 331002651, continent: "North America" };
// printCountryInfo(usa);
