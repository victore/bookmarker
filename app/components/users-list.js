import Component from '@ember/component';

const UsersListComponent = Component.extend({
  // Img Class
  imgClass: "avatar",
  click() {
    console.log("users-list was clicked!");
    return false;
  }
});

UsersListComponent.reopenClass({
  positionalParams: ['avatarUrl', 'email']
});

export default UsersListComponent;
