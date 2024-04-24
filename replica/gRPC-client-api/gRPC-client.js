const PROTO_PATH = './protos/archivo.proto';

var parseArgs = require('minimist');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var archivoProto = grpc.loadPackageDefinition(packageDefinition).archivoProto;

var argv = parseArgs(process.argv.slice(2), {
    string: 'target'
});

var target;
if (argv.target) {
    target = argv.target;
} else {
    target = 'localhost:50051';
}
  
var client = new archivoProto.Services(target, grpc.credentials.createInsecure());

module.exports = client;