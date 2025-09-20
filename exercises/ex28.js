/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
    name: "John",
    friends: 0,
    messages: ["This is my first message", "This is my second message"],
    postMessage: function postMessage(message) {
        this.messages.push(message);
    },
    deleteMessage: function deleteMessage(index) {
        this.messages.splice(index, 1);
    },
    addFriend: function addFriend() {
        this.friends++;
    },
    removeFriend: function removeFriend() {
        this.friends--;
    }
}

facebookProfile.postMessage("This is my third message");
facebookProfile.deleteMessage(0);
facebookProfile.addFriend();
facebookProfile.removeFriend();