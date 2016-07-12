Template.daftar_user.helpers({
    userList: function () {
        return UsersBookLook.find()
    },
    userData: function () {
        return UsersBookLook.findOne({_id:Session.get('userDiklikId')})
    },
    userBooks: function () {
        Meteor.subscribe('requestMyBook', Session.get('userDiklikEmail'));
        return UserBooks.find({email_user:Session.get('userDiklikEmail')})
    }
});
Template.userRow.events({
   'click .detail': function(evt, tmpl){
       evt.preventDefault();
       console.log(this._id, this.email);
       Session.set('userDiklikId', this._id);
       Session.set('userDiklikEmail', this.email);
   },
   'click .delete': function(evt, tmpl){
       evt.preventDefault();
       console.log(this._id);
       UsersBookLook.remove({_id:this._id});
   }
});
Template.userRow.onRendered(function(){
    //this.autorun(function () {
    //});
    this.$('.modal-trigger').leanModal();
});