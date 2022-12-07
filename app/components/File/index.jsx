import { useActionData } from '@remix-run/react';
import { useState } from 'react'
import readXlsxFile from 'read-excel-file'
export async function LeerExcel(e) {

    const input = e.target
    console.log(e);
    // const workBook = XLSX.readFile(ruta)
    // const WorkBookSheets = workBook.SheetNames
    const datos = []
    const map = {
        'START DATE': 'date',
        'NUMBER OF STUDENTS': 'numberOfStudents',
        'COURSE': {
            'course': {
                'IS FREE': 'isFree',
                'COURSE TITLE': 'title'
            }
        }
    }

    // readXlsxFile(input.files[0], { map }).then((rows) => {
    //     rows === [{
    //         date: new Date(2018, 2, 24),
    //         numberOfStudents: 10,
    //         course: {
    //             isFree: true,
    //             title: 'Chemistry'
    //         }
    //     }]
    //     console.log(rows);
    // })
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
    console.log(JsonExcel);
    return JsonExcel;

}
// LeerExcel('Prueba.xlsx')
export default function File() {

    const [excel, setexcel] = useState([])

    async function JsonExcel(e) {

        let datos2 = await LeerExcel(e)
        setexcel(datos2)
        useActionData(datos2)
        console.log(datos2[1]);
    }
    return (
        <>
            {/* {contenido} */}
            {/* <button onClick={() => Incrementar()}>Incrementar</button> */}
            <form method='post'>
                <input type={'text'} name='ty' id='ty' />
                <input type={'hidden'} name={'JsonExcel'} id={'JsonExcel'} value={{ "h": "asd", 12: "Sad" }} />
                <input type={'file'} name={'file'} id={'Excel'} onChange={(e) => JsonExcel(e)} />
                <button>Enviar</button>
            </form>
            <h1>dasdaf</h1>
            {excel && excel.map((e, index) => (
                <h1 key={index} >{e.Nombre}</h1>
            ))}
        </>

    )
}