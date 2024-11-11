const cron = require('node-cron');
const fetchTransactions = require('../services/bitqueryService');
const Transaction = require('../models/Transaction');

const saveTransaction = async (txData) => {
   try {
      const transaction = new Transaction(txData);
      await transaction.save();
      console.log('Transaction saved:', transaction);
   } catch (error) {
      console.error('Error saving transaction:', error);
   }
};

const startCronJob = () => {
   cron.schedule('0 * * * *', async () => {
      console.log('Fetching transactions...');
      const transactions = await fetchTransactions('0x123...');
      if (transactions) {
         transactions.forEach(async (tx) => await saveTransaction(tx));
      }
   });
};

module.exports = startCronJob;
