Meteor.methods({
    removeAllUsers: function(){
        UsersBookLook.remove({});
    },
    removeAllUserBooks: function(){
        UserBooks.remove({});
    },
    removeAllUserDetail: function(){
        UserDetail.remove({});
    },
   