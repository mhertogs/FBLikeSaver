function fixLikes(){
    chrome.storage.sync.get(["time_window", "is_enabled"], function(data){
        if (data["is_enabled"]){
            var curTime = Math.floor(Date.now() / 1000);
            var timeWindow = data["time_window"];
            $(".userContentWrapper").each(function(userContentWrapper) {
                postTime = $(this).find("abbr").attr("data-utime");
                if (postTime < curTime - timeWindow) {
                    $(this).find(".UFILikeLink").remove();
                }
            });
            $(".fbPhotosSnowliftFeedbackForm").each(function(fbPhotosSnowliftFeedbackForm) {
                postTime = $(this).find("abbr").attr("data-utime");
                if (postTime < curTime - timeWindow) {
                    $(this).find(".UFILikeLink").remove();
                }
            });
            $(".fbPhotosPhotoFeedback").each(function(fbPhotosPhotoFeedback) {
                postTime = $(this).find("abbr").attr("data-utime");
                if (postTime < curTime - timeWindow) {
                    $(this).find(".UFILikeLink").remove();
                }
            });
            $("._5glz._53b").remove();
        }
    });
}

function debounce(fn, delay) {
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

$(document).ready(fixLikes);
$(document).scroll(debounce( fixLikes, 20 ));
