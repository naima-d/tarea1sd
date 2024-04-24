const db = require('./db.js');

module.exports.GetSales = function(call, callback) {
    const year = call.request.year;
    const month = call.request.month;
    console.log('año recibido:', year);
    console.log('mes recibido:', month);

    let query;
    let params;
    
    if (month === 0) {
        query = 'SELECT * FROM retail_sales WHERE year = ?';
        params = [year];
    } else {
        query = 'SELECT * FROM retail_sales WHERE year = ? AND month = ?';
        params = [year, month];
    }

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            return callback(err, null);
        }

        const dateResponses = results.map(row => ({
            year: row.year,
            month: row.month,
            supplier: row.supplier,
            item_code: row.item_code,
            item_description: row.item_description,
            item_type: row.item_type,
            retail_sales: row.retail_sales,
            retail_transfers: row.retail_transfers,
            warehouse_sales: row.warehouse_sales
        }));

        // Enviar cada respuesta al cliente gRPC
        dateResponses.forEach(dateResponse => call.write(dateResponse));

        // Indicar que la transmisión de datos ha finalizado
        call.end();

        console.log('Respuesta enviada\n');
    });
};

module.exports.GetEmployees = function(call, callback) {
    const year = call.request.year;
    const school = call.request.school;
    console.log('año recibido:', year);
    console.log('school recibida:', school);

    let query;
    let params;
    
    if (year === 0) {
        query = 'SELECT * FROM university_employee WHERE school = ?';
        params = [school];
    } else if (school == 'no') {
        query = 'SELECT * FROM university_employee WHERE year = ?';
        params = [year];
    } else {
        query = 'SELECT * FROM university_employee WHERE year = ? AND school = ?';
        params = [year, school];
    }

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            return callback(err, null);
        }

        const dateResponses = results.map(row => ({
            name: row.name,
            school: row.school,
            job_description: row.job_description,
            department: row.department,
            earnings: row.earnings,
            year: row.year
        }));

        // Enviar cada respuesta al cliente gRPC
        dateResponses.forEach(dateResponse => call.write(dateResponse));

        // Indicar que la transmisión de datos ha finalizado
        call.end();

        console.log('Respuesta enviada\n');
    });
};