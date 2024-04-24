const cache = require('./cache');
const grpcClient = require('./gRPC-client');

exports.sales = async (req, res) => {
    const year = parseInt(req.query.year);
    const month = parseInt(req.query.month);

    if (isNaN(month) || month < 0 || month > 12) {
        return res.status(400).json({ error: 'El mes debe ser un número válido' });
    }

    try {
        // ver si está en cache
        await cache.get(`sales:${year}:${month}`, async (err, result) => {
            if (err) {
                console.error('Error al consultar Redis:', err);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }
            if (result) {
                // cache hit
                console.log('CACHE HIT');
                res.json(JSON.parse(result));
            } else {
                // cache miss
                console.log('CACHE MISS');

                try {
                    // consultar al servidor gRPC
                    const request = { year, month };
                    const rows = [];

                    const call = grpcClient.GetSales(request);

                    // manejar respuesta de forma asincrónica
                    await call.on('data', async (data) => {
                        rows.push(data);
                    });

                    await call.on('end', async () => {
                        if (rows.length === 0) {
                            const message = 'No hay datos';
                            // guardar en cache
                            cache.set(`sales:${year}:${month}`, JSON.stringify(message), (err) => {
                                if (err) {
                                    console.error('Error al guardar en Redis:', err);
                                }
                            });
                            res.json({ message });
                        } else {
                            // guardar en cache
                            cache.set(`sales:${year}:${month}`, JSON.stringify(rows), (err) => {
                                if (err) {
                                    console.error('Error al guardar en Redis:', err);
                                }
                            });
                            res.json(rows);
                        }
                    });
                } catch (error) {
                    console.error('Error al comunicarse con el servidor gRPC:', error);
                    res.status(500).json({ error: 'Error interno del servidor' });
                }
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

exports.employees = async (req, res) => {
    const year = parseInt(req.query.year);
    var school = req.query.school;

    if(school == '') {
        school = 'no';
    }

    try {
        // ver si está en cache
        await cache.get(`employees:${year}:${school}`, async (err, result) => {
            if (err) {
                console.error('Error al consultar Redis:', err);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }
            if (result) {
                // cache hit
                console.log('CACHE HIT');
                res.json(JSON.parse(result));
            } else {
                // cache miss
                console.log('CACHE MISS');

                try {
                    // consultar al servidor gRPC
                    const request = { year, school};
                    const rows = [];

                    const call = grpcClient.GetEmployees(request);

                    // manejar respuesta de forma asincrónica
                    await call.on('data', async (data) => {
                        rows.push(data);
                    });

                    await call.on('end', async () => {
                        if (rows.length === 0) {
                            const message = 'No hay datos';
                            // guardar en cache
                            cache.set(`employees:${year}:${school}`, JSON.stringify(message), (err) => {
                                if (err) {
                                    console.error('Error al guardar en Redis:', err);
                                }
                            });
                            res.json({ message });
                        } else {
                            // guardar en cache
                            cache.set(`employees:${year}:${school}`, JSON.stringify(rows), (err) => {
                                if (err) {
                                    console.error('Error al guardar en Redis:', err);
                                }
                            });
                            res.json(rows);
                        }
                    });
                } catch (error) {
                    console.error('Error al comunicarse con el servidor gRPC:', error);
                    res.status(500).json({ error: 'Error interno del servidor' });
                }
            }
        });
    } catch (error) {
        console.error('Error al comunicarse con el servidor gRPC:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};