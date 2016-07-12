Meteor.methods({
    removeAllUsers: function(){
        UsersBookLook.remove({});
    },
   