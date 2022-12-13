import { unstable_composeUploadHandlers, unstable_createFileUploadHandler, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import FormImg from "../components/img/img";
import UploadFile from "../utils/UploadFile";


export default function ImportImg() {
    return (
        <FormImg />
    )
}

export async function action({ request }) {
    const folder = 'img/multiple4'
    const formData = await unstable_parseMultipartFormData(request, UploadFile(folder));

    const file = formData.getAll("img");

    console.log(file);
    return null;
}