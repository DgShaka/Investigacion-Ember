import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class Regist extends Component {
  @tracked clientName = '';
  @tracked clientEmail = '';
  @tracked clientPhone = '';
  @tracked appointmentDate = '';
  @tracked requestService = '';

  @service client; // Inyectamos el servicio del cliente para agregar el nuevo a la lista

  // Métodos para manejar la actualización de cada campo, cada vez que se agregue un valor en el input correspondiente se va actualizar la variable
  updateName = (event) => {
    this.clientName = event.target.value;
  };

  updateEmail = (event) => {
    this.clientEmail = event.target.value;
  };

  updatePhone = (event) => {
    this.clientPhone = event.target.value;
  };

  updateDate = (event) => {
    this.appointmentDate = event.target.value;
  };

  updateService = (event) => {
    this.requestService = event.target.value;
  };

  // Método para manejar el envío del formulario
  submitClient = (event) => {
    event.preventDefault(); // Prevenimos el comportamiento por defecto (recarga de página)
    const submitButton = document.getElementById('regist-submit-button');

    // Verificar que todos los campos estén completos
    if (
      this.clientName == '' ||
      this.clientEmail == '' ||
      this.clientPhone == '' ||
      this.appointmentDate == '' ||
      this.requestService == ''
    ) {
      this.validateData(false);
      document
        .getElementById('regist-thank-you-screen')
        .classList.remove('show');
    } else {
      submitButton.disabled = true; // Deshabilitar el botón
      this.sendData();
      this.validateData(true);
      submitButton.disabled = false;
      document.getElementById('regist-thank-you-screen').classList.add('show');
    }
  };
//Este metodo funciona para mostrar las alertas sobre los campos de form, usando las clases de bootstrap, esto se hace para cada campo
  validateData = (wasValidate) => {
    if (this.clientName == '' && !wasValidate) {
      document.getElementById('regist-fullName').classList.add('is-invalid');
    } else {
      document.getElementById('regist-fullName').classList.remove('is-invalid');
    }

    if (this.clientEmail == '' && !wasValidate) {
      document.getElementById('regist-email').classList.add('is-invalid');
    } else {
      document.getElementById('regist-email').classList.remove('is-invalid');
    }

    if (this.clientPhone == '' && !wasValidate) {
      document.getElementById('regist-phone').classList.add('is-invalid');
    } else {
      document.getElementById('regist-phone').classList.remove('is-invalid');
    }

    if (this.appointmentDate == '' && !wasValidate) {
      document.getElementById('regist-dateTime').classList.add('is-invalid');
    } else {
      document.getElementById('regist-dateTime').classList.remove('is-invalid');
    }

    if (this.requestService == '' && !wasValidate) {
      document.getElementById('regist-serviceType').classList.add('is-invalid');
    } else {
      document
        .getElementById('regist-serviceType')
        .classList.remove('is-invalid');
    }
  };
  
  closeThankYouScreen = () => {
    let thankYouScreen = document.getElementById('regist-thank-you-screen');
    let closeButton = document.getElementById('regist-thank-you-close-button');

    closeButton.addEventListener('click', function () {
      thankYouScreen.classList.remove('show');
    });
  };

  sendData = () => {
    //guarda el cliente en el service 
    this.client.addClient(
      this.clientName,
      this.clientEmail,
      this.clientPhone,
      this.appointmentDate,
      this.requestService,
    );

    // Limpiar los campos del formulario después de enviar los datos
    this.clientName = '';
    this.clientEmail = '';
    this.clientPhone = '';
    this.appointmentDate = '';
    this.requestService = '';
  };

  // Funcion encargada de cerrar la ventana de agradecimiento
  closeThankYouScreen = () =>{
    document.getElementById('regist-thank-you-screen').classList.remove('show');
  }
}
