const WhapiClient = require("../../index");

function getHeaders(apiKey) {
   return {
     Authorization: `Bearer ${apiKey}`,
     'Content-Type': 'application/json',
   };
 }
const client = new WhapiClient({
  token:""
});

module.exports = { getHeaders };