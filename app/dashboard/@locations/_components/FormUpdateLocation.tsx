import { Input } from "@nextui-org/react"
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";
import { updateLocation } from "@/actions/locations/update";
import { Button } from "@nextui-org/react";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}) {
    if (!store || store === undefined || typeof store === 'object') return null;
    const updateWithStoreId = updateLocation.bind(null, store);
    const responseManagers = await fetch(`${API_URL}/managers`,{
        headers: {
            ...authHeaders()
        },
        next:{
            tags: ["dahsboard:managers"]
        }
    })
    const dataManagers: Manager[] = await responseManagers.json()
    const responseLocation = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        next:{
            tags: ["dahsboard:locations"]
        }
    })
    const dataLocations: Location[] = await responseLocation.json()

    let foundLocation = dataLocations.find((location)=> location.locationId === +store)
    let foundManager = dataManagers.find((manager) => manager.managerId === foundLocation?.manager?.managerId)
    return (
        <form action={updateWithStoreId} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
            <Input required={true} defaultValue={foundLocation?.locationAddress} label="Dirección" placeholder="Av De La Luz S/N" name="locationAddress" />
            <Input required={true} defaultValue={foundLocation?.locationLatLng[0].toString()} label="Latitud" placeholder="120"name="locationLat" />
            <Input required={true} defaultValue={foundLocation?.locationLatLng[1].toString()} label="Longitud" placeholder="20" name="locationLng" />
            <Input required={true} defaultValue={foundLocation?.locationName} label="Nombre" placeholder="Ocso  juriquilla" name="locationName" />
            <SelectManager defaultManager={foundManager?.managerId} managers={dataManagers} locations={dataLocations}/>
            <Button type="submit" color="primary">Actualizar</Button>
        </form>
    );
}