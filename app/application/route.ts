import Route from '@ember/routing/route';
import { inject as service } from '@ember-decorators/service';
import SessionService from 'cg/services/session';

export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('session')
  sessionService!: SessionService;

  async beforeModel() {
    await this.sessionService.restoreSession();
  }
}
