// index.js
console.log('Hello, Node.js!');
const connectDB = require('./config/db');
const startCronJob = require('./cron/fetchCron');

connectDB();
startCronJob();
