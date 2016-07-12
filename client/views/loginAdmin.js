Template.loginAdmin.events({
    'click #cekAdmin': function (e, tmpl) {
        e.preventDefault();
        var email = tmpl.find('#email').value;
        var pass = tmpl.find('#password').value;
        Session.set('adminEmailSess', email);
        console.log(Session.get('adminEmailSess'));
        var cek = AdminUser.find({email: email}).count();
        console.log(cek);

        //Session.set('adminTF', true);
        //Router.go('/admin');
        //
        if (cek>0){
            Session.set('adminTF', true);
            Router.go('/admin');
        }
        else{
            Session.set('adminTF', false);
            Session.set('adminEmailSess', null);
        }
    }
});
