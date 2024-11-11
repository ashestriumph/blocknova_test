const axios = require('axios');
require('dotenv').config();

const fetchTransactions = async (address) => {
   try {
      const response = await axios.post(
         'https://graphql.bitquery.io',
         {
            query: `
               {
                  ethereum {
                     transactions(
                        txHash: "${address}"
                     ) {
                        hash
                        from {
                           address
                        }
                        to {
                           address
                        }
                        value
                     }
                  }
               }
            `,
         },
         { headers: { 'X-API-KEY': process.env.BITQUERY_API_KEY } }
      );
      return response.data.data.ethereum.transactions;
   } catch (error) {
      console.error('Error fetching transactions:', error);
   }
};

module.exports = fetchTransactions;
