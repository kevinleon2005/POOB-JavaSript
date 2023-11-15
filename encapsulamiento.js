class Course{

  constructor({name, classes = []}){
    // para hacer de metodos o claves privadas es poner una barra abajo
    this._name = name;
    this.classes = classes;
  }

  get name(){
    return this._name
  }

  set name(nuevoNombre){
    this._name = nuevoNombre;
  }

  // cambiar nombre
  changeName(nuevoNombre){
    this._name = nuevoNombre;
  }

}