import { Form } from "@remix-run/react";
import fs from "fs";
import { env } from "process";
const path = require('path');

export default function FormImg(e) {

    function ImgOnchage(e) {
        console.log(env);
        // fs.writeFile('/text.md', 'archivo creado', (err) => {
        //     if (err) throw err;
        //     console.log('se creo bien');
        // })
        // const file = e.target.files[0]
        // const formData = new FormData()
        // formData.append('myFile', file, "prueba1");
        // const f = formData.myFile
        // console.log(formData);
        // const path = '/public/images/' + "prueba1";
        // f.mv(path, (error) => {
        //     if (error) {
        //         console.error(error);
        //         return;
        //     }
        //     return 1;
        // });




    }
    return (
        <>
            <img src="\\uploads\\020 (2).jpg" />
            <Form method="post" encType="multipart/form-data">
                <label htmlFor="avatar-input">Avatar</label>
                <input id="avatar-input" type="file" name="avatar" onChange={(e) => ImgOnchage(e)} />
                <button>Upload</button>
            </Form>
        </>
    )
}