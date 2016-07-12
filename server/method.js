Meteor.methods({
    removeAllUsers: function(){
        UsersBookLook.remove({});
    },
    removeAllUserBooks: function(){
        UserBooks.remove({});
    },
   