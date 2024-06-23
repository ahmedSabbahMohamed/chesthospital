import { API } from "."

const getAllDoctors = () => {
    return API.get("/api/public/doctors");
}

export { getAllDoctors }
