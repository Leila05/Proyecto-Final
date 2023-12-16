const ACCESS_TOKEN =
    "ya29.a0AfB_byBRIqafazA0QVjSCTisLYcFpNYIx-96iEKEUPU566HcSoBPlc3lzCn5voCURDAWq7HW9uUdpn-1G6Zzg_b82VvuLFQ18bOJDD1upUwYN_v73oeXzWKfAWGqAv343HqO3jCWVvDfXOsWdmkY0WCJ6DCmTi0ahusdaCgYKARQSARISFQHGX2Miw3KEJt24KuLs_i1SDC6H3w0171";
const SHEET_ID = '1ZoV17Y0Fq-bUce1_IGxndYQr9M3gPEcF0ec3_WVPChQ';
//Inicializamos la fecha a la fecha de hoy
document.getElementById('fecha').valueAsDate = new Date();

function registrar() {
    //Obtenemos los datos del formulario
    const fecha = document.getElementById('fecha').value;
    const descrip = document.getElementById('detalle').value;
    const cantidad = document.getElementById('cant').value;
    //Creamos el JSON que espera nuestra API
    let data = {};
    let values = [];
    let fila = [fecha, descrip, cantidad];
    values.push(fila);
    //Verificar que coincida con el nombre de la hoja de nuestro sheet
    data.range = "sobrantes";
    data.majorDimension = "ROWS";
    data.values = values;
    //Invocamos al método POST de la API
    fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/sobrantes:append?valueInputOption=USER_ENTERED`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            body: JSON.stringify(data)
        }
    ).then(function(response) {
        response.json().then(function(data) {

        });
    });
    //Limpiamos los campos del formulario para permitir cargar un nuevo producto
    document.getElementById('fecha').valueAsDate = new Date();
    document.getElementById('detalle').value = "";
    document.getElementById('cant').value = "";
};