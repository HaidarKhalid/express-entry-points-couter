let mainMenu = document.getElementById("mainM")
let ageA = false;
let englishSkillsA = false;
let eduA = false;
let experinceA = false;
let workA = false;
function begin() {
    if (ageA == false && englishSkillsA == false && eduA == false && experinceA == false && workA == false) {
    mainMenu.innerHTML = `
    <h3>Age</h3>
        <h3>how old are you?</h3>
        <h3>
            <br>
            <button onclick="age(0)" class="choise">les than 18 years old = 0 points</button>
            <br>
            <br>
            <button onclick="age(12)" class="choise">18-35 years old = 12 points</button>
            <br> 
            <br>
            <button onclick="age(11)" class="choise">36 years old = 11 points</button>
            <br>
            <br>
            <button onclick="age(10)" class="choise">37 years old = 10 points</button>
            <br>
            <br>
            <button onclick="age(9)" class="choise"> 38 years old = 9 points</button>
            <br>
            <br>
            <button onclick="age(8)" class="choise"> 39 years old = 8 points</button>
            <br>
            <br>
            <button onclick="age(7)" class="choise"> 40 years old = 7 points</button>
            <br>
            <br>
            <button onclick="age(6)" class="choise"> 41 years old = 6 points</button>
            <br>
            <br>
            <button onclick="age(5)" class="choise"> 42 years old = 5 points</button>
            <br>
            <br>
            <button onclick="age(4)" class="choise"> 43 years old = 4 points</button>
            <br>
            <br>
            <button onclick="age(3)" class="choise"> 44 years old = 3 points</button>
            <br>
            <br>
            <button onclick="age(2)" class="choise"> 45 years old = 2 points</button>
            <br>
            <br>
            <button onclick="age(1)" class="choise"> 46 years old = 1 points</button>
            <br>
            <br>
            <button onclick="age(0)" class="choise"> more than 46 years old = 0 points</button>
            <br>
            <br>
    `; 
    } else if (ageA == true && englishSkillsA == false && eduA == false && experinceA == false && workA == false) {
        mainMenu.innerHTML = `
        <h3>English skills</h3>
            <h3>IETLS english test</h3>
            <h3>Calculate your points according to <br>  the following table or do your own research <br> (if you do not have an IELTS certificate, estimate your level)</h3>
            <img src="images/ietls.JPG">
            <h3>CLB9 = 6 points </h3>
            <h3>CLB8 = 5 points </h3>
            <h3>CLB7 = 4 points </h3>
            <h3>Less than CLB6 = not eligible </h3>
                <br>
                <h3>Put your IETLS points here (minmum is 16 and maximum is 24)</h3>
                <input id="eng-inp" type="number" max=24 min=16 placeholder="points">
                <button style="
                background-color: cadetblue;
                padding: 7px 10px;
                font-size: large;" onclick="ietls()"> Submit </button>
                `
        }  else if (ageA == true && englishSkillsA == true && eduA == false && experinceA == false && workA == false) {
            mainMenu.innerHTML = `
            <h3>educational certificate</h3>
                <h3>What is your educational certificate?</h3>
                <br>
                <button onclick="edu(5)" class="choise">High School certificate = 5 points</button>
                <br>
                <br>
                <button onclick="edu(15)" class="choise">One year diploma or equivalent = 15 points </button>
                <br> 
                <br>
                <button onclick="edu(19)" class="choise">Two-year diploma or equivalent = 19 points</button>
                <br>
                <br>
                <button onclick="edu(21)" class="choise">Three-year diploma or equivalent or Bachelor's degree or equivalent = 21 points</button>
                <br>
                <br>
                <button onclick="edu(22)" class="choise">Two or more diplomas (the requirement of one of the certificates is 3 years) = 22 points</button>
                <br>
                <br>
                <button onclick="edu(23)" class="choise">Master degree = 23 points</button>
                <br>
                <br>
                <button onclick="edu(25)" class="choise">A Ph.D = 25 points</button>
               `
            }   else if (ageA == true && englishSkillsA == true && eduA == true && experinceA == false && workA == false) {
                mainMenu.innerHTML = `
                <h3>work experience</h3>
                    <h3>How many years of your work experience?</h3>
                    <h3>Less than 1 year = not eligible</h3>
                    <br>
                    <button onclick="exp(9)" class="choise">1 year experience = 9 points</button>
                    <br>
                    <br>
                    <button onclick="exp(11)" class="choise">2-3 year experience = 11 points</button>
                    <br> 
                    <br>
                    <button onclick="exp(13)" class="choise">4-5 year experience = 13 points</button>
                    <br>
                    <br>
                    <button onclick="exp(15)" class="choise">6 years or more = 15 points</button><br>
                    <br> 
                    `
                }  else if (ageA == true && englishSkillsA == true && eduA == true && experinceA == true && workA == false) {
                    mainMenu.innerHTML = `
                    <h3>Employment contract</h3>
                        <h3>How many years of your work experience?</h3>
                        <h3>Do you have a valid employment contract in Canada?</h3>
                        <br>
                        <button onclick="emp(10)" class="choise">Yes i have valid employment contract in Canada = 10 points</button>
                        <br>
                        <br>
                        <button onclick="emp(0)" class="choise">No i don't have = 0 points</button>
                        `
                }   else if (ageA == true && englishSkillsA == true && eduA == true && experinceA == true && workA == true) {
                    if (result >= 67) {
                         mainMenu.innerHTML = `
                    <h3>Congrats!</h3>
                        <h3>You are eligible to apply for Express Entry</h3>
                        <h3>You have ${result} points</h3>
                        <br>
                        <h2>
                        you can Submit an Express Entry profile <br> by clicking <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile.html" target="_blank">  this link </a> and you will be in the offical 
                        government of canada website to Submit your Express Entry profile </h2>
                        <br>
                        <br>
                        <a href="https://www.instagram.com/y_g_v/" target="_blank"> Contact me ? </a>`
                    } else {
                            mainMenu.innerHTML = `
                    <h3>Unfortunately</h3>
                        <h3>Unfortunately, you are not eligible to apply for the Express Entry profile</h3>
                        <h3>You have only ${result} points</h3>
                        <br>
                        <h2>
                        you can improve yourself and try again and if you want to check more if you are eligible or not you can click  <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile.html" target="_blank">  this link </a> and you will be in the offical 
                        government of canada website 
                        <br>
                        <br>
                        <a href="https://www.instagram.com/y_g_v/" target="_blank"> Contact me ? </a>
                        </h2>` 
                        }
                   
                }
}

function age(point) {
    myPoints.age = point
    ageA = true;
    refreshResult()
    begin()
} 
function ietls() {
    myPoints.englishSkills = Number(document.getElementById("eng-inp").value)
    englishSkillsA = true;
    refreshResult()
    begin()
} 
function edu(point) {
    myPoints.edu = point
    eduA = true;
    refreshResult()
    begin()
} 
function exp(point) {
    myPoints.experince = point
    experinceA = true;
    refreshResult()
    begin()
} 
function emp(point) {
    myPoints.work = point
    workA = true;
    refreshResult()
    begin()
} 


let myPoints = {
    age: 0,
    englishSkills: 0,
    edu: 0,
    experince: 0,
    work: 0
}


let result = myPoints.age + Number(myPoints.englishSkills) + myPoints.edu + myPoints.experince + myPoints.work

function refreshResult() {
    result = myPoints.age + Number(myPoints.englishSkills) + myPoints.edu + myPoints.experince + myPoints.work
}