import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button, Input } from "@nextui-org/react";

export default function FormUpdateEmployee({employee}: {employee: Employee}){
    const {employeeId} = employee;
    const updateEmployeeById = updateEmployee.bind(null, employeeId)
    return(
        <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeLastName}/>
            <Input label="Apellidos" name="employeeLastName" defaultValue={employee.employeeEmail}/>
            <Input label="Correo Electronico" name="employeeEmail" defaultValue={employee.employeePhoneNumber}/>
            <Input label="Num. de Telefono" name="employeePhoneNumber" defaultValue={employee.employeeName}/>
            <Input type="file" name="employeePhoto" defaultValue={employee.employeePhoto}/>
            <Button type="submit" color="primary">Actualizar Datos</Button>

        </form>
    )
}