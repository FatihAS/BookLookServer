Meteor.publish('requestBookList', function(cons_email, cons_long, cons_lat) {
  // check(email_user, String);
  return UserBooks.find({});
});
Meteor.publish('requestMessage', function(roomid) {
  // check(email_user, String);
  return Chats.find({room_id:roomid});
});
Meteor.publish('requestSignIn', function(email, password) {
  // check(email_user, String);
  //console.log("email user : "+email+"\npassword : "+password);
  return UsersBookLook.find({
    email: email, 
    password: password
  });
});
Meteor.publish('requestChatRoom', function(cons_email, email_user_second_temp, bookidTemp) {
  // check(email_user, String);
  //console.log("email user : "+cons_email+"\nemail user second : "+email_user_second_temp+"\nBookid : "+bookidTemp);
  return Chatrooms.find({
    email_user_first: cons_email, 
    email_user_second: email_user_second_temp,
    bookid: bookidTemp
  });
});
Meteor.publish('requestChatRoomId', function(roomid) {
  return Chatrooms.find({
  	_id: roomid
  });
});
// Meteor.publish('requestListChat', function(roomid, cons_email) {
//   // check(email_user, String);
//   return [
//     Chatrooms.find({
//       $and : [
//         { roomid:roomid }, 
//         { $or:[{email_user_first:cons_email},{email_user_second:cons_email}] }
//       ]
//     }),
//     Chats.find({
//       $and : [
//         { roomid:roomid }, 
//         { $or:[{email_user_first:cons_email},{email_user_second:cons_email}] }
//       ]
//     })
//   ];
// });

// Meteor.publish('requestListChatRoom', function(cons_email) {
//   // check(email_user, String);
//   return [
//     Chatrooms.find({
//       $or:[{email_user_first:cons_email},{email_user_second:cons_email}]
//     }),
//     Chats.find({
//       email:cons_email
//     }),
//     UsersBookLook.find({
//       $or:[{email_user_first:cons_email},{email_user_second:cons_email}]
//     })
//   ];
// });
// Meteor.publish('requestListChatRoom', function(cons_email) {
//   // check(email_user, String);
//   return Chatrooms.find({ 
//     $or:[{email_user_first:cons_email},{email_user_second:cons_email}] 
//   });
// });
// Meteor.publish('requestListChatChat', function(roomid) {
//   // check(email_user, String);
//   return Chats.find(
//     { roomid : roomid }
//     );
// });
// Meteor.publish('requestListChatUserBook', function(bookid) {
//   // check(email_user, String);
//   return UserBooks.find({ 
//     _id : bookid
//   });
// });
// Meteor.publish('requestListChatUserDetail', function(email_user) {
//   // check(email_user, String);
//   return [
//     UserDetail.find({ 
//       email_user : email_user
//     }),
//     UsersBookLook.find({
//       email_user : email_user
//     })
//   ];
// });


Meteor.publish('requestListChat', function(cons_email) {
  // check(email_user, String);
  return ListChat.find({ 
    $or:[{email_user_first:cons_email},{email_user_second:cons_email}]
  });
});

Meteor.publish('requestImgProfile', function(email_user_second) {
  // check(email_user, String);
  return [
    UserDetail.find({ 
      email_user : email_user_second
    }),
    UsersBookLook.find({
      email : email_user_second
    })
  ];
});

Meteor.publish('requestMyBook', function(email) {
  return UserBooks.find({ 
    email_user : email
  });
});

Meteor.publish('requestMyBookLimit', function(email) {
  return UserBooks.find(
    {
      email_user : email
    }, 
    {
      limit: 3
    });
});

Meteor.publish('requestFindBook', function(find) {
  //console.log("find : "+find);
  return UserBooks.find({ 
    title : {$regex: find, $options: '-i'}
  });
});

Meteor.publish('requestLocation', function(email) {
  return Locations.find({ 
    email_user : { $ne: email }
  });
});

Meteor.publish('requestBookTitle', function(bookid) {
  return UserBooks.find({ 
    _id : bookid
  });
});

Meteor.publish('requestListChatId', function(roomid) {
  return ListChat.find({ 
    room_id : roomid
  });
});

Meteor.publish('requestNotifListChat', function(chatId) {
  return ListChat.find({ 
    _id : chatId
  });
});

Meteor.publish('requestAllUserList', function() {
  return UsersBookLook.find();
});

Meteor.publish('requestAdmin', function() {
  return AdminUser.find();
});










