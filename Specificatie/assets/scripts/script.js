function Student(studentNummer, klas){
    let studentNummer = studentNummer;
    let klas = klas;
}

let studentList = [];
let Bob = new Student(29198, 'MD2A');
let Firas = new Student(29003, 'MD2A');
let Ruben = new Student(28644, 'MD2A');
let Mike = new Student(30079, 'MD2A');
let Justin = new Student(28454, 'MD2A');
let allStudents = studentList.push(Bob, Firas, Ruben, Mike, Justin);


localStorage.setItem('allStudents', allStudents);
const studentLocal = localStorage.getItem(allStudents);

console.log(studentLocal);