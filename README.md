# whapi-client

`whapi-client` is a client library for interacting with the WhatsApp API, allowing you to manage groups, send messages, and handle group invites easily.

## Features
- Create and manage WhatsApp groups.
- Send text messages.
- Accept and send group invites.
- Fetch group details and other utilities.

## Installation
Install the library using npm or yarn:
```bash
npm install whapi-client
```
or
```bash
yarn add whapi-client
```

## Usage

### Importing the Library
```javascript
const WhapiClient = require('whapi-client');
```

### Initializing the Client
```javascript
const client = new WhapiClient({token:'your-access-token'});
```

### API Methods

#### `createGroup(subject, participants, isHidden)`
Creates a new group.

- **Parameters:**
  - `subject` *(string)*: The name of the group (required).
  - `participants` *(Array<string>)*: An array of participants' identifiers (required).
  - `isHidden` *(boolean, optional)*: Whether the group should be hidden.
- **Returns:** A promise resolving to the created group details.

#### Example:
```javascript
await client.createGroup('My Group', ['user1', 'user2'], true);
```

---

#### `acceptGroupInvite(inviteCode)`
Accepts an invite to join a group.

- **Parameters:**
  - `inviteCode` *(string)*: The invite code of the group (required).
- **Returns:** A promise resolving to the response from the server.

#### Example:
```javascript
await client.acceptGroupInvite('INVITE123');
```

---

#### `getGroupDetails(groupId)`
Fetches details of a group.

- **Parameters:**
  - `groupId` *(string)*: The unique identifier of the group (required).
- **Returns:** A promise resolving to the group details.

#### Example:
```javascript
const groupDetails = await client.getGroupDetails('GROUP123');
```

---

#### `sendGroupInvite(inviteCode)`
Sends an invitation to join a group.

- **Parameters:**
  - `inviteCode` *(string)*: The invite code for the group (required).
- **Returns:** A promise resolving to the response from the server.

#### Example:
```javascript
await client.sendGroupInvite('INVITE123');
```

---

#### `sendTextMessage(to, message)`
Sends a text message to a recipient.

- **Parameters:**
  - `to` *(string)*: The recipient's identifier (e.g., phone number or user ID).
  - `message` *(string)*: The text message content.
- **Returns:** A promise resolving to the response from the server.

#### Example:
```javascript
await client.sendTextMessage('user1', 'Hello, this is a test message!');
```

## Error Handling
Each method throws an error if the operation fails. Make sure to handle errors appropriately:
```javascript
try {
   await client.createGroup('My Group', ['user1', 'user2']);
} catch (error) {
   console.error('Error creating group:', error.message);
}
```

## License
This library is licensed under the [MIT License](LICENSE).

---

For detailed documentation or support, feel free to reach out to the library maintainers.

