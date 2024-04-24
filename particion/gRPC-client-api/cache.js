const Redis = require('redis');

// Configuración de la conexión al clúster de Redis
const client = Redis.createClient({
  cluster: [
    { host: 'localhost', port: 6379},
    { host: 'localhost', port: 6380},
    { host: 'localhost', port: 6381}
  ]
});

// Manejo de errores
client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

// Evento de conexión exitosa
client.on('connect', () => {
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
