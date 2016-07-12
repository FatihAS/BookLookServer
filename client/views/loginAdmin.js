Template.loginAdmin.events({
    'click #cekAdmin': function (e, tmpl) {
        e.preventDefault();
        var email = tmpl.find('#email').value;
