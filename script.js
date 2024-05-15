function calculateAge() {
  var birthdate = document.getElementById("birthdate").value;
  var birthDate = new Date(birthdate);
  var now = new Date();

  var age = now.getFullYear() - birthDate.getFullYear();
  var monthDiff = now.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }

  var ageInMonths = (now.getMonth() - birthDate.getMonth()) + 12 * (now.getFullYear() - birthDate.getFullYear());
  var ageInWeeks = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24 * 7));
  var ageInDays = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24));
  var ageInHours = Math.floor((now - birthDate) / (1000 * 60 * 60));
  var ageInMinutes = Math.floor((now - birthDate) / (1000 * 60));
  var ageInSeconds = Math.floor((now - birthDate) / 1000);

  var result = `
    <p>Age: ${age} years</p>
    <p>Age: ${ageInMonths} months</p>
    <p>Age: ${ageInWeeks} weeks</p>
    <p>Age: ${ageInDays} days</p>
    <p>Age: ${ageInHours} hours</p>
    <p>Age: ${ageInMinutes} minutes</p>
    <p>Age: ${ageInSeconds} seconds</p>
  `;

  document.getElementById("result").innerHTML = result;
}
