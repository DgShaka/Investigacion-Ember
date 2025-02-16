import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CommentService extends Service {
  @tracked comments = [];
  @service client; // Inyectar servicio de clientes
  @service store; // Inyectar store de Ember Data

  // Metodo para agregar un comentario
  addComment(
    clientComment,
    email,
    clientQualification,
    recommendToAnotherPerson,
    improvement,
  ) {

    //revisa el arreglo de clients the service clients para encontrar al cliente con el mismo email
    let client = this.client.clients.find(
      (client) => client.clientEmail === email,
    );

    if (client) {
      //Crea un nuevo comentarios para ese cliente 
      //El createRecord es un metodo de ember data que crea un nuevo record segun un modelo 
      let newComment = this.store.createRecord('comment', {
        clientName: client.clientName,
        clientComment,
        clientQualification,
        recommendToAnotherPerson,
        improvement,
        date: new Date().toISOString().split('T')[0],
        email: email
      });

      this.comments = [...this.comments, newComment]; //Esto añade el nuevo comentario al arreglo de comentarios 

      return true;
    } else {
      return false;
    }
  }

  //Se crea un metodo que actualizara la informacion del email en caso de que el usuario cambie su nombre de usuario o el email este tambien lo haga'
  //con el proposito de mantener la conexion entre el comentario y el cliente
  updateCommentName(lastEmail, newEmail, newName){
    let clientComments = this.comments.filter(c => c.email == lastEmail)
    clientComments.forEach(clientComment => {
      clientComment.clientName = newName;
      clientComment.email = newEmail;
    });
  }
}
