import createProvider from "@/actions/providers/create"
import { Input } from "@nextui-org/react"
import { Button } from "@nextui-org/react"

export default function FormCreateProvider() {
    return (
        <form action={createProvider} className="bg-orange-400 rounded-md flex felx-col flex-grow-0 gap-2">
            <h1 className="text-2xl text-white font-semibold text-center">Crear Proveedor</h1>
            <Input label="Nombre" placeholder="Chayomi" name="providerName" />
            <Input label="Correo" placeholder="inc@chayomi.com" name="providerEmail" />
            <Input label="Numero" placeholder="461XXXXXXX" name="providerPhoneNumber" />
            <Button color="primary" type="submit">
                Añadir
            </Button>
        </form>
    )
}