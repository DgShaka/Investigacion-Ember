import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CommentRegist extends Component {
  @service comment; // Inyectar el servicio de comentarios

  @tracked email = '';
  @tracked clientComment = '';
  @tracked clientQualification = 5;
  @tracked recommendToAnotherPerson = false;
  @tracked improvement = '';

  updateEmail = (event) => {
    this.email = event.target.value;
  };
  updateClientComment = (event) => {
    this.clientComment = event.target.value;
  };
  updateClientQualification = (event) => {
    this.clientQualification = event.target.value;
  };
  updateRecommendToAnotherPerson = (event) => {
    this.recommendToAnotherPerson = event.target.checked; 
  };
  updateImprovement = (event) => {
    this.improvement = event.target.value;
  };
  //cada vez que se cambie la propiedad de alguno de estos campos se va a actualizar
  @action
  submitComment(event) {
    event.preventDefault(); // Evita la recarga de la página

    if (this.email === '' || this.clientComment === '') {
      this.validateData();
    } else {
      this.validateData();
      let success = this.comment.addComment(
        this.clientComment,
        this.email,
        this.clientQualification,
        this.recommendToAnotherPerson,
        this.improvement,
      );

      if (!success) {
        document.getElementById('form-comment').classList.add('is-invalid');
        setTimeout(() => {
          document
            .getElementById('form-comment')
            .classList.remove('is-invalid');
        }, 3000);
        return;
      }
      document.getElementById('form-comment').classList.remove('is-invalid');

      // Limpiar los campos después de enviar
      this.email = '';
      this.clientComment = '';
      this.clientQualification = 5;
      this.recommendToAnotherPerson = false;
      this.improvement = '';

      // Mostrar la pantalla de éxito
      this.showThankYouScreen();
    }
  }

  validateData = () => {
    //Todas las alertas se muestran unicamente por 3 segundos
    if (this.email === '') {
      const emailInput = document.getElementById('inputClientEmail');
      emailInput.classList.add('is-invalid');
      setTimeout(() => {
        emailInput.classList.remove('is-invalid');
      }, 3000);
    } else {
      document
        .getElementById('inputClientEmail')
        .classList.remove('is-invalid');
    }

    if (this.clientComment === '') {
      const commentInput = document.getElementById('inputClientComment');
      commentInput.classList.add('is-invalid');
      setTimeout(() => {
        commentInput.classList.remove('is-invalid');
      }, 3000);
    } else {
      document
        .getElementById('inputClientComment')
        .classList.remove('is-invalid');
    }
  };

  @action
  displayFormComment() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('formComment').style.display = 'block';
  }

  @action
  showThankYouScreen() {
    document.getElementById('comment-overlay-success').style.display = 'block'; // Mostrar el overlay
    document.getElementById('comment-success-screen').style.display = 'block'; // Mostrar la pantalla de éxito
  }
}
