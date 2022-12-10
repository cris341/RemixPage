import { unstable_composeUploadHandlers, unstable_createFileUploadHandler, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import FormImg from "../components/img/img";


export default function ImportImg() {
    return (
        <FormImg />
    )
}
export const fileUploadHandler = unstable_createFileUploadHandler({
    directory: './public/uploads',
    file: ({ filename }) => filename,
});
export async function action({ request }) {
    const formData = await unstable_parseMultipartFormData(request, fileUploadHandler);

    const file = formData.get("avatar");
    console.log(file);
    return null;
}