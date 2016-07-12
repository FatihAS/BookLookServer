Router.configure({
    layoutTemplate: 'layout',
    //loadingTemplate: "loading",
    //notFoundTemplate: "notFound"
});
Router.route('/', function () {
    this.layout('layout');
    this.render('content');
});
Router.route('/login', function () {
    this.layout('layout');
    Meteor.subscribe('requestAdmin');
    this.render('loginAdmin');
    //else{
    //    this.render('login');
    //}
});
Router.route('/admin',function(){
    this.layout('layout');
    Meteor.subscribe('requestAllUserList');
    //if (this.ready()) {
    //    this.render('admin');
    //}

    if(Session.get('adminTF')){
        this.render('admin');
    }
});