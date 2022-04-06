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


// confirm type and order on "book an appointment" page
function confirmNameType() {
    getType();
    getOrder();
}

// confirm date and time on "select a time slot" page
function confirmDateTime() {
    getDate();
    getTime();
}

// update confirmation page with type
function confirmAppointmentType() {
    var type = sessionStorage.getItem("apptType");
    document.getElementById("appt-type").textContent = type;
}

// update confirmation page with order
function confirmAppointmentOrder() {
    var order = sessionStorage.getItem("apptOrder");
    document.getElementById("appt-order").textContent = order;
}

// update confirmation page with date
function confirmAppointmentDate() {
    var date = sessionStorage.getItem("apptDate");
    document.getElementById("appt-date").textContent = date;
}

// update confirmation page with time
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

// load all appointments in array
function loadAppointments() {
    let upcomingCount = document.getElementById("upcomingCount");
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
        upcomingCount.innerHTML="You have " + appts.length + " upcoming appointment(s).";
        console.log(appts);
        var i =0;
        // load apointments in the table
        for(var n of appts) {
            var mytable = document.getElementById("mytable");
            let newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${n.date}</td><td>${n.time}</td><td>TCS hall</td><td>${n.type}</td><td>${n.order}</td><td> <a href="javascript:CancelAppt(${i})">Cancel</a></td>`;
            mytable.appendChild(newRow);
            //document.getElementById("appt-date").innerHTML=(n.date);
            //document.getElementById("appt-time").innerHTML=(n.time);
            //document.getElementById("appt-type").innerHTML=(n.type);
            //document.getElementById("appt-order").innerHTML=(n.order);
            i+=1;
        }
    }


}

// cancel an appointment
function CancelAppt(i)
{
    console.log("cancel appointment called! "+i);
    var appts = JSON.parse(localStorage.getItem("appts"));
    appts.splice(i, 1);
    console.log(appts);
    localStorage.setItem("appts",JSON.stringify(appts));
    var mytable = document.getElementById("mytable");
    mytable.innerHTML = ""
    loadAppointments();
}









