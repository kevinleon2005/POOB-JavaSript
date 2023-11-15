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

}

// heredando los atributos de la clase padre

class FreeStudent extends Student{
  constructor(props){
    super(props); // constructor de nuestra clase madre
  }
}