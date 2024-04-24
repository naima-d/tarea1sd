const axios = require('axios');

// Función para realizar una solicitud al primer endpoint
async function makeSalesRequest(year, month) {
  const url = `http://192.168.1.130:3000/api/sales?year=${year}&month=${month}`;
  try {
    const startTime = Date.now();
    const response = await axios.get(url);
    const endTime = Date.now();
    console.log(`Sales request: Year ${year}, Month ${month}, Response Time: ${endTime - startTime} ms`);
  } catch (error) {
    console.error('Error making sales request:', error);
  }
}

// Función para realizar una solicitud al segundo endpoint
async function makeEmployeesRequest(year, school) {
  const url = `http://192.168.1.130:3000/api/employees?year=${year}&school=${encodeURIComponent(school)}`;
  try {
    const startTime = Date.now();
    const response = await axios.get(url);
    const endTime = Date.now();
    console.log(`Employees request: Year ${year}, School ${school}, Response Time: ${endTime - startTime} ms`);
  } catch (error) {
    console.error('Error making employees request:', error);
  }
}

// Función para generar hits y misses en caché alternados
async function runRequests() {
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      // Alternar entre solicitudes a sales y employees
      await makeSalesRequest(2017 + i % 4, i % 13);
    } else {
      await makeEmployeesRequest(2011 + i % 12, getRandomUniversity());
    }
  }
}

// Función para obtener una universidad aleatoria de la lista proporcionada
function getRandomUniversity() {
  const universities = [
    'The Ohio State University',
    'University of Toledo',
    'University Of Cincinnati',
    'Kent State University',
    'Ohio University'
  ];
  return universities[Math.floor(Math.random() * universities.length)];
}

// Ejecutar las solicitudes
runRequests();
