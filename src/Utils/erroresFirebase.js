export const erroresFirebase = (code) => {
    switch(code){
        case "auth/email-already-in-use": 
         return "Usuario ya registrado"
          case "auth/invalid-email":
            return "Formato de email no valido"
          default: 
          return "Error en el servidor"
      }
}