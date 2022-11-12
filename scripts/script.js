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
while(isNaN(Number(input)) || input.toString().length !== 4)

function conv(input)
{
    for (let course of courseList)
    {
        if(course.code.includes(input)){
            return true
        }
    }

}

if(conv(input) == true)
{
    for(let course of courseList)
    { 
        if(course.code.includes(input))
        {
            console.log(`Yes I am taking the course: ${course.code} - ${course.name}`)
    }
}
}

if(conv(input) !== true)
{
    courseList.push({code:input, name:null})
}