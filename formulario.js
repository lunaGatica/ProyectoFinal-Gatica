const formulario = document.getElementById("FormularioA");
class UsuarioNuevo {
  constructor (nombre,apellido,edad,email,usuario,clave) {
    this.nombre = nombre;
    this.apellido= apellido;
    this.edad=edad;
    this.email= email
    this.usuario = usuario
    this.clave= clave
}

toString =()=>{
    return this.usuario + this.email;
}
}