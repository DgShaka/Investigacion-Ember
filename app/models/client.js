import Model, { attr } from '@ember-data/model';

export default class ClientModel extends Model {
  @attr('number') clientID;
  @attr('string') clientName;
  @attr('string') clientEmail;
  @attr('number') clientPhone;
  @attr('date') appointmentDate;
  @attr('string') requestService;
}
