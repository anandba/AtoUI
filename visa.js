$("#start-btn").click(function () {
    $("#start-tab").css("display", "none");
    $("#work-type-tab").css("display", "block");
});
/*---------------------------------------------------------------*/
/* ----------------------------Part Time -------------------------*/
/*----------------------------------------------------------------*/
$("#typeback").click(function () {
    $(".alert").css("display", "none");
    $("#start-tab").css("display", "block");
    $("#work-type-tab").css("display", "none");
});
$("#typeNext").click(function () {
    if (!$("input[name='worktype']:checked").val()) {
        $(".alert").css("display", "block");
    }
    else {
        $("#work-type-tab").css("display", "none");
        $(".alert").css("display", "none");
        var type = $("input[name='worktype']:checked").val();
        if (type == "full-time")
            $("#full-time-tab").css("display", "block");
        else
            $("#part-time-tab").css("display", "block");
    }
});
$("#partback").click(function () {
    $(".alert").css("display", "none");
    $("#work-type-tab").css("display", "block");
    $("#part-time-tab").css("display", "none");
});

$("#partnext").click(function () {
    if (!$("input[name='part-time']:checked").val()) {
        $(".alert").css("display", "block");
    }
    else {
        $(".alert").css("display", "none");
        $("#part-time-tab").css("display", "none");
        $("#last-panel").css("display", "block");
        $("#part-back-btn").css("display", "block");
        var type = $("input[name='part-time']:checked").val();
        if (type == "first")
            $("#student-visa-tab").css("display", "block");
        else if (type == "second" || type == "third")
            $("#designated-activities-visa-tab").css("display", "block");
        else
            $("#dependent-visa-tab").css("display", "block");
    }
});
$("#part-back-btn").click(function () {
    $("#part-back-btn").css("display", "none");
    $("#part-time-tab").css("display", "block");
    $("#last-panel").css("display", "none");
    $("#student-visa-tab").css("display", "none");
    $("#designated-activities-visa-tab").css("display", "none");
    $("#dependent-visa-tab").css("display", "none");
});
/*---------------------------------------------------------------*/
/* ----------------------------Full Time -------------------------*/
/*----------------------------------------------------------------*/
$("#fullback").click(function () {
    $(".alert").css("display", "none");
    $("#work-type-tab").css("display", "block");
    $("#full-time-tab").css("display", "none");
});
$("#fullnext").click(function () {
    if (!$("input[name='full-time']:checked").val()) {
        $(".alert").css("display", "block");
    }
    else {
        $(".alert").css("display", "none");
        $("#full-time-tab").css("display", "none");
        var type = $("input[name='full-time']:checked").val();
        if (type == "first") {
            $("#student-tab").css("display", "block");
            $("#first-title").css("display", "block");
            $("#stud-back").css("display", "block");
        }
        else if (type == "second")
            $("#employee-tab").css("display", "block");
        else
            $("#occupation-tab").css("display", "block");
    }
});
$("#stud-back").click(function () {
    $(".alert").css("display", "none");
    $("#full-time-tab").css("display", "block");
    $("#student-tab").css("display", "none");
    $("#first-title").css("display", "none");
    $("#stud-back").css("display", "none");
});
$("#stud-next").click(function () {
    if (!$("input[name='degree']:checked").val()) {
        $(".alert").css("display", "block");
    }
    else {
        $(".alert").css("display", "none");
        $("#student-tab").css("display", "none");
        var type = $("input[name='degree']:checked").val();
        if (type == "first") {
            $("#major-back").css("display", "block");
            $("#bachelor").css("display", "block");
            $("#major-tab").css("display", "block");
        }
        else if (type == "second")
            $("#master-tab").css("display", "block");
        else
            $("#highschool-tab").css("display", "block");
    }
});
$("#major-back").click(function () {
    $(".alert").css("display", "none");
    $("#student-tab").css("display", "block");
    $("#major-tab").css("display", "none");
    $("#bachelor").css("display", "none");
    $("#major-back").css("display", "none");
});
$("#major-next").click(function () {
    if (!$("input[name='major']:checked").val()) {
        $(".alert").css("display", "block");
    }
    else {
        $(".alert").css("display", "none");
        $("#major-tab").css("display", "none");
        $("#last-panel").css("display", "block");
        $("#major-back-btn").css("display", "block");
        var type = $("input[name='major']:checked").val();
        if (type == "first" || type == "fifth")
            $("#specialist-end-tab").css("display", "block");
        else
            $("#engineer-end-tab").css("display", "block");
    }
});
$("#major-back-btn").click(function () {
    $("#major-tab").css("display", "block");
    $("#last-panel").css("display", "none");
    $("#major-back-btn").css("display", "none");
    $("#specialist-end-tab").css("display", "none");
    $("#engineer-end-tab").css("display", "none");
});
$("#master-back").click(function () {
    $(".alert").css("display", "none");
    $("#student-tab").css("display", "block");
    $("#master-tab").css("display", "none");
});
$("#master-next").click(function () {
    if (!$("input[name='jp-level']:checked").val()) {
        $(".alert").css("display", "block");
    }
    else {
        $(".alert").css("display", "none");
        $("#master-tab").css("display", "none");
        var type = $("input[name='jp-level']:checked").val();
        if (type == "first") {
            $("#professional-end-tab").css("display", "block");
            $("#last-panel").css("display", "block");
            $("#master-back-btn").css("display", "block");
        }
        else if (type == "second") {
            $("#master-major-back").css("display", "block");
            $("#n3-level").css("display", "block");
            $("#major-tab").css("display", "block");
            $("input[name='major']").prop( "checked", false );
        }
        else {
            $("#master-major-back").css("display", "block");
            $("#none-optn").css("display", "block");
            $("#major-tab").css("display", "block");
            $("input[name='major']").prop( "checked", false );
        }

    }
});
$("#master-major-back").click(function () {
    $(".alert").css("display", "none");
    $("#master-major-back").css("display", "none");
    $("#n3-level").css("display", "none");
    $("#none-optn").css("display", "none");
    $("#major-tab").css("display", "none");
    $("#master-tab").css("display", "block");
});

