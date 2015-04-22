document.addEventListener('DOMContentLoaded', function(){
    // set the initial state of the checkbox
    chrome.storage.sync.get("is_enabled", function(data){
        $("#is-enabled").attr('checked', data["is_enabled"]);
        if (data["is_enabled"]) {
            $("#time-window").removeAttr('disabled');
            $("#time-window").css({"opacity":"1"});
        } else {
            $("#time-window").attr('disabled','disabled');
            $("#time-window").css({"opacity":".4"});
        }
    });

    // set the initial state of the time window
    chrome.storage.sync.get("time_window", function(data) {
        $("#time-window").attr('value', Math.floor(data["time_window"] / 86400));
    });

    // Set up listeners to update settings
    $('#is-enabled').bind('change', function(){
        chrome.storage.sync.set({is_enabled: $('#is-enabled').is(':checked')});
        if ($('#is-enabled').is(':checked')) {
            $("#time-window").removeAttr('disabled');
            $("#time-window").css({"opacity":"1"});
        } else {
            $("#time-window").attr('disabled','disabled');
            $("#time-window").css({"opacity":".4"});
        }
    });

    $('#time-window').bind('keyup mouseup', function(){
        chrome.storage.sync.set({time_window: ($('#time-window').val() * 86400)});
    });

});
