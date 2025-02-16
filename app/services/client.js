import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ClientService extends Service {
  @service store; // Inyectar store de Ember Data
  @tracked clients = [];//Arreglo reactivo de clientes
  @tracked lastID = 0;
  @service comment;

  /**
   * Agrega un nuevo cliente al arreglo
   */
  addClient(
    clientName,
    clientEmail,
    clientPhone,
    appointmentDate,
    requestService,
  ) {

      
    //Mapea el model de client y crea un nuevo cliente con los datos ingresados 
    let newClient = this.store.createRecord('client', {
      clientID: this.lastID,
      clientName,
      clientEmail,
      clientPhone,
      appointmentDate,
      requestService,
    });
    //los 3 puntos son para hacer una copia del arreglo y agregar el nuevo cliente 
    this.clients = [...this.clients, newClient]; // Agregar nuevo cliente al array
    this.lastID++;
  }

  /**
   * Busca un cliente por su email
   */
  searchClientByEmail(emailSearched) {
    return this.clients.find((c) => c.clientEmail === emailSearched) || null;
  }

  /**
   * Edita un cliente si existe en la lista
   */
  editClient(updatedClient, clientID) {
    let client = this.clients.find((c) => c.id === clientID);
    if (client) {
      this.comment.updateCommentName(client.clientEmail, updatedClient.clientEmail, updatedClient.clientName);
      client.clientName = updatedClient.clientName;
      client.clientEmail = updatedClient.clientEmail;
      client.clientPhone = updatedClient.clientPhone;
      client.appointmentDate = updatedClient.appointmentDate;
      client.requestService = updatedClient.requestService;
      
      return true;
    }
    return false;
  }

  /**
   * Elimina un cliente por ID
   */
  deleteClient(clientID) {
    let clientIndex = this.clients.findIndex(
      (client) => client.id === clientID,
    );
    if (clientIndex !== -1) {
      this.clients.splice(clientIndex, 1);
      this.clients = [...this.clients]; // Forzar actualización de @tracked
      return true;
    }
    return false;
  }
}
