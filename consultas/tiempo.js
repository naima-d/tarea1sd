const data = `
Sales request: Year 2017, Month 0, Response Time: 6648 ms
Employees request: Year 2012, School University of Toledo, Response Time: 1660 ms
Sales request: Year 2019, Month 2, Response Time: 1181 ms
Employees request: Year 2014, School The Ohio State University, Response Time: 3201 ms
Sales request: Year 2017, Month 4, Response Time: 370 ms
Employees request: Year 2016, School University Of Cincinnati, Response Time: 1325 ms
Sales request: Year 2019, Month 6, Response Time: 850 ms
Employees request: Year 2018, School University Of Cincinnati, Response Time: 1368 ms
Sales request: Year 2017, Month 8, Response Time: 874 ms
Employees request: Year 2020, School University of Toledo, Response Time: 1333 ms
Sales request: Year 2019, Month 10, Response Time: 975 ms
Employees request: Year 2022, School University Of Cincinnati, Response Time: 1185 ms
Sales request: Year 2017, Month 12, Response Time: 818 ms
Employees request: Year 2012, School University of Toledo, Response Time: 103 ms
Sales request: Year 2019, Month 1, Response Time: 862 ms
Employees request: Year 2014, School University Of Cincinnati, Response Time: 1250 ms
Sales request: Year 2017, Month 3, Response Time: 279 ms
Employees request: Year 2016, School University of Toledo, Response Time: 1038 ms
Sales request: Year 2019, Month 5, Response Time: 896 ms
Employees request: Year 2018, School The Ohio State University, Response Time: 2942 ms
Sales request: Year 2017, Month 7, Response Time: 903 ms
Employees request: Year 2020, School University of Toledo, Response Time: 49 ms
Sales request: Year 2019, Month 9, Response Time: 901 ms
Employees request: Year 2022, School University Of Cincinnati, Response Time: 100 ms
Sales request: Year 2017, Month 11, Response Time: 829 ms
Employees request: Year 2012, School Kent State University, Response Time: 1310 ms
Sales request: Year 2019, Month 0, Response Time: 7544 ms
Employees request: Year 2014, School The Ohio State University, Response Time: 679 ms
Sales request: Year 2017, Month 2, Response Time: 429 ms
Employees request: Year 2016, School University Of Cincinnati, Response Time: 48 ms
Sales request: Year 2019, Month 4, Response Time: 784 ms
Employees request: Year 2018, School Kent State University, Response Time: 1192 ms
Sales request: Year 2017, Month 6, Response Time: 917 ms
Employees request: Year 2020, School University of Toledo, Response Time: 77 ms
Sales request: Year 2019, Month 8, Response Time: 927 ms
Employees request: Year 2022, School University Of Cincinnati, Response Time: 94 ms
Sales request: Year 2017, Month 10, Response Time: 1062 ms
Employees request: Year 2012, School The Ohio State University, Response Time: 1131 ms
Sales request: Year 2019, Month 12, Response Time: 249 ms
Employees request: Year 2014, School The Ohio State University, Response Time: 247 ms
Sales request: Year 2017, Month 1, Response Time: 304 ms
Employees request: Year 2016, School Kent State University, Response Time: 1126 ms
Sales request: Year 2019, Month 3, Response Time: 824 ms
Employees request: Year 2018, School Ohio University, Response Time: 1036 ms
Sales request: Year 2017, Month 5, Response Time: 266 ms
Employees request: Year 2020, School University Of Cincinnati, Response Time: 1061 ms
Sales request: Year 2019, Month 7, Response Time: 741 ms
Employees request: Year 2022, School Kent State University, Response Time: 1100 ms
Sales request: Year 2017, Month 9, Response Time: 810 ms
Employees request: Year 2012, School University Of Cincinnati, Response Time: 1127 ms
Sales request: Year 2019, Month 11, Response Time: 950 ms
Employees request: Year 2014, School University of Toledo, Response Time: 1166 ms
Sales request: Year 2017, Month 0, Response Time: 998 ms
Employees request: Year 2016, School Kent State University, Response Time: 38 ms
Sales request: Year 2019, Month 2, Response Time: 118 ms
Employees request: Year 2018, School University Of Cincinnati, Response Time: 116 ms
Sales request: Year 2017, Month 4, Response Time: 6 ms
Employees request: Year 2020, School University of Toledo, Response Time: 62 ms
Sales request: Year 2019, Month 6, Response Time: 155 ms
Employees request: Year 2022, School University of Toledo, Response Time: 1261 ms
Sales request: Year 2017, Month 8, Response Time: 123 ms
Employees request: Year 2012, School Kent State University, Response Time: 51 ms
Sales request: Year 2019, Month 10, Response Time: 122 ms
Employees request: Year 2014, School The Ohio State University, Response Time: 334 ms
Sales request: Year 2017, Month 12, Response Time: 143 ms
Employees request: Year 2016, School Kent State University, Response Time: 55 ms
Sales request: Year 2019, Month 1, Response Time: 116 ms
Employees request: Year 2018, School The Ohio State University, Response Time: 388 ms
Sales request: Year 2017, Month 3, Response Time: 23 ms
Employees request: Year 2020, School The Ohio State University, Response Time: 2953 ms
Sales request: Year 2019, Month 5, Response Time: 253 ms
Employees request: Year 2022, School University Of Cincinnati, Response Time: 118 ms
Sales request: Year 2017, Month 7, Response Time: 116 ms
Employees request: Year 2012, School University Of Cincinnati, Response Time: 85 ms
Sales request: Year 2019, Month 9, Response Time: 164 ms
Employees request: Year 2014, School Ohio University, Response Time: 1291 ms
Sales request: Year 2017, Month 11, Response Time: 94 ms
Employees request: Year 2016, School Ohio University, Response Time: 1168 ms
Sales request: Year 2019, Month 0, Response Time: 1268 ms
Employees request: Year 2018, School Ohio University, Response Time: 59 ms
Sales request: Year 2017, Month 2, Response Time: 3 ms
Employees request: Year 2020, School Ohio University, Response Time: 984 ms
Sales request: Year 2019, Month 4, Response Time: 130 ms
Employees request: Year 2022, School Kent State University, Response Time: 53 ms
Sales request: Year 2017, Month 6, Response Time: 239 ms
Employees request: Year 2012, School The Ohio State University, Response Time: 30 ms
Sales request: Year 2019, Month 8, Response Time: 154 ms
Employees request: Year 2014, School University of Toledo, Response Time: 92 ms
Sales request: Year 2017, Month 10, Response Time: 173 ms
Employees request: Year 2016, School University of Toledo, Response Time: 58 ms
Sales request: Year 2019, Month 12, Response Time: 14 ms
Employees request: Year 2018, School Kent State University, Response Time: 56 ms
Sales request: Year 2017, Month 1, Response Time: 9 ms
Employees request: Year 2020, School The Ohio State University, Response Time: 309 ms
Sales request: Year 2019, Month 3, Response Time: 144 ms
Employees request: Year 2022, School University of Toledo, Response Time: 84 ms
Sales request: Year 2017, Month 5, Response Time: 18 ms
Employees request: Year 2012, School University of Toledo, Response Time: 84 ms
Sales request: Year 2019, Month 7, Response Time: 130 ms
Employees request: Year 2014, School University Of Cincinnati, Response Time: 133 ms

`;

