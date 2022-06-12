// SPDX-License-Identifier: MIT


pragma solidity >=0.6.0 <0.9.0;
contract HelloWorld {
    event updatedmessages(string oldStr, string newStr);

    string public message;

    constructor (string memory initmessage) {
    message = initmessage;
    }

    function update(string memory newMessage) public {
       string memory oldMsg = message;
       message = newMessage;
       emit updatedmessages(oldMsg,newMessage);
    }
}