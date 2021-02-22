'use strict';
/*------------------------------------------------------------------------------
1. Complete the `filterPrivateData()` function. It should take a single 
   argument: the array of employee records.
2. It should create a _new_ array, containing employee data without the private
   data.
3. Use ES5 object destructuring to extract the non-private properties from an 
   employee record (an `object`) and object literal shorthand to create a new 
   employee record with just the non-private parts.
4. Return the new array as the return value of the function.
------------------------------------------------------------------------------*/
const employeeRecords = [
  {
    name: 'John',
    occupation: 'developer',
    gender: 'M',
    email: 'john.doe@somewhere.net',
    salary: 50000,
  },
  {
    name: 'Jane',
    occupation: 'manager',
    gender: 'F',
    email: 'jane.eyre@somewhere.net',
    salary: 60000,
  },
];

function filterPrivateData(arrayEmployees) {
  return arrayEmployees.map((employee) => {
    const {name, occupation, email} = employee
    return {name, occupation, email}
  })
}

console.log(filterPrivateData(employeeRecords));

// ! Do not change or remove any code below
module.exports = {
  employeeRecords,
  filterPrivateData,
};
