import File, { LeerExcel } from "../components/File";
import Headers from "../components/layouts/Headers";
import { ExcelClear } from "../services/excel";
import { GetUser, UserCreatMany } from "../services/user";


export default function () {
    return (
        <>
            <Headers />
            <File />
        </>
    )
}
export async function loader() {
    return GetUser();
}
export async function action({ request }) {
    let formData = await request.formData();
    let datos = JSON.parse(formData.get("json"))

    const repuesta = await UserCreatMany(datos)
    return repuesta
}