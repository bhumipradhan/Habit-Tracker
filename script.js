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
    var daysinthemonthlist=[31,28,31,30,31,30,31,30,31,30,31,30];
    var daysinthismonth=daysinthemonthlist[currentMonth];

    var dayscomplete=0;
    var totalDays=document.getElementById("totalDays");

    var dayCount=0;
    var rowCount=0;
    var days=document.getElementsByClassName("days");
    for(var i=0;i<days.length;i++){
      var day=days[rowCount].getElementsByClassName("day");
      for(var j=0;j<day.length;j++){
        day[j].setAttribute("style","border:2px solid black");
      

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