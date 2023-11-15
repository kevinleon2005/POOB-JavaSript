// objeto literal
const juanLiteral = {

  name: "Juan",
  age: 19,
  socialMedia: {
    tiwtter: "juanVidal_03",
    instagram: "juanVidal_03",
    facebook: undefined,
  },

  approvedCourses: [
    "Curso 1",
    "Curso 2",
  ],

  learningPaths: [
    {
      name: "Escuela de desarrollo web",
      courses: [
        "Curso 1", "Curso 2"
      ]
    },
    {
      name: "Escuela Desarrollo de videojuegos",
      courses: [
        "Curso 1", "Curso 2"
      ]
    },
  ],
}


// clase estudiante
class Student{

  constructor({
    name,
    age,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = []}){

     this.name = name;
     this.age = age;
     this.socialMedia = {
      twitter,
      instagram,
      facebook
     };
     this.approvedCourses = approvedCourses;
     this.learningPaths = learningPaths;
  }

  // añadir learningpath
  addLearningPath(object){
    this.learningPaths.push(object);
  }

}

// instancia de la clase student
const juanDesdeInstancia = new Student({
  name: "Juan",
  age: 19,
  twitter: "JuanVidal_03",
  instagram: "JuanVidal_03",
  facebook: "Juan Vidal",
});

// clase de rutas de aprendizaje
class LearningPaths{

  constructor({name, courses = []}){
    this.name = name;
    this.courses = courses;
  }

}

// instancia de un nuevo curso
const desarrolloWeb = new LearningPaths({
  name: "Escuela de Desarrollo Web",
  courses: [
    "Curso de HTML y CSS",
    "Curso practico de JavaScript"
  ]
});

// añadiendo una nuevo ruta de aprendizaje
juanDesdeInstancia.addLearningPath(desarrolloWeb);