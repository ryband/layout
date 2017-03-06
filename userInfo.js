var pensioner;
var result;
var firstName = prompt('Enter your First name');
var lastName = prompt('Enter your Last name');
var fatherName = prompt('Enter your Father name');
var userGender = confirm('Are you male?');
var userAge = prompt('Enter your Age');
if (userGender == 1) {
    result = 'Man'
}
else {
    result = 'Woman'
}


if (((result == 'Man') && (userAge > 59)) || ((result == 'Woman') && (userAge > 54))) {
    pensioner = 'Yes'
}
else {
    pensioner = 'No'
}

alert (` Your name: ${firstName} ${lastName} ${fatherName}
 Your age (years): ${userAge}
 Your age (days): ${userAge*365}
 After 5 years you will be ${Number(userAge) + 5} years old
 Your gender is ${result}
 You are pensioner: ${pensioner}`);

