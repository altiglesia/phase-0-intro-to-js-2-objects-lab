const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};

function updateEmployeeWithKeyAndValue(employee, streetAddress, value){
    const copyOfEmployee = {...employee};
    copyOfEmployee[streetAddress] = '11 Broadway';
    return copyOfEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value){
    employee[streetAddress] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, streetAddress){
    const copyOfEmployee = {...employee};
    delete copyOfEmployee[streetAddress];
    return copyOfEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, streetAddress){
    delete employee[streetAddress];
    return employee;
}

