import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { useState } from 'react'
import readXlsxFile from 'read-excel-file'
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
// import ReactExport from "react-export-excel";
// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
// const dataSet1 = [
//     {
//         name: "Johson",
//         amount: 30000,
//         sex: 'M',
//         is_married: true
//     },
//     {
//         name: "Monika",
//         amount: 355000,
//         sex: 'F',
//         is_married: false
//     },
//     {
//         name: "John",
//         amount: 250000,
//         sex: 'M',
//         is_married: false
//     },
//     {
//         name: "Josef",
//         amount: 450500,
//         sex: 'M',
//         is_married: true
//     }
// ];

const dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16
    },
    {
        name: "Josef",
        total: 25,
        remainig: 7
    }
];
export async function LeerExcel(e) {

    let fileObj = e.target.files[0];
    const input = e.target
    console.log(fileObj);
    console.log(e);
    const datos = []

    const JsonExcel = await readXlsxFile(input.files[0]).then((rows) => {
        const Title = []
        rows[0].map(t => (
            Title.push(t)
        ))
        rows.map((f, index) => {
            if (index != 0) {
                for (let t = 0; t < Title.length; t++) {
                    datos[index] = { ...datos[index], [Title[t]]: f[t] }
                }
            }

        })
        datos.shift()
        return datos
    })
    return JsonExcel;

}
// LeerExcel('Prueba.xlsx')
export default function File() {
    const actionData = useActionData()
    const respuesta = useLoaderData()
    console.log(actionData);
    const [excel, setexcel] = useState([])

    async function JsonExcel(e) {

        let datos2 = await LeerExcel(e)
        setexcel(datos2)
    }
    return (
        <>
            {/* {contenido} */}
            {/* <button onClick={() => Incrementar()}>Incrementar</button> */}
            <Form method='post' encType='multipart/form-data'>
                <input type={'text'} name='ty' id='ty' />
                <input type={'hidden'} name={'json'} id={'json'} value={JSON.stringify(excel)} />
                <input type={'file'} name={'file'} id={'Excel'} onChange={(e) => JsonExcel(e)} />
                <button>Enviar</button>
            </Form>
            <h1 className='bg-sky-600'>aaadsad</h1>
            {/* <ExcelFile>
                <ExcelSheet data={dataSet1} name="Employees">
                    <ExcelColumn label="Name" value="name" />
                    <ExcelColumn label="Wallet Money" value="amount" />
                    <ExcelColumn label="Gender" value="sex" />
                    <ExcelColumn label="Marital Status"
                        value={(col) => col.is_married ? "Married" : "Single"} />
                </ExcelSheet>
                <ExcelSheet data={dataSet2} name="Leaves">
                    <ExcelColumn label="Name" value="name" />
                    <ExcelColumn label="Total Leaves" value="total" />
                    <ExcelColumn label="Remaining Leaves" value="remaining" />
                </ExcelSheet>
            </ExcelFile> */}

        </>

    )
}