let nameEmployee, position, salaryBase, salaryTotal, positionSelected, salarySelected, extraHours, salaryEmployee;
const SUELDO_ADMIN = 700, SUELDO_SUPERVISOR = 650, SUELDO_OPERARIOS = 440, SUELDO_CALIDAD = 490, HORAS_MENSUALES = 160;


position = document.getElementById('cargo');
salaryBase = document.getElementById('sueldoBase')
let buttonSalary = document.getElementById('botonSueldo')


position.addEventListener('change', () => {
    positionSelected = position.value;
    console.log(positionSelected);
    switch (positionSelected) {
        case 'admin':
            salaryEmployee = SUELDO_ADMIN;
            break;
        case 'supervisor':
            salaryEmployee = SUELDO_SUPERVISOR;
            break;
        case 'operario':
            salaryEmployee = SUELDO_OPERARIOS;
            break;
        case 'calidad':
            salaryEmployee = SUELDO_CALIDAD;
            break;
    }
    salaryBase.value = salaryEmployee;
    console.log(salaryEmployee);

});

buttonSalary.addEventListener('click', () => {
    nameEmployee = document.getElementById('nombre-empleado').value;
    extraHours = Number(document.getElementById('horasExtras').value);
    generarSueldo()
})

let printName = document.getElementById('print-nombre');
let printPosition = document.getElementById('print-cargo');
let printTotalSalary = document.getElementById('print-sueldo-total');




const generarSueldo = () => {
    console.log(positionSelected);
    console.log(typeof extraHours);
    console.log(typeof salaryEmployee);
    console.log(extraHours + salaryEmployee);
    let totalSalary = 0;

    switch (positionSelected) {
        case 'admin':
            printName.innerHTML = `${nameEmployee}`;
            printPosition.innerHTML = 'Administrador';
            printTotalSalary.innerHTML = (SUELDO_ADMIN + extraHours * (SUELDO_ADMIN / HORAS_MENSUALES)).toFixed(2)
            break;
        case 'supervisor':
            printName.innerHTML = `${nameEmployee}`;
            printPosition.innerHTML = 'Supervisor';
            printTotalSalary.innerHTML = (SUELDO_SUPERVISOR + extraHours * (SUELDO_SUPERVISOR / HORAS_MENSUALES)).toFixed(2)
            break;
        case 'operario':
            printName.innerHTML = `${nameEmployee}`;
            printPosition.innerHTML = 'Supervisor';
            printTotalSalary.innerHTML = (SUELDO_OPERARIOS + extraHours * (SUELDO_OPERARIOS / HORAS_MENSUALES)).toFixed(2)
            break;
        case 'calidad':
            printName.innerHTML = `${nameEmployee}`;
            printPosition.innerHTML = 'Supervisor';
            printTotalSalary.innerHTML = (SUELDO_CALIDAD + extraHours * (SUELDO_CALIDAD / HORAS_MENSUALES)).toFixed(2)
            break;
    }


}

