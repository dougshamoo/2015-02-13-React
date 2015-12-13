var xhr = require('../lib/xhr');
var { API, ActionTypes } = require('../Constants');
var ServerActionCreators = require('../actions/ServerActionCreators');

var ApiUtils = {
  loadContacts () {
    xhr.getJSON(`${API}/contacts`, (err, res) => {
      ServerActionCreators.loadedContacts(res.contacts);
    });
  },
  removeContact (contact) {
    xhr.deleteJSON(`${API}/contacts/${contact.id}`, () => {
      ServerActionCreators.removedContact(contact);
    });
  },
};

module.exports = ApiUtils;

