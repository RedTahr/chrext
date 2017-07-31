$(function () {
        chrome.storage.sync.get('goal', function (items) {
            $('#goal').val(items.goal);
        });    

    $('#save').click(function () {
        var goal = $('#goal').val();
        if (goal) {
            chrome.storage.sync.set({'goal' : goal}, function () {
                close(); // will close this settings tab when done
            });
        }
    });

    $('#reset').click(function () {
        chrome.storage.sync.set({'total' : 0}, function () {
            var options = {
                type: "basic",
                title: "Total reset!",
                message: "Total has been reset back to zero.",
                iconUrl: "icon.png"
            }

            chrome.notifications.create('reset', options, function() { });            
        });
    });
})