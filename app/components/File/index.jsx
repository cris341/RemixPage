import { useState } from 'react'
import readXlsxFile from 'read-excel-file'
function LeerExcel(e) {
    // const [contenido, setcontenido] = useState([])

    const input = e.target
    // const workBook = XLSX.readFile(ruta)
    // const WorkBookSheets = workBook.SheetNames
    readXlsxFile(input.files[0]).then((rows) => {
        const Title = []
        const datos = []
        rows[0].map(t => (
            Title.push(t)
        ))
        rows.map((f, index) => {
            for (let t = 0; t < Title.length; t++) {
                datos[index] = { ...datos[index], [Title[t]]: f[t] }
            }
        })

        console.log(datos);
    })

}
// LeerExcel('Prueba.xlsx')
export default function File() {
    return (
        <>
            <input type={'file'} id={'Excel'} onChange={(e) => LeerExcel(e)} />
        </>

    )
}