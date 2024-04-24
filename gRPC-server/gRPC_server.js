const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './protos/archivo.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const archivoProto = grpc.loadPackageDefinition(packageDefinition).archivoProto;
const { GetSales, GetEmployees } = require('./response');


// crear servidor gRPC
const server = new grpc.Server();
server.addService(archivoProto.Services.service, {
    GetSales: GetSales,
    GetEmployees: GetEmployees
});

// iniciar servidor
const PORT = 50051;
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`Connected to port ${PORT}`);
});
