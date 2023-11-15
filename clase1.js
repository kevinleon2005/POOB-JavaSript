// objeto literal, en si es una instancia de class Object que tiene js por defecto
const persona = {
  nombre: "Juan",
  apellido: "Vidal",
  edad: 19,
  cursosAprobados: [
    "Curso JavaScript", "Curso PHP"
  ],

  // metodos dentro de objetos 
  // añadiendo un curso
  aprobarCursos(curso){
    this.cursosAprobados.push(curso);
    console.log(this.cursosAprobados);
  }
};

// añadir elementos des pues de creado el objeto
// persona.cursosAprobados.push("Curso Go");

// persona.aprobarCursos("Curso C#");


// CREANDO PROTOTIPOS PROPIOS
function Student(nombre, edad, cursosAprobados) {

  this.nombre = nombre;
  this.edad = edad;
  this.cursosAprobados = cursosAprobados;

  // creando metodos
  /*
  this.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
  */
}

// también se pueden crear metodos por fuera de la funcion
Student.prototype.aprobarCurso = function(){
  this.cursosAprobados.push(nuevoCurso);
}

// creando instancias de nuestro prototipo
const carlos = new Student("Carlos", 23, ["curso1", "curso2", "curso3"])