// Set the date we're counting down to
var countDownDate = new Date("June 10, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s &nbsp;&nbsp;";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Web site is launching!";
  }
}, 1000);

/////////////////////////sync
// Set the date we're counting down to

var countDownDateSync = new Date(date).getTime();

// Update the count down every 1 second
var y = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - countDownDateSync;

  // Time calculations for days, hours, minutes and seconds
  var daysSync = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hoursSync = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Output the result in an element with id="lastsync"
  /*document.getElementById("lastsync").innerHTML = daysSync + "d " + hoursSync + "h &nbsp;&nbsp;";*/
  if(daysSync == 0){
    if(hoursSync == 0){
      document.getElementByClass("lastsync").innerHTML = "Just updated...";
    }else if(hoursSync < 3){
      document.getElementById("lastsync").innerHTML = "Last updated, few hours ago...";
    }else{
      document.getElementById("lastsync").innerHTML = "Last updated, " + hoursSync + " hours ago...";
    }
  }else if(daysSync == 1){
    document.getElementById("lastsync").innerHTML = "Last updated, " + daysSync + " day ago...";
  }else{
    document.getElementById("lastsync").innerHTML = "Last updated, " + daysSync + " days ago...";
  };
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(y);
    document.getElementById("lastsync").innerHTML = "Error";
  }
}, 1000);

//search bar
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByClassName("task-card");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h4")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.opacity = "1";
        } else {
            li[i].style.opacity = "0.4";
        }
    }
}

///
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