const salesRequests = [];
const employeesRequests = [];

// Dividir los datos en líneas
const lines = data.trim().split('\n');

// Iterar sobre cada línea
for (const line of lines) {
    // Dividir la línea en palabras
    const words = line.split(' ');

    // Obtener el tipo de solicitud (ventas o empleados)
    const requestType = words[0];

    // Obtener el tiempo de respuesta en milisegundos
    const responseTime = parseInt(words[words.length - 2]);

    // Almacenar el tiempo de respuesta en el array correspondiente
    if (requestType === 'Sales') {
        salesRequests.push(responseTime);
    } else if (requestType === 'Employees') {
        employeesRequests.push(responseTime);
    }
}

// Calcular el tiempo de respuesta promedio para cada tipo de solicitud
const averageSalesResponseTime = salesRequests.reduce((acc, curr) => acc + curr, 0) / salesRequests.length;
const averageEmployeesResponseTime = employeesRequests.reduce((acc, curr) => acc + curr, 0) / employeesRequests.length;

// Calcular el tiempo de respuesta promedio total
const totalRequests = salesRequests.concat(employeesRequests);
const averageTotalResponseTime = totalRequests.reduce((acc, curr) => acc + curr, 0) / totalRequests.length;

console.log('Tiempo de respuesta promedio para solicitudes de ventas:', averageSalesResponseTime.toFixed(2), 'ms');
console.log('Tiempo de respuesta promedio para solicitudes de empleados:', averageEmployeesResponseTime.toFixed(2), 'ms');
console.log('Tiempo de respuesta promedio total:', averageTotalResponseTime.toFixed(2), 'ms');