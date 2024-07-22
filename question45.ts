// Function to store car information in an object
function create_car(manufacturer: string, model: string, ...additionalInfo: [string, any][]): Record<string, any> {
    // Create a base car object with the required manufacturer and model
    let car: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional properties to the car object
    for (const [key, value] of additionalInfo) {
        car[key] = value;
    }

    return car;
}

// Call the function with the required information and additional key-value pairs
let car1 = create_car('Toyota', 'Corolla', ['color', 'blue'], ['year', 2022]);
let car2 = create_car('Ford', 'Mustang', ['color', 'red'], ['feature', 'sunroof'], ['year', 2021]);

// Print the car objects
console.log(car1);
console.log(car2);
