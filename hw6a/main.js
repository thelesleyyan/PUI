/*** Object Constructors ***/
function appointment(vaccine, dosedate, dosetime){
  this.vaccine=vaccine;
  this.dosedate=dosedate;
    this.dosetime=dosetime;
}

function VaccineBrand() {
  if (document.getElementById('pfizer').checked) {
    vaccine_brand = document.getElementById('pfizer').value;
  }
  else if (document.getElementById('moderna').checked) {
    vaccine_brand = document.getElementById('moderna').value;
  }
  else {
    vaccine_brand = document.getElementById('johnson').value;
  }
}

//confirm appointment feedback
function confirmAppointment() {
    var list = document.getElementById("dosedate");
    var dose_date = list[list.selectedIndex].text;
    var list = document.getElementById("dosetime");
    var dose_time = list[list.selectedIndex].text;
    VaccineBrand();
    let new_appointment = new appointment(vaccine_brand, dose_date, dose_time);
    alert('Your appointment of ' + new_appointment.vaccine + " at " + new_appointment.dosedate +" "+new_appointment.dosetime+ " has been booked successfully");
}