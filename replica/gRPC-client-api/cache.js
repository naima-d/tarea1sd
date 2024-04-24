const { createClient } = require('redis');

const client = createClient({
  host: 'localhost',
  port: 6379
})
  .on('error', err => console.log('Redis Client Error', err))
  .on('connect', () => {
    console.log('Connected to Redis');
    client.config('get', '*', (err, reply) => {
      if (err) {
        console.error('Error al obtener la configuración del servidor', err);
      } else {
        const maxmemoryIndex = reply.indexOf('maxmemory');
        const maxmemoryPolicyIndex = reply.indexOf('maxmemory-policy');
        if (maxmemoryIndex !== -1) {
          console.log('Tamaño máximo de memoria:', reply[maxmemoryIndex + 1]);
        }
        if (maxmemoryPolicyIndex !== -1) {
          console.log('Política de remoción:', reply[maxmemoryPolicyIndex + 1]);
        }
      }
    });
  });

module.exports = client;