import { unstable_createFileUploadHandler } from "@remix-run/node";

export default function UploadFile(folder){

 const fileUploadHandler = unstable_createFileUploadHandler({
    directory: `./public/${folder}`,
    file: ({ filename }) => filename,
});
    return fileUploadHandler
}