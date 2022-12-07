import File, { LeerExcel } from "../components/File";
import Headers from "../components/layouts/Headers";
import { ExcelClear } from "../services/excel";


export default function () {
    return (
        <>
            <Headers />
            <File />
            {/* <form method="post">
                <input name="prueba" id="prueba" type="text" />
                <button className="btn-red">
                    enviar
                </button>
            </form> */}
        </>
    )
}

export async function action({ request }) {
    const data = await request.formData()
    // console.log(await request.formData());
    const file = data.get('JsonExcel')
    // const excel = LeerExcel('file')
    console.log([{ "a": 1 }, { "morire": 1 }]);
    // console.log(file.JSON.parse());

    // await ExcelClear(file)
    return 1
}