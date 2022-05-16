var time = moment();
var currentTime = moment().hours()
function displayTime() {
$("#currentDay").text("It's fucking " + time.format('dddd, MMMM Do YYYY, h:mm:ss a'));
setTimeout(displayTime, 1000);
}

displayTime();
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
}) 

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    function updateCss() {
        $(".time-block").each(function () {
            var divNumber = $(this).attr("id")
            if (divNumber < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
        })
    }

    updateCss();
