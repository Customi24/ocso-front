"use server";

import { API_URL } from "@/constants";
import axios from "axios";
import { authHeaders } from "@/helpers/authHeaders";

export default async function deleteLocation(formData: FormData){
    const locationId = formData.get("deleteValue")
        if (!locationId) return;
    axios.delete(`${API_URL}/locations/`, {
        headers: {
            ...authHeaders()
        }
    })
}