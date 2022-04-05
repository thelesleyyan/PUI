// create new appointment object
function appt(type, order, date, time) {
    this.type = type;
    this.order = order;
    this.date = date;
    this.time = time;
}


// store appointment type
function getType() {
    var type = document.querySelector('input[name="appointmentType"]:checked').value;
    sessionStorage.setItem("apptType", type);
    console.log(type);
}

// store appointment order
function getOrder() {
    var order = document.querySelector('input[name="appointmentOrder"]:checked').value;
    sessionStorage.setItem("apptOrder", order);
    console.log(order);
}

// store appointment date
function getDate() {
    var dropDown = document.getElementById("dateDropdown");
    var date = dropDown.value;
    sessionStorage.setItem("apptDate", date);
    console.log(date);
}


// store appointment time
function getTime() {
    var time = document.querySelector('input[name="time"]:checked').value;
    sessionStorage.setItem("apptTime", time);
    console.log(time);
}



function confirmNameType() {
    getType();
    getOrder();
}

function confirmDateTime() {
    getDate();
    getTime();
}


// update confirmation page
function confirmAppointmentType() {
    var type = sessionStorage.getItem("apptType");
    document.getElementById("appt-type").textContent = type;
}

function confirmAppointmentOrder() {
    var order = sessionStorage.getItem("apptOrder");
    document.getElementById("appt-order").textContent = order;
}

function confirmAppointmentDate() {
    var date = sessionStorage.getItem("apptDate");
    document.getElementById("appt-date").textContent = date;
}

function confirmAppointmentTime() {
    var time = sessionStorage.getItem("apptTime");
    document.getElementById("appt-time").textContent = time;
}


// store new appointment in array
function newAppointment() {
    var appts = JSON.parse(localStorage.getItem("appts"));
    if (appts === null) {
        appts = [];
    }

    console.log(appts);
    var type = sessionStorage.getItem("apptType");
    var order = sessionStorage.getItem("apptOrder");
    var date = sessionStorage.getItem("apptDate");
    var time = sessionStorage.getItem("apptTime");
    var newAppt = appt(type, order, date, time);
    newAppt = new appt(type, order, date, time);
    console.log(newAppt);
    appts.push(newAppt);
    console.log(appts);
    localStorage.setItem("appts",JSON.stringify(appts));
}



function loadAppointments() {
    var appts = JSON.parse(localStorage.getItem("appts"));
    let upcomingAppointments = document.getElementById("upcomingAppts");
    console.log(appts);
    if (appts.length === null) {
        appts = [];
        console.log(appts);
        let noAppointments = document.getElementById("noUpcomingText");
        noUpcomingText.innerHTML = "You have no upcoming appointments scheduled.";
    }
    else {
        console.log(appts);
        for(var n of appts) {
            document.getElementById("appt-date").innerHTML=(n.date);
            document.getElementById("appt-time").innerHTML=(n.time);
            document.getElementById("appt-type").innerHTML=(n.type);
            document.getElementById("appt-order").innerHTML=(n.order);

        }
    }


}












