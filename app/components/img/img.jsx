import { Form } from "@remix-run/react";
import fs from "fs";
import { env } from "process";
import { useState } from "react";
const path = require('path');

export default function FormImg(e) {
    const [img, setimg] = useState([1])
    function ImgOnchage(e) {
        console.log(e.target.files);
        setimg([...img, 1])
    }
    return (
        <>
            <img src="/uploads/020 (2).jpg" />
            <Form method="post" encType="multipart/form-data">
                <label htmlFor="avatar-input">Avatar</label>
                {img.map(i => (
                    <input type="file" name={`img`} onChange={(e) => ImgOnchage(e)} multiple />

                ))}

                {/* <input id="avatar-input" type="file" name="img" onChange={(e) => ImgOnchage(e)} multiple /> */}
                <button>
                    enviar
                </button>
                <a href="/pdf/prueba1/CertificadoPOSContributivoSubsidiadoYAfiliado (1).pdf" download="mi-archivo.pdf">Descargar</a>
            </Form>
        </>
    )
}