const BadRequestError = require("./src/errors/bad-request");
const { whapi_url } = require("./whapi.config");
const { getCommunities, getSubGroupsOfCommunity } = require('./src/services/communities/communities');
const { getGroups, createGroup, acceptGroupInvite, getGroupDetails, sendGroupInvite } = require("./src/services/groups/groups");
const { sendTextMessage } = require("./src/services/messages/messages");


class WhapiClient {
   /**
     * Creates a new instance of WhapiClient.
     *
     * @param {Object} options - Options for whapi-client.
     * @param {string} options.token - The Token for authentication.
     */
   constructor(options) {
      if (!options || !options.token) {
         throw new BadRequestError('Token is required!', 'en');
      }
      this.token = options.token;
      this.baseUrl = whapi_url;
   }

   /**
    * Returns the headers for authentication.
    *
    * @returns {Object} - The headers object including the Authorization token.
    */
   getHeaders() {
      return {
         Authorization: `Bearer ${this.token}`,
         "Content-Type": "application/json",
      };
   }

   /**
    * Gets Your Communities.
    *
    * @param {Number} count - The number of communities that you want to retrieve.
    *                          This will limit the number of communities returned by the API.
    *                          E.g., If `count` is 5, it will retrieve 5 communities.
    *
    * @returns {Promise<Object>} - The response from the API containing the requested communities.
    *
    * @throws {Error} - Throws error if the request fails, such as network errors, or invalid parameters.
    */
   async getCommunities(count) {
      try {
         return await getCommunities(this.token, count);
      } catch (error) {
         throw error;
      }
   };
   /**
    * Fetches the subgroups of a community.
    * 
    * @param {string} communityId - The unique identifier for the community.
    * @returns {Promise<any>} A promise that resolves with the subgroups of the community.
    * @throws {Error} Throws an error if the request fails.
    */
   async getSubGroupsOfCommunity(communityId) {
      try {
         return await getSubGroupsOfCommunity(this.token, communityId);
      } catch (error) {
         throw error;
      }
   };
   /**
    * Fetches a list of groups.
    * 
    * @param {number} count - The number of groups to retrieve.
    * @returns {Promise<any>} A promise that resolves with the list of groups.
    * @throws {Error} Throws an error if the request fails.
    */
   async getGroups(count) {
      try {
         return await getGroups(this.token, count);
      } catch (error) {
         throw error;
      }
   };

   /**
    * Creates a group with the given details.
    * 
    * @param {string} subject - The subject or name of the group.
    * @param {Array<string>} participants - An array of participants' identifiers (e.g., user IDs).
    * @param {boolean} [isHidden] - A flag indicating whether the group is hidden. This is optional.
    * @returns {Promise<any>} A promise that resolves with the response data from the group creation.
    * @throws {BadRequestError} Throws a `BadRequestError` if any validation fails (e.g., missing or invalid fields).
    */
   async createGroup(subject, participants, isHidden) {
      try {
         if (!subject) {
            throw new BadRequestError('subject is required');
         };
         if (typeof subject !== 'string') {
            throw new BadRequestError('subject field should be string');
         };
         if (!participants) {
            throw new BadRequestError('participants field is required');
         };
         if (participants && !Array.isArray(participants)) {
            throw new BadRequestError('participants should be an array of strings');
         };
         if (!isHidden) {
            isHidden = false;
         };
         return await createGroup(this.token, subject, participants, isHidden);
      } catch (error) {
         throw error;
      }
   };
   /**
    * Accepts an invite to join a group using the provided invite code.
    * 
    * @param {string} inviteCode - The invite code that identifies the group invitation.
    * @returns {Promise<any>} A promise that resolves with the response data from accepting the invite.
    * @throws {Error} Throws an error if the invite acceptance fails.
    */
   async acceptGroupInvite(inviteCode) {
      try {
         return await acceptGroupInvite(inviteCode);
      } catch (error) {
         throw error;
      }
   };
   /**
    * Fetches the details of a group using the group ID.
    * 
    * @param {string} groupId - The unique identifier for the group whose details are to be fetched.
    * @returns {Promise<any>} A promise that resolves with the details of the group.
    * @throws {Error} Throws an error if the request to get group details fails.
    */
   async getGroupDetails(groupId) {
      try {
         return await getGroupDetails(this.token, groupId);
      } catch (error) {
         throw error;
      }
   };
   /**
    * Sends an invitation to join a group using the provided invite code.
    * 
    * @param {string} inviteCode - The invite code for the group to send the invitation.
    * @returns {Promise<any>} A promise that resolves with the response data from sending the invite.
    * @throws {Error} Throws an error if sending the invite fails.
    */
   async sendGroupInvite(inviteCode) {
      try {
         return await sendGroupInvite(this.token, inviteCode);
      } catch (error) {
         throw error;
      }
   };
   /**
    * Sends a text message to a specified recipient.
    * 
    * @param {string} to - The recipient's unique identifier (e.g., phone number or user ID).
    * @param {string} message - The text message to be sent.
    * @returns {Promise<any>} A promise that resolves with the response data from sending the message.
    * @throws {Error} Throws an error if sending the message fails.
    */
   async sendTextMessage(to, message) {
      try {
         return await sendTextMessage(this.token, to, message);
      } catch (error) {
         throw error;
      }
   };


};

module.exports = WhapiClient;
