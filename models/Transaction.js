const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
   hash: String,
   amount: Number,
   from: String,
   to: String,
});

transactionSchema.index({ hash: 1 });

module.exports = mongoose.model('Transaction', transactionSchema);
