Template.navTop.onRendered(function(){
    smoothScroll.init({
            speed : 1000,
            easing : 'easeInQuart'
        }
    );
    this.$(".button-collapse").sideNav();
});
Template.navTop.events={
    'click .navmenu': function (e) {
        e.preventDefault();
    },
    'click .login-btn': function (e) {
        e.preventDefault();
        if(Session.get('adminEmailSess')==null)
            Router.go('/login');
        else
            Router.go('/content');
    }
};
Template.navTop.helpers({
    inOrOut: function () {
        if(Session.get('adminEmailSess')==null)
            return "Login";
        else
            return "Logout";
    }
});