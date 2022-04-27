// Write your solution in this file!
const employee  = {
    name: "Matt",
    streetAddress: "2 Winchester Street"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...employee,
        name: "Sam",
        streetAddress: "11 Broadway"
    }
} 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress) {
    employee [streetAddress] = "12 Broadway"
    return employee
};

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj, ...key};
    delete newEmployee[key]
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key]
    return obj;
}


