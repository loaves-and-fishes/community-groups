import Route from '@ember/routing/route';
import { service } from '@ember-decorators/service';
import SessionService from 'cg/services/session';

export default class Manage extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('session')
  sessionService!: SessionService;

  async model() {
    let sessionService = this.sessionService;
    let church = await sessionService.user.get('church');
    let groups = church.get('groups');

    return groups;
  }
}
