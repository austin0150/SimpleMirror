function updateTime() {

    var today = new Date();
    var Hours = today.getHours();
    var Mins = today.getMinutes();
    var ampm = 'AM';

    var dayNum = today.getDate();
    if(dayNum == 1 || dayNum == 21 || dayNum == 31)
    {
        dayNum = dayNum + "st";
    }
    else if(dayNum == 2 || dayNum == 22)
    {
        dayNum = dayNum + "nd";
    }
    else if(dayNum == 3 || dayNum == 23)
    {
        dayNum = dayNum + "rd";
    }
    else
    {
        dayNum = dayNum + "th";
    }

    var year = today.getFullYear();

    //Define an array of weekdays
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    //Define an array of months
    var month = new Array(12);
    month[0] = "Janurary";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var monthStr = month[today.getMonth()];
    var dayStr = weekday[today.getDay()];

    //Switch AM to PM if its the afternoon
    if(Hours > 11)
    {
        ampm = 'PM';
    }
    if(Hours > 12)
    {
        Hours = (Hours - 12);
    }

    if(Mins < 10)
    {
        Mins = "0" + Mins;
    }

    var time = Hours + ":" + Mins + " " + ampm;
    var date = dayStr + ", " + monthStr + " " + dayNum + ", " + year;

    //Update the DOM with the new time and date
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}

//loop the updateTime function every second
updateTime();
var timeVar = setInterval(() => {
    updateTime();
}, 1000);


