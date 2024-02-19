//https://rahulshettyacademy.com/upload-download-test/index.html
const ExcelJs= require('exceljs');

async function excelTest() {
    const Workbook =new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:\Users\ShakilAhmed\Desktop\playwrightProject\PlaywrightProject_00\excelFile\download.xlsx")
    const worksheet =workbook.getWorksheet('sheet1');
    worksheet.eachRow((row,rowNumber) =>
    {
        row.eachCell((cell,colNumber)=> {
            console.log(cell.value);
        } )

    })
}
excelTest();
