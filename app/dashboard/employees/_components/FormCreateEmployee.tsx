import { Button, Input } from "@nextui-org/react";
import createEmployee from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import SelectLocations from "./SelectLocation";

export default async function FormCreateEmployee() {
  const responseLocations = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders()
    }
  })
  const locations = await responseLocations.json();
  return (
    <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
      <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Samantha" />
      <Input isRequired={true} label="Apellidos" name="employeeLastName" placeholder="Gumler" />
      <Input isRequired={true} label="Correo electrónico" name="employeeEmail" placeholder="sam@gmail.com" />
      <Input isRequired={true} label="Num. de Teléfono" name="employeePhoneNumber" placeholder="461XXXXX" />
      <Input type="file" name="employeePhoto" />
      <SelectLocations stores={locations} />
      <Button type="submit" color="primary" >
        Crear empleado
      </Button>
    </form>
  )
}