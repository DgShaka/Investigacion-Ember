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
      });

      this.comments = [...this.comments, newComment];

      return true;
    } else {
      return false;
    }
  }
}
