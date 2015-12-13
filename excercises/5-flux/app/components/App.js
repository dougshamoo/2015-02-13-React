var React = require('react');
var ContactsStore = require('../stores/ContactsStore');
var ViewActionCreators = require('../actions/ViewActionCreators');

var App = React.createClass({
  getInitialState () {
    return ContactsStore.getState();
  },

  componentDidMount () {
    ContactsStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadContacts();
  },

  componentWillUnmount () {
    ContactsStore.removeChangeListener(this.handleStoreChange);
  },

  handleStoreChange () {
    this.setState(ContactsStore.getState());
    console.log(this.state);
  },

  removeContact (contact) {
    ViewActionCreators.removeContact(contact);
  },

  renderContacts () {
    return this.state.contacts.map((contact) => {
      return (
          <li>
            {contact.first} {contact.last}
            <button
              onClick={this.removeContact.bind(this, contact)}>
              Remove
            </button>
          </li>
      )
    });
  },

  render () {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul>{this.renderContacts()}</ul>
      </div>
    );
  }
});

module.exports = App;

