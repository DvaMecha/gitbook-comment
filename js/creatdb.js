var fs = require("fs");
var file = "comment.db";
var exists = fs.existsSync("../db/"+file);


var sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database(file); //connect to our file/database
var table_name = "comments" //创建一张表comments

var dbmanger = {


};

dbmanger.init=function(){

};

dbmanger.checkPath = function () {

};
dbmanger.creatDB = function () {
    //creat a table student
    db.run("CREATE TABLE IF NOT EXISTS  " + table_name + "  (" +
        "sid  INTEGER PRIMARY KEY autoincrement," + //字段
        "email  TEXT    ," + //字段
        "txt    TEXT ," + //字段
        "up   INTEGER  " + //字段
        ") ");
};
dbmanger.addItem = function (item) {
    id=item.id||null;
    //数据库对象的run函数可以执行任何的SQL语句
    var insert = db.prepare("INSERT OR REPLACE  INTO " + table_name + "(sid,name) VALUES (?,?)"); //插入或者替换数据，
    insert.run(i, "stu" + i); //insert some data.
    insert.finalize(); //operater finish

};
dbmanger.searchItems = function () {
    //数据库查询
    db.each("SELECT rowid AS id, sid,name FROM " + table_name + "", function (err, row) {
        console.log(row.id + ": " + row.sid + "  " + row.name);
    });
};
dbmanger.deleItem = function (id) {
    //删除一条数据：
    var del = db.prepare("DELETE from " + table_name + " where sid=?")
    del.run(id)
    del.finalize();

};



module.exports = dbmanger;