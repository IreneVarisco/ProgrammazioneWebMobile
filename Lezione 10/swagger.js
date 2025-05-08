const swaggerAutogen = require('swagger-autogen')({openapi: "3.0.0"});

const doc = {
    info:{
        title: "PWM API",
        description: `Swagger delle api pwm`
    },
    host: "localhost:3005"
};

const outputFile = './swagger.json';
const inputFile = ['./main.js'];

swaggerAutogen(outputFile, inputFile, doc);