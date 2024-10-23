import axios from "axios";
import { cookies } from "next/headers";
import { TOKEN_NAME, API_URL } from "@/constants";
import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";


const LocationsPage = async ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value
    let { data } = await axios.get<Location[]>(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    },);
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0, 0],
            locationAddress: "No existe"
        },
        ...data
    ]

    return (
        <div className="w-7/12">
            <div className="w-full flex flex-col itens-center h-[90vh] bg-red-50">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data} store={searchParams?.store} />
                </div>
                <div className="w-8/12">
                    <LocationCard store={searchParams.store} />
                </div>
            </div>
        </div>
    );
}

export default LocationsPage;