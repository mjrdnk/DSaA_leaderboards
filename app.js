var newData = [];
var oldStudentNumer = "Test team";
var pointsName = "281537";
var newStudentNumer = oldStudentNumer;

document.write("<table id='leaderboards'><tr id='title'><td>" + "student number" + "</td>");
document.write("<td>" + "points" + "</td></tr>");

for(var i=0; i<data.length; i++) {
    newData[i] = {
        studentNumber: data[i][newStudentNumer],
        points: data[i][pointsName]
    }; 

    document.write("<tr><td class='student'>" + newData[i].studentNumber.slice(1) + "</td>");
    document.write("<td class='points'>" + newData[i].points + "</td></tr>");
}

document.write("<table>");