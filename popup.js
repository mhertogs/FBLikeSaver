document.addEventListener('DOMContentLoaded', function(){

    var input = document.getElementById('is-enabled');
    var numInput = document.getElementById('time-window');

    // set the initial state of the checkbox
    chrome.storage.sync.get("is_enabled", function(data){
        input.checked = data["is_enabled"];
    });

    chrome.storage.sync.get("time_window", function(data) {
        numInput.value = Math.floor(data["time_window"] / 86400); // changing seconds to days
    });


    input.addEventListener("change", function(){
        chrome.storage.sync.set({is_enabled: input.checked});
    });

    numInput.addEventListener("change", function(){
        chrome.storage.sync.set({time_window: (numInput.value * 86400)});
    });


});