$("#master-back-btn").click(function () {
    $("#master-back-btn").css("display", "none");
    $("#master-tab").css("display", "block");
    $("#last-panel").css("display", "none");
    $("#professional-end-tab").css("display", "none");
});

$("#school-back").click(function () {
    $(".alert").css("display", "none");
    $("#highschool-tab").css("display", "none");
    $("#student-tab").css("display", "block");
});
$("#school-next").click(function () {
    if (!$("input[name='school']:checked").val()) {
        $(".alert").css("display", "block");
    }
    else {
        $(".alert").css("display", "none");
        $("#highschool-tab").css("display", "none");
        var type = $("input[name='school']:checked").val();
        if (type == "first")
            $("#jp-level-tab").css("display", "block");
        else {
            $("#none-end-tab").css("display", "block");
            $("#last-panel").css("display", "block");
            $("#none-back-btn").css("display", "block");
        }
    }
});
$("#none-back-btn").click(function () {
    $("#none-end-tab").css("display", "none");
    $("#last-panel").css("display", "none");
    $("#none-back-btn").css("display", "none");
    $("#highschool-tab").css("display", "block");
});

$("#jp-back").click(function () {
    $(".alert").css("display", "none");
    $("#jp-level-tab").css("display", "none");
    $("#highschool-tab").css("display", "block");
});
$("#jp-next").click(function () {
    if (!$("input[name='jp']:checked").val()) {
        $(".alert").css("display", "block");
    }
    else {
        $(".alert").css("display", "none");
        $("#jp-level-tab").css("display", "none");
        $("#last-panel").css("display", "block");
        $("#jp-back-btn").css("display", "block");
        var type = $("input[name='jp']:checked").val();
        if (type == "first")
            $("#intern-end-tab").css("display", "block");
        else
            $("#worker-end-tab").css("display", "block");
    }
});
$("#jp-back-btn").click(function () {
    $("#intern-end-tab").css("display", "none");
    $("#worker-end-tab").css("display", "none");
    $("#last-panel").css("display", "none");
    $("#jp-back-btn").css("display", "none");
    $("#jp-level-tab").css("display", "block");
});
$("#exp-back").click(function () {
    $(".alert").css("display", "none");
    $("#full-time-tab").css("display", "block");
    $("#employee-tab").css("display", "none");

});
$("#exp-next").click(function () {
    if (!$("input[name='experience']:checked").val()) {
        $(".alert").css("display", "block");
    }
    else {
        $(".alert").css("display", "none");
        $("#employee-tab").css("display", "none");
        var type = $("input[name='experience']:checked").val();
        if (type == "first") {
            $("#last-panel").css("display", "block");
            $("#employee-back-btn").css("display", "block");
            $("#engineer-end-tab").css("display", "block");
        }
        else if (type == "second") {
            $("#last-panel").css("display", "block");
            $("#employee-back-btn").css("display", "block");
            $("#specialist-end-tab").css("display", "block");
        }
        else if (type == "third") {
            $("#last-panel").css("display", "block");
            $("#employee-back-btn").css("display", "block");
            $("#international-end-tab").css("display", "block");
        }
        else {
            $("#student-tab").css("display", "block");
            $("#second-title").css("display", "block");
            $("#employee-back").css("display", "block");
            $("input[name='degree']").prop( "checked", false );
        }
    }
});
$("#employee-back").click(function () {
    $(".alert").css("display", "none");
    $("#employee-tab").css("display", "block");
    $("#student-tab").css("display", "none");
    $("#second-title").css("display", "none");
    $("#employee-back").css("display", "none");
});
$("#employee-back-btn").click(function () {
    $("#employee-tab").css("display", "block");
    $("#last-panel").css("display", "none");
    $("#employee-back-btn").css("display", "none");
    $("#engineer-end-tab").css("display", "none");
    $("#specialist-end-tab").css("display", "none");
    $("#international-end-tab").css("display", "none");
});
$("#occupation-back").click(function () {

    $(".alert").css("display", "none");
    $("#full-time-tab").css("display", "block");
    $("#occupation-tab").css("display", "none");
});
$("#occupation-next").click(function () {
    if (!$("input[name='occupation']:checked").val()) {
        $(".alert").css("display", "block");
    }
    else {
        $(".alert").css("display", "none");
        $("#occupation-tab").css("display", "none");
        $("#last-panel").css("display", "block");
        $("#occupation-back-btn").css("display", "block");
        var type = $("input[name='occupation']:checked").val();
        if (type == "one")
            $("#diploma-end-tab").css("display", "block");
        else if (type == "two")
            $("#legal-accounting-end-tab").css("display", "block");
        else if (type == "three")
            $("#government-end-tab").css("display", "block");
        else if (type == "four")
            $("#mediacal-end-tab").css("display", "block");
        else if (type == "five")
            $("#professor-end-tab").css("display", "block");
        else if (type == "six")
            $("#researcher-end-tab").css("display", "block");
        else if (type == "seven")
            $("#artist-end-tab").css("display", "block");
        else if (type == "eight")
            $("#instructor-end-tab").css("display", "block");
        else if (type == "nine")
            $("#relligious-end-tab").css("display", "block");
        else if (type == "ten")
            $("#entertainer-end-tab").css("display", "block");
        else if (type == "eleven")
            $("#journalist-end-tab").css("display", "block");
        else if (type == "twelve")
            $("#labour-end-tab").css("display", "block");
        else
            $("#president-end-tab").css("display", "block");
    }
});
$("#occupation-back-btn").click(function () {
    $("#occupation-tab").css("display", "block");
    $("#last-panel").css("display", "none");
    $("#occupation-back-btn").css("display", "none");
    $("#diploma-end-tab").css("display", "none");
    $("#government-end-tab").css("display", "none");
    $("#professor-end-tab").css("display", "none");
    $("#artist-end-tab").css("display", "none");
    $("#relligious-end-tab").css("display", "none");
    $("#journalist-end-tab").css("display", "none");
    $("#president-end-tab").css("display", "none");
    $("#legal-accounting-end-tab").css("display", "none");
    $("#mediacal-end-tab").css("display", "none");
    $("#researcher-end-tab").css("display", "none");
    $("#instructor-end-tab").css("display", "none");
    $("#entertainer-end-tab").css("display", "none");
    $("#labour-end-tab").css("display", "none");
});