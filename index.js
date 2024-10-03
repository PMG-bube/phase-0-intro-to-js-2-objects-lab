const employee={
    name:"Sam",
    streetAddress:"2526",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
return {...employee,
    [key]:value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
 employee.streetAddress='12 Broadway'
return employee;
}
function deleteFromEmployeeByKey(employee, key){
const delf={...employee};
delete delf[key]
return delf;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
  delete employee[key]
return employee;
}