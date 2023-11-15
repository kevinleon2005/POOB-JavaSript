// importando de la conexión con la db
import { connection } from "./DB/mysqlDB.js";

// clase estudiante
class Student{

  constructor({name, email, telephone, twitter = undefined, facebook = undefined, instagram = undefined, country, learningPath = []}){
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.twitter = twitter;
    this.facebook = facebook;
    this.instagram = instagram;
    this.country = country;
    this.learningPath = learningPath;
    this.socialMedia = {
      twitter: this.twitter,
      facebook: this.facebook,
      instagram: this.instagram,
    }
  }

  // retornar todos los estudiantes
  async getStudents(){

    try {
      const [data] = await connection.promise.query("SELECT * FROM students");
      return data;
      
    } catch (error) {
      console.log(`Error al traer la data de la DB: ${error}`);
      return [];
    }
  }

  // solo un estudiante
  async getStudentById(id){

  }

  // añadir un estudiante
  async addStuddent(){

  }

}