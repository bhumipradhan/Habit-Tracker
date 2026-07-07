     var date = new Date();
    console.log(date);

    var currentMonth = date.getMonth();
    var currentYear = date.getFullYear();
    var currentDay = date.getDay();
    var currentDate = date.getDate();

    console.log(currentMonth);
    console.log(currentYear); 
    console.log(currentDay);
    console.log(currentDate);

    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  
    var title=document.getElementById("title");
    title.innerHTML= monthNames[currentMonth];

    var habitTitle=document.getElementById("habitTitle");
    habitTitle.onclick=function(){
      let habits=prompt("Whats your habit?",habitTitle.innerHTML);
      if (habits.length==0){
        habitTitle.innerHTML="Click to set your habit";
      }
      else{
        habitTitle.innerHTML=habits;
      }
    }
    var daysinthemonthlist=[31,28,31,30,31,30,31,31,30,31,30,31];
    var daysinthismonth=daysinthemonthlist[currentMonth];

    var dayscompleted=0;
    var totalDays=document.getElementById("totalDays");
    totalDays.innerHTML="0/"+daysinthismonth;

    var dayCount=0;
    var rowCount=0;
    var days=document.getElementsByClassName("days");
    for(var i=0;i<days.length;i++){
      var day=days[rowCount].getElementsByClassName("day");
      for(var j=0;j<day.length;j++){
       if(dayCount==currentDate-1){
        day[j].setAttribute("style","color:rgb(102, 153, 219);");
        day[j].setAttribute("style","border:2px solid black");
       }
      

      if(dayCount<daysinthismonth){
        day[j].innerHTML=dayCount+1;
        day[j].setAttribute("id","day"+(dayCount+1));
        dayCount++;
      }else{
        day[j].innerHTML="";
        day[j].setAttribute("style","background-color:white");
      }
    }
    rowCount++;
    }  

for (var i = 0; i < dayCount; i++) {

    var storageKey = (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;

    var value = localStorage.getItem(storageKey);

    if (value === null) {

        localStorage.setItem(storageKey, "false");

    } else if (value === "true") {

        dayscompleted++;
    }
}

totalDays.innerHTML = dayscompleted + "/" + daysinthismonth;


/* ---------- UPDATE CALENDAR ---------- */

for (var i = 0; i < currentDate; i++) {

    var storageKey = (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;

    var chosenDay = localStorage.getItem(storageKey);

    var chosenDayDiv = document.getElementById("day" + (i + 1));

    if (chosenDay === "true") {

        chosenDayDiv.style.backgroundColor = "blue";

    } else {

        chosenDayDiv.style.backgroundColor = "white";
    }
}


/* ---------- CLICK EVENT ---------- */

var dayDivs = document.querySelectorAll(".day");

for (var i = 0; i < currentDate; i++) {

    dayDivs[i].onclick = function (e) {

        if (e.target.innerHTML === "") return;

        var num = e.target.innerHTML;

        var storageKey =
            (currentMonth + 1) + "-" + num + "-" + currentYear;

        if (localStorage.getItem(storageKey) === "false") {

            e.target.style.backgroundColor = "blue";
            localStorage.setItem(storageKey, "true");
            dayscompleted++;

        } else {

            e.target.style.backgroundColor = "white";
            localStorage.setItem(storageKey, "false");
            dayscompleted--;
        }

        totalDays.innerHTML = dayscompleted + "/" + daysinthismonth;

        if (dayscompleted === currentDate) {
            alert("Great Progress!");
        }
    };
}


/* ---------- RESET BUTTON ---------- */

var resetButton = document.getElementById("resetButton");

resetButton.onclick = function () {

    for (var i = 0; i < dayCount; i++) {

        var storageKey =
            (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;

        localStorage.setItem(storageKey, "false");

        document.getElementById("day" + (i + 1)).style.backgroundColor = "white";
    }

    dayscompleted = 0;
    totalDays.innerHTML = "0/" + daysinthismonth;
};