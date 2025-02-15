import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CommentService extends Service {
  @tracked comments = [];
  @service client;
  @service store; // Inyectar store de Ember Data

  addComment(
    clientComment,
    email,
    clientQualification,
    recommendToAnotherPerson,
    improvement,
  ) {
    let client = this.client.clients.find(
      (client) => client.clientEmail === email,
    );

    if (client) {
      let newComment = this.store.createRecord('comment', {
        clientName: client.clientName,
        clientComment,
        clientQualification,
        recommendToAnotherPerson,
        improvement,
        date: new Date().toISOString().split('T')[0],
        email: email
      });

      this.comments = [...this.comments, newComment];

      return true;
    } else {
      return false;
    }
  }

  updateCommentName(lastEmail, newEmail, newName){
    let clientComments = this.comments.filter(c => c.email == lastEmail)
    clientComments.forEach(clientComment => {
      clientComment.clientName = newName;
      clientComment.email = newEmail;
    });
  }
}
