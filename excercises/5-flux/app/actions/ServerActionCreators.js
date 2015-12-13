var { ActionTypes } = require('../Constants');
var AppDispatcher = require('../AppDispatcher');

var ServerActionCreators = {
  loadedContacts (contacts) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.CONTACTS_LOADED,
      contacts: contacts
    });
  },
  removedContact (contact) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.CONTACT_REMOVED,
      contact: contact,
    });
  },
};

module.exports = ServerActionCreators;

