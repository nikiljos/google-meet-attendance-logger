x = document.getElementsByClassName("zWGUib");
y = x.length
arr = new Array()
var arrayToCSV = ""


var meetIDtemp = document.getElementsByClassName("ouH3xe");
var meetID = meetIDtemp[0].innerText


var date_ob = new Date();

// current date
// adjust 0 before single digit date
var date = ("0" + date_ob.getDate()).slice(-2);

// current month
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
var year = date_ob.getFullYear();

var formattedDate = date + "-" + month + "-" + year;

var hours = date_ob.getHours();

// current minutes
var minutes = date_ob.getMinutes();

meetTime = formattedDate + " -- " + hours + "." + minutes + "";
TimeforCSV = formattedDate + "," + hours + ":" + minutes + "";


// 
var meta = "Meeting ID,Meeting Date,Log Time,,Generated using Meet Attendance Chrome Extension\n" + meetID + "," + TimeforCSV + ',,To Know More and Give Feedback,\n,,,,=HYPERLINK("https://meet-attendance.nikjos.in/"),\nParticipants,\n,\n'

for (i = 0; i < y; i++) {
  arrayToCSV += x[i].innerText + ",\n";

}

if (arrayToCSV == "") {

  alert("Please open the participants list in Meet window and try again.")
} else {
  arrayToCSV = meta + arrayToCSV;

  var link = document.createElement("a");
  link.setAttribute("href", 'data:text/csv;charset=utf-8,' + encodeURI(arrayToCSV));
  link.setAttribute("target", '_blank');
  link.setAttribute("download", meetID + " (" + meetTime + ").csv");
  document.body.appendChild(link); // Required for FF
  link.click();
  document.body.removeChild(link);

}