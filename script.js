var time = moment();
var currentTime = moment().hours()
function displayTime() {
$("#currentDay").text("It's fucking " + time.format('dddd, MMMM Do YYYY, h:mm:ss a'));
setTimeout(displayTime, 1000);
}



displayTime();
$("#saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
}) 