const students = [];

function initialize() {
    list = document.getElementById("list");
}

function student(clas, grade) {
    this.class = clas;
    this.grade = grade;
}

function addToList() {
    const info = document.getElementById("textt").value.split(';');
    grade = info[1];
    document.getElementById("textt").value = "";
    if (info[0].substring(0, 2) === "AP") {
        grade = Math.floor(info[1] * 1.1);
    }
    x = new student(info[0], grade);
    inAlready = false;
    for (let i = 0; i < students.length; i++) {
        if (x.class === students[i].class) {
            inAlready = true;
        }
    }
    if (inAlready) {
        alert("You added this class already.");
    } else {
        students.push(x);
        display();
    }
}

function display() {
    console.log(students);
    if (students.length === 0) {
        list.innerHTML = "The list will be placed here.";
    } else {
        list.innerHTML = "1. " + students[0].class + ": " + students[0].grade + "<br />";
        for (let i = 1; i < students.length; i++) {
            list.innerHTML += (i + 1 + ". " + students[i].class + ": " + students[i].grade + "<br />");
        }
    }
}

function deleteItem() {
    students.splice(parseInt(document.getElementById("delete").value) - 1, 1);
    document.getElementById("delete").value = "";
    display();
}

function findGPA() {
    avg = document.getElementById("gpa");
    total = 0;
    for (let i = 0; i < students.length; i++) {
        total += parseInt(students[i].grade);
    }
    total = total / students.length;
    avg.innerHTML = total;
}

function deleteList() {
    avg = document.getElementById("gpa");
    avg.innerHTML = "Click button";
    students.splice(0, students.length);
    display();
}
