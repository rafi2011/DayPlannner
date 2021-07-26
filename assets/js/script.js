
function init (){
    
    // add an event listener to the save button
    $('.saveBtn').click((e)=>addEvent(e))

    // loop through every row and target the SAVE BUTTON and attach this listener to EVERY SAVE BUTTON
    function addEvent(e) {
        // find the text area value of the container
        var hour = e.target.parentElement.firstElementChild.innerText
        // find the value of the time block
        var value = JSON.stringify(e.target.previousElementSibling.value)
        // store the time as a key and event as value in local storage
        localStorage.setItem(hour, value);
    }

    // read local storage and assign to time slots
    $('.hour').each(function() {
        var hourSaved = $(this)[0].innerText
        $(this)[0].nextElementSibling.innerText = localStorage.getItem(hourSaved)
    })

    // // create function called add event
    $('description').addClass('show');
    setTimeout(function(){
        $('.description').removeClass('show');
    }, 1000);
    
    // set time in header
    function addTimeToHeader() {
    var timeEl = document.getElementById("currentDay");
    timeEl.textContent = moment();
    }
    addTimeToHeader();

    // add color to time slot
    function addColorToTimeSlot() {
    // get current hour
        var time = moment().hours();

        // loop through row
        $('.time-block').each(function(){
    
            var rowHour = parseInt($(this).attr('id').split('-')[1]);
                // add class appropiately
            if(rowHour < time) {
                $(this).removeClass('future','present');
                $(this).addClass('past');
            } else if (rowHour === time) {
                $(this).removeClass('past', 'future');
                $(this).addClass('present'); 
            } else if (rowHour> time) {
                $(this).removeClass('past', 'present');
                $(this).addClass('future')
            }    
        });
    }
    addColorToTimeSlot();
}
function getHourOfTheDay () {}


// start 🚀
init()