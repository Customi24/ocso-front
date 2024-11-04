import { Provider } from "@/entities";
import { Input, Button } from "@nextui-org/react";
import updateProvider from "@/actions/providers/update";
import DeleteProvider from "./DeleteProvider";
import DeleteProviderButton from "./DeleteBotton";

export default function FormUpdateProvider({ provider }: { provider: Provider }) {
    const { providerId } = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId)
    return (
        <>
            <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-md px-10 py-10 mr-20 items-center justify-center">
                <Input className="max-w-[250px]" defaultValue={provider.providerName} label="Nombre" placeholder="Chayomi" name="providerName" />
                <Input className="max-w-[250px]" defaultValue={provider.providerEmail} label="Correo" placeholder="inc@chayomi.com" name="providerEmail" />
                <Input className="max-w-[250px]" defaultValue={provider.providerPhoneNumber} label="Numero" placeholder="461XXXXXXX" name="providerPhoneNumber" />
                <Button color="primary" type="submit">Actualizar</Button>
                <DeleteProvider>
                    <h1 className="text-white text-4xl text-center">¿Seguro que quieres eliminar al proveedor <b>{provider.providerName}</b>?</h1>
                    <DeleteProviderButton providerId={providerId}/>
                </DeleteProvider>
            </form>
        </>
    )
}