Template.loginAdmin.events({
    'click #cekAdmin': function (e, tmpl) {
        e.preventDefault();
        var email = tmpl.find('#email').value;
        var pass = tmpl.find('#password').value;
        Session.set('adminEmailSess', email);
        console.log(Session.get('adminEmailSess'));
