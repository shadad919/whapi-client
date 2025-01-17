const axios = require('axios');
const { whapi_url } = require('../../../whapi.config');



async function sendTextMessage(token,to,body) {
   try {
      const response = await axios.post(
         `${whapi_url}/messages/text`,
         {
            to,
            body,
         },
         {
            headers:{
               Authorization:`Bearer ${token}`,
               'Content-Type':"application/json",
            },
         }
      );
      return response.data;
   } catch (error) {
      throw error;
   }
}


module.exports = {
   sendTextMessage,
};


