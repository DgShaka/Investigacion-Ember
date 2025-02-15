import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CommentsController extends Controller {
  @service comment;
  @tracked coments = this.comment.comments;

  @action
  reloadComments() {
    this.coments = this.comment.comments;
  }

  @action
  generateStars(cardID, clientQualification) {
    const cardElement = document.getElementById(cardID);
    if (cardElement) {
      cardElement.innerHTML = ''; 
      for (let i = 0; i < clientQualification; i++) {
        const star = document.createElement('i');
        star.className = 'bi bi-star-fill';
        cardElement.appendChild(star);
      }
    }
  }
}