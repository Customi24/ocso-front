import updateManager from "@/actions/managers/update"
import { Manager } from "@/entities"
import { Input, Button } from "@nextui-org/react"
import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import SelectStore from "./SelectStore"

export default async function FormUpdateManager({ manager }: { manager: Manager }) {
    const updateManagerWithId = updateManager.bind(null, manager.managerId)
    const responseStores = await fetch(`${API_URL}/location`,{
        headers: {
            ...authHeaders()
        }
    })
    const stores = await responseStores.json()
    return (
        <form action={updateManagerWithId} className="bg-orange-400 rounded-md">
            <h1>Actualizar Manager</h1>
            <Input
                defaultValue={manager.managerFullName}
                placeholder="Fernando Morales"
                name="managerFullName"
            />
            <Input
                defaultValue={manager.managerEmail}
                placeholder="fermanager@ocso.com"
                name="managerEmail"
            />
            <Input
                defaultValue={String(manager.managerSalary)}
                placeholder="fermanager@ocso.com"
                name="15000"
            />
            <Input
                defaultValue={manager.managerPhoneNumber}
                placeholder="fermanager@ocso.com"
                name="4112105549"
            />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId}/>
            <Button color="primary" type="submit">
                Actualizar
            </Button>
        </form>
    )
}