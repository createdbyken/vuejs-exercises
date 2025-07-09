


const person = {
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 51234,
    lat: 40.7128,
    lng: -74.0060
  }
}; // as const

const person2 = structuredClone(person);

person2.lastName = 'Parker';
person2.address.city = 'LA';

console.log({person});
console.log({person2 });