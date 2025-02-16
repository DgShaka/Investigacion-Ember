import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CommentsController extends Controller {
  @service comment; // obtenemos el servicio de comentarios 
  @tracked coments = this.comment.comments; // Inicializamos la lista de comentarios 
  //esto es extraido del service de comentarios 

  @action
  reloadComments() {
    this.coments = this.comment.comments;
  }

  // Funcion encargada de colocar los inconos de estrellas dentro del card del comentario 
  // segun la calificacion del cliente
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