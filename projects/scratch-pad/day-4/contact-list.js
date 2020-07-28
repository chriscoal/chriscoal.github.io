// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var contact = {
        id : id,
        nameFirst : nameFirst,
        nameLast : nameLast
};   
    return contact;
}

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    return {
        // we implemented the length api for you //
        length : function() {
            return contacts.length;
        },
        // add a contact object to the array made for the contact list
        addContact: function(contact){
            contacts.push(contact);
        },
        findContact: function(fullName){
            // loop through all contacts
            //return contact object that hasProperty of Full Name
            
            for (var i = 0; i < contacts.length; i++)
                if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){
                    // end loop if contact is found and return the contact by calling the contacts index at the point where statement is true
                    return contacts[i];
                }   else {
                    return undefined;
                }
                },
        removeContact: function(contact){
            // intialize value  of the index the contact getting removed is at
            // use splice to take out 1 value at the removeindex in contacts array
            var removeIndex = contacts.indexOf(contact);
            contacts.splice(removeIndex, 1);
        },
        printAllContactNames: function(){
            // initialize array to store values
            // loop through contacts array to call on stored properties
            // return string with seperated onto new lines
            var allContacts = [];
            for (var i = 0; i < contacts.length; i++){
                allContacts.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
                }
            return (allContacts.join("\n"));
        }
        
    };
}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
