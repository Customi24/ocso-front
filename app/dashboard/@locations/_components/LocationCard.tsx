import { Location } from "@/entities";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { API_URL } from "@/constants";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
    if (!store) return null;
    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
        },
        next:{
            tags: ["dahsboard:locations",`dahsboard:locations:${store}`]
        }
    });
    const data: Location = await response.json()
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