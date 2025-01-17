const axios = require("axios");
const { whapi_url } = require("../../../whapi.config");



async function getGroups(token, count) {
   try {
      const response = await axios.get(
         `${whapi_url}/groups?count=${count}`,
         {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         }
      );
      return response.data;
   } catch (error) {
      throw error;
   }
};

async function createGroup(token,communityId, subject, participants, isHidden) {
   try {
      const response = await axios.post(
         `${whapi_url}/communities/${communityId}/createGroup`,
         {
            subject,
            participants,
            isHidden
         },
         {
            headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': "application/json",
            }
         }
      );
      return response.data;
   } catch (error) {
      throw error;
   }
};

async function acceptGroupInvite(token, inviteCode) {
   try {
      const response = await axios.put(
         `${whapi_url}/groups`,
         {
            inviteCode
         },
         {
            headers: {
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json",
            },
         }
      );
      return response.data;
   } catch (error) {
      throw error;
   }
};

async function getGroupDetails(token, groupId) {
   try {
      const response = await axios.get(
         `${whapi_url}/groups/${groupId}`,
         {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         }
      );
      return response.data;
   } catch (error) {
      throw error;
   }
};

async function sendGroupInvite(token,inviteCode) {
   try {
      const response = await axios.post(
         `${whapi_url}/groups/link`,
         {
            inviteCode,
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
};


module.exports = {
   getGroups,
   createGroup,
   acceptGroupInvite,
   sendGroupInvite,
   getGroupDetails,
};
