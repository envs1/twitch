var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

users.forEach(function (user) {
    fetch("https://wind-bow.gomix.me/twitch-api/" + user, {
        headers: {
            'Client-ID': 'xg0f37yzeg6izr3meybs4oz9lhymo8'
        },
        method: 'GET'
    })
        .then(function (response) { return response.json(); })
        .then(function (json) {
        Object.preventExtensions(json);
        var userInfo = {
            status: 'Offline',
            user: user
        };
        if (json.stream !== null) {
            userInfo.status = json.stream.game + " " + json.stream.channel.status;
            insertUsers(userInfo, 'online');
        }
        else {
            insertUsers(userInfo, 'offline');
        }
        insertUsers(userInfo, 'all');
    });
});
var insertUsers = function (userInfo, flag) {
    document.getElementById(flag + "UserContent").innerHTML += "\n  <a href='https://www.twitch.tv/" + userInfo.user + "' target='_blank'>\n  <div class=\"userEntry\">\n  <span class=\"userName\">" + userInfo.user + "</span>\n  <span class=\"userStatus\">" + userInfo.status + "</span>\n  </div>\n  </a>\n  ";
};

var openContent = function (evt, contentId) {
    var navLink, linkContent;

    navLink = document.getElementsByClassName('navLink');
    for (var i = 0; i < navLink.length; i++) {
        navLink[i].className = navLink[i].className.replace('activeLink', '');
    }

    linkContent = document.getElementsByClassName('linkContent');
    for (var i = 0; i < linkContent.length; i++) {
        linkContent[i].style.display = 'none';
    }

    document.getElementById(contentId).style.display = 'block';
    evt.currentTarget.className += ' activeLink';
};