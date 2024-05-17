import inquirer from "inquirer";
// random generated a 5 digit Roll No
const myRollNo = Math.floor((Math.random()) * 100000);
let myBalance = 0; // create a balance variable and initialize with 0
let student = await inquirer.prompt([
    {
        name: "sms", // get the name of student
        message: ["Enter Your Name for Enroll"],
        type: "input",
        validate: (function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return false;
            }
        })
    },
    {
        name: "Course", // enter the course
        messsage: "Enter any Course",
        type: "list",
        choices: ["Web3.0", "TypeScript", "NodeJs", "Python"]
    }
]);
// all courses fees details
const fees = {
    "Web3.0": 5000,
    "TypeScript": 10000,
    "NodeJs": 8000,
    "Python": 12000
};
let studentPayment = await inquirer.prompt([
    {
        name: "Payments", // enter the fees for the course
        message: "Enter Your Payment",
        type: "input",
        validate: (function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return false;
            }
        })
    },
    {
        name: "PaymentMode", // enter your fees payment mode
        message: "Enter Your Payment Mode",
        type: "list",
        choices: ["Online Transfer", "EasyPaisa", "JazzCash", "Cash"]
    }
]);
// all calculations fees, payments and balance
let myTotalPayments = studentPayment.Payments;
let courseFees = fees[student.Course];
myBalance = myTotalPayments - courseFees;
// check the condition of your payments according to your course
if (myBalance >= 0) {
    console.log(`\n\nName : ${student.sms}`);
    console.log(`Roll No : ${myRollNo}`);
    console.log(`Course : ${student.Course}`);
    console.log(`Paid Amount : ${studentPayment.Payments}`);
    console.log(`Remaining Balance : ${myBalance}\n`);
}
else {
    console.log(`You have to submit the amount : ${myBalance * -1} for your desired course`);
}
