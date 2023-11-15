// creando prototipo de clase
class Student{
  constructor({
    name,
    age,
    cursosAprobados = []
  }){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  // metodo que añade cursos
  addCourse(newCourse){
    this.cursosAprobados.push(newCourse);
    console.log('Curso agregado exitosamnte');
  }
}

// instancia de la clase student
const juan = new Student("Juan", 19, ["Curso 1", "Curso 2"]);
// metodo para añadir curso
juan.addCourse("Curso 3");
console.log(juan);