import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CommentsController extends Controller {
  @service comment;
  @tracked coments = this.comment.comments;

  reloadComments = () => {
    this.coments = this.comment.comments;

    // Obtenemos el contenedor donde se agregarán las tarjetas
    let cardRow = document.getElementById('cardRow');

    // Limpiamos los elementos previos en las tarjetas
    cardRow.innerHTML = '';

    // Creamos las tarjetas y las agregamos al contenedor
    this.coments.forEach((comment) => {
      // Crear la tarjeta (card)
      let card = document.createElement('div');
      card.id = 'card'; // Usamos el ID para la tarjeta
      card.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4'); // Clases para hacerla responsiva

      // Crear el cuerpo de la tarjeta (card-body)
      let cardBody = document.createElement('div');
      cardBody.id = 'cardBody';
      cardBody.classList.add('card-body'); // Agregar clase de Bootstrap para el cuerpo de la tarjeta

      // Crear el título de la tarjeta (card-title)
      let cardTitle = document.createElement('h5');
      cardTitle.id = 'cardTitle';
      cardTitle.classList.add('card-title'); // Usamos la clase de Bootstrap para el título
      cardTitle.innerHTML = `<i class="bi bi-person mx-2"></i> ${comment.clientName}`;

      // Crear el subtítulo de la tarjeta (card-subtitle)
      let cardSubtitle = document.createElement('h6');
      cardSubtitle.id = 'cardSubtitle';
      cardSubtitle.classList.add(
        'card-subtitle',
        'mb-2',
        'text-body-secondary',
      );
      cardSubtitle.innerText = `Date: ${comment.date}`;

      // Crear el texto de la tarjeta (card-text)
      let cardText = document.createElement('p');
      cardText.id = 'cardText';
      cardText.classList.add('card-text', 'bg-light'); // Usamos una clase de fondo claro
      cardText.innerText = comment.clientComment;

      // Agregar los elementos al cuerpo de la tarjeta
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardSubtitle);
      cardBody.appendChild(cardText);

      for (let i = 0; i < parseInt(comment.clientQualification); i++) {
        let starCalification = document.createElement('i');
        starCalification.innerHTML = "<i class='bi bi-star-fill'></i>";
        cardBody.appendChild(starCalification);
      }

      card.appendChild(cardBody);

      // Agregar la tarjeta al contenedor
      cardRow.appendChild(card);
    });
  };
}
