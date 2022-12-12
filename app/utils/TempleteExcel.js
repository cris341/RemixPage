var xl = require('excel4node');

export default function ExportExcel(){
    console.log('llego al templete');
    var wb = new xl.Workbook();

    // Add Worksheets to the workbook
    var ws = wb.addWorksheet('Sheet 1');
    var ws2 = wb.addWorksheet('Sheet 2');

    // Create a reusable style
    var style = wb.createStyle({
    font: {
        color: '#FF0800',
        size: 12,
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -',
    });



    return wb.write('Excel.xlsx');
}