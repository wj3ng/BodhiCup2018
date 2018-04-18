//拜託不要把我們的後台打掉 我們只有三天的時間做出整個網站
//如果你真的這麼閒 可以參加板橋高中資訊社

//please don't hack our backstage. We've only got three days to make this site.
//If you really had nothing to do ,we welcome you to the Panqiao Highschool Information Club.

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyChkw4-00ymlvbX85qjhkORSeoomYGkSYY",
    authDomain: "bohdicup2018.firebaseapp.com",
    databaseURL: "https://bohdicup2018.firebaseio.com",
    projectId: "bohdicup2018",
    storageBucket: "bohdicup2018.appspot.com",
    messagingSenderId: "480325629635"
};
firebase.initializeApp(config);
var database = firebase.database();


function writeMinecraftData(uname ,cls_seat ,email ,mc_id) {
	var current_timestamp = Date.now();
	firebase.database().ref('minecraft/users/' + current_timestamp).set({
		username: uname,
		class_seat: cls_seat,
		email: email,
		minecraft_id: mc_id
	});
}

function register_minecraft()
{
	var uname = document.getElementById("name").value; 
	var class_seat = document.getElementById("class_seat").value; 
	var email = document.getElementById("usr_email").value; 
	var gid = document.getElementById("gid").value; 
	
	writeMinecraftData(uname ,class_seat ,email ,gid);
	//writeMinecraftData('吳邦寧' ,'11707' ,'ggininder@gmail.com' ,'diamondRay');
}



function writeLolData() {
	//non-finished function.
}
//拜託不要把我們的後台打掉 我們只有三天的時間做出整個網站
//如果你真的這麼閒 可以參加板橋高中資訊社

//please don't hack our backstage. We've only got three days to make this site.
//If you really had nothing to do ,we welcome you to the Panqiao Highschool Information Club.

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyChkw4-00ymlvbX85qjhkORSeoomYGkSYY",
    authDomain: "bohdicup2018.firebaseapp.com",
    databaseURL: "https://bohdicup2018.firebaseio.com",
    projectId: "bohdicup2018",
    storageBucket: "bohdicup2018.appspot.com",
    messagingSenderId: "480325629635"
};
firebase.initializeApp(config);
var database = firebase.database();


function writeMinecraftData(uname ,cls_seat ,email ,mc_id) {
	var current_timestamp = Date.now();
	firebase.database().ref('minecraft/users/' + current_timestamp).set({
		username: uname,
		class_seat: cls_seat,
		email: email,
		minecraft_id: mc_id
	});
}

function register_minecraft()
{
	var uname = document.getElementById("name").value; 
	var class_seat = document.getElementById("class_seat").value; 
	var email = document.getElementById("usr_email").value; 
	var gid = document.getElementById("gid").value; 
	
	writeMinecraftData(uname ,class_seat ,email ,gid);
	//writeMinecraftData('吳邦寧' ,'11707' ,'ggininder@gmail.com' ,'diamondRay');
}



function writeLolData() {
	//non-finished function.
}
