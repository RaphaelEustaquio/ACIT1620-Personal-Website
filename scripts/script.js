let ACIT1620 = {
        code:"ACIT 1620",
        name:"Web Fundamental Technologies",
}

let ACIT1515 = {
    code: "ACIT 1515",
    name: "Scripting for IT"
}

let ACIT1630 = {
    code: "ACIT1630",
    name: "Database Systems"
}
const courseList = [ACIT1620, ACIT1515, ACIT1630]

let input = "";
do {
    input = promt("Enter a 4-digit number")
}
while(!Number.isInteger(input))