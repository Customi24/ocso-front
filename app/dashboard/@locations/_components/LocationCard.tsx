import { Location } from "@/entities";
import axios from "axios";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { API_URL } from "@/constants";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
    if (!store) return null;
    const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
        }
    })
    return (
        <Card>
            <CardHeader>
                <p className="w-full">{data.locationName}</p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">
                    Manager:
                    <Link href={{ pathname: `/dashboard/employees` }}>
                        <b>{data.manager?.managerFullName}</b>
                    </Link>
                </p>
            </CardBody>
        </Card>
    )
}