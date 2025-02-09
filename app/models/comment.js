import Model, { attr } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr('string') clientComment;
  @attr('string') email;
  @attr('string') clientQualification;
  @attr('string') recommendToAnotherPerson;
  @attr('string') improvement;
  @attr('string') date;
}
