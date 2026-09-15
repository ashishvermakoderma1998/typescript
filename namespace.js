"use strict";
var UserNameSpace;
(function (UserNameSpace) {
    class Auth {
        login() {
            console.log("user login function");
        }
    }
    UserNameSpace.Auth = Auth;
    function getList() {
        console.log("list of users", apiURL);
    }
    UserNameSpace.getList = getList;
    const apiURL = "www.ashishweddingfilm.in";
})(UserNameSpace || (UserNameSpace = {}));
var AdminNameSpace;
(function (AdminNameSpace) {
    class Auth {
        login() {
            console.log("user login function");
        }
    }
    AdminNameSpace.Auth = Auth;
    function getList() {
        console.log("list of users");
    }
    AdminNameSpace.getList = getList;
})(AdminNameSpace || (AdminNameSpace = {}));
var user8 = new UserNameSpace.Auth();
user8.login();
UserNameSpace.getList();
