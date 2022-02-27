$(document).ready(function () {
    var m = moment();
    // var allTimeBlocks = 

    $("#day").text(moment().format('LLLL'));
    // check storage for saved texts
    $('textarea').each(function () {
        getStorage($(this))
    })


    function change(element) {
        // get id of element
        //m to get the hour
        // compare id with current hour
        // switch case to determine time color
        var id = Number(element[0].id)
        var currentHour = Number(moment().format('H'));
        element.removeClass('past', 'present', 'future')
        if (id < currentHour) {

            element.addClass('past')
        } else if (id === currentHour) {
            element.addClass('present')
        } else {
            element.addClass('future')
        }
    }
    // add colors to blocks
    $('textarea').each(function () {
        change($(this))
    })

    // save to local storage
    function saveText(element) {
        var textArea = element.prev()
        var text = textArea.val()
        var id = textArea[0].id
        localStorage.setItem(id, text)

    }
    // add event listeners to buttons
    $('.saveBtn').each(function () {
        $(this).on('click', function () {
            saveText($(this));

        })
    })

    // Check local storage for given element
    function getStorage(element) {
        var id = element[0].id
        var textFromStorage = localStorage.getItem(id)

        if(textFromStorage){
            element.text(textFromStorage)
        }
    }


























})
