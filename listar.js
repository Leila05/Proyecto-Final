const ACCESS_TOKEN =
    "ya29.a0AfB_byBRIqafazA0QVjSCTisLYcFpNYIx-96iEKEUPU566HcSoBPlc3lzCn5voCURDAWq7HW9uUdpn-1G6Zzg_b82VvuLFQ18bOJDD1upUwYN_v73oeXzWKfAWGqAv343HqO3jCWVvDfXOsWdmkY0WCJ6DCmTi0ahusdaCgYKARQSARISFQHGX2Miw3KEJt24KuLs_i1SDC6H3w0171";
const SHEET_ID = '1ZoV17Y0Fq-bUce1_IGxndYQr9M3gPEcF0ec3_WVPChQ';

function mostrar() {
    fetch(
        // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/sobrantes!A2:C`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        }).then(function(response) {
        //esperamos el json del response para poder utilizarlo
        response.json().then(function(data) {
            const values = data.values;
            //Obtenemos el elemento del dom
            const TABLA = document.getElementById("items");
            //Creamos la primera fila de la tabla como encabezado
            const ENCABEZADO = document.createElement("tr");
            ENCABEZADO.className = "tr";
            //Encabezado para la fecha
            const THFECHA = document.createElement("th");
            THFECHA.className = "th";
            THFECHA.innerHTML = "Fecha";
            ENCABEZADO.appendChild(THFECHA);
            //Encabezado para el nombre del producto
            const THPROD = document.createElement("th");
            THPROD.className = "th";
            THPROD.innerHTML = "Producto";
            ENCABEZADO.appendChild(THPROD);
            // Encabezado para la cantidad
            const THCANT = document.createElement("th");
            THCANT.className = "th";
            THCANT.innerHTML = "Cantidad";
            ENCABEZADO.appendChild(THCANT);
            //Agregamos la fila de encabezado a la tabla
            TABLA.appendChild(ENCABEZADO);
            //Iteramos sobre los valores y creamos filas para cada elemento
            for (var i = 0; i < values.length; i++) {
                //Creamos una nueva fila
                const FILA = document.createElement("tr");
                FILA.className = "tr";
                //Celdas para la fecha, el producto y la cantidad
                const TDFECHA = document.createElement("td");
                TDFECHA.className = "td";
                TDFECHA.innerHTML = values[i][0];

                const TDPROD = document.createElement("td");
                TDPROD.className = "td";
                TDPROD.innerHTML = values[i][1];

                const TDCANT = document.createElement("td");
                TDCANT.className = "td";
                TDCANT.innerHTML = values[i][2];

                //Agregamos las celdas a la fila
                FILA.appendChild(TDFECHA);
                FILA.appendChild(TDPROD);
                FILA.appendChild(TDCANT);

                //Agregamos la fila a la tabla
                TABLA.appendChild(FILA);
            }
        });
    });
}

mostrar();