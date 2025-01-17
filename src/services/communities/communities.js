const axios = require("axios");
const { whapi_url } = require("../../../whapi.config");

async function getCommunities(token, count) {
   try {
      const response = await axios.get(
         `${whapi_url}/communities?count=${count}`,
         {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         }
      );
      return response.data;
   } catch (error) {
      throw error;
   };
};

async function getSubGroupsOfCommunity(token, communityId) {
   try {
      const response = await axios.get(`${whapi_url}/communities/${communityId}/subGroups`,
         {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         }
      );
      return response.data;
   } catch (error) {
      throw error;
   };
}
module.exports = {
   getCommunities,
   getSubGroupsOfCommunity,
};