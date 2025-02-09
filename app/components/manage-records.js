import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ManageRecords extends Component {
  @tracked clientName = '';
  @tracked clientEmail = '';
  @tracked clientEmailToEdit = '';
  @tracked clientPhone = '';
  @tracked appointmentDate = '';
  @tracked requestService = '';
  @tracked clientEdit = null;

  @service client; // Inyectamos el servicio del cliente

  updateName = (event) => {
    this.clientName = event.target.value;
  };
  updateEmail = (event) => {
    this.clientEmail = event.target.value;
  };
  updateEmailToEdit = (event) => {
    this.clientEmailToEdit = event.target.value;
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

  searchClient = (event) => {
    event.preventDefault();

    if (this.clientEmail !== '') {
      this.clientEdit = this.client.searchClientByEmail(this.clientEmail);
      if (!this.clientEdit) {
        this.showMessage('manage-invalid-email');
        this.cleanForm();
      } else {
        document.getElementById('manage-invalid-email').style.display = 'none';
        this.clientName = this.clientEdit.clientName;
        this.clientEmailToEdit = this.clientEdit.clientEmail;
        this.clientPhone = this.clientEdit.clientPhone;
        this.appointmentDate = this.clientEdit.appointmentDate;
        this.requestService = this.clientEdit.requestService;
      }
    } else {
      this.showMessage('manage-invalid-email');
      this.cleanForm();
    }
  };

  editClient = (event) => {
    event.preventDefault();

    if (this.validateData()) {

      let updatedClient = {
        clientName: this.clientName,
        clientEmail: this.clientEmailToEdit,
        clientPhone: this.clientPhone,
        appointmentDate: this.appointmentDate,
        requestService: this.requestService,
      };


      let result = this.client.editClient(updatedClient, this.clientEdit.id);

      if (result) {
        this.cleanForm();
        document.getElementById('manage-success-screen').style.display =
          'block';
      }
    }
  };

  deleteClient = () => {
    let client = this.client.searchClientByEmail(this.clientEmail);

    if (client) {
      let result = this.client.deleteClient(client.id);
      if (result) {
        this.cleanForm();
        document.getElementById('manage-success-screen').style.display =
          'block';
      }
    } else {
      this.showMessage('manage-invali-feedback-form');
    }
  };

  validateData = () => {
    let isValid = true;

    if (this.clientName === '') {
      this.showMessage('manage-invalid-name');
      isValid = false;
    }

    if (this.clientEmail === '') {
      this.showMessage('manage-invalid-email');
      isValid = false;
    }

    if (this.clientPhone === '') {
      this.showMessage('manage-invalid-phone');
      isValid = false;
    }

    if (this.appointmentDate === '') {
      this.showMessage('manage-invalid-dateTime');
      isValid = false;
    }

    if (this.requestService === '') {
      this.showMessage('manage-invalid-serviceType');
      isValid = false;
    }

    return isValid;
  };

  cleanForm = () => {
    this.clientName = '';
    this.clientEmail = '';
    this.clientEmailToEdit = '';
    this.clientPhone = '';
    this.appointmentDate = '';
    this.requestService = '';
  };

  showMessage = (elementId) => {
    let element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'block';
      setTimeout(() => {
        element.style.display = 'none';
      }, 3000);
    }
  };
}
