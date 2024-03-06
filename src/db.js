// const mysql = require("mysql2/promise");

// async function connectDB() {
//   const connection = await mysql.createConnection({
//     host: 'ep-red-rice-a5zv1g82.us-east-2.aws.neon.tech',
//     user: 'Rest02',
//     password: '5WzPRdelj1YL',
//     database: 'expressdb',
//     ssl:{
//         rejectUnauthorized: false
//     }
//   });

//   const result = await connection.query('SELECT "hello world" AS RESULT ');
//   console.log(result);
// }

// module.exports = connectDB;