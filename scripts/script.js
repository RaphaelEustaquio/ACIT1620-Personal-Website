let ACIT1620 = {
    code:"ACIT 1620",
    name:"Web Fundamental Technologies",
}

let ACIT1515 = {
    code: "ACIT 1515",
    name: "Scripting for IT"
}

let ACIT1630 = {
    code: "ACIT 1630",
    name: "Database Systems"
}
const courseList = [ACIT1620, ACIT1515, ACIT1630]

let input = "";
do {
    input = prompt("Enter a 4-digit number")
}
while(isNaN(Number(input)) | input.toString().length !== 4)