import updateManager from "@/actions/managers/update"
import { Manager } from "@/entities"
import { Input, Button } from "@nextui-org/react"
import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import SelectStore from "./SelectStore"

export default async function FormUpdateManager({ manager }: { manager: Manager }) {
    const updateManagerWithId = updateManager.bind(null, manager.managerId)
    const responseStores = await fetch(`${API_URL}/locations`,{
        headers: {
            ...authHeaders()
        }
    })
    const stores = await responseStores.json()
    return (
        <form action={updateManagerWithId} className="bg-orange-400 rounded-md flex felx-col flex-grow-0 gap-2">
            <h1 className="text-2xl text-white font-semibold text-center">Actualizar Manager</h1>
            <Input
                required={true}
                isRequired
                label="Nombre completo"
                defaultValue={manager.managerFullName}
                placeholder="Fernando Morales"
                name="managerFullName"
            />
            <Input
                required={true}
                isRequired
                label="Correo electronico"
                defaultValue={manager.managerEmail}
                placeholder="fermanager@ocso.com"
                name="managerEmail"
            />
            <Input
                required={true}
                isRequired
                label="Salario"
                defaultValue={String(manager.managerSalary)}
                placeholder="15000"
                name="managerSalary"
            />
            <Input
                required={true}
                isRequired
                label="Número de teléfono"
                defaultValue={manager.managerPhoneNumber}
                placeholder="4111238213"
                name="managerPhoneNumber"
            />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId}/>
            <Button color="primary" type="submit">
                Actualizar
            </Button>
        </form>
    )
}