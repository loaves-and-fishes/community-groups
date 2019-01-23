import Controller from '@ember/controller';
import { inject as service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import SessionService from 'cg/services/session';

export default class Application extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('session')
  sessionService!: SessionService;

  @action
  async signout() {
    await this.sessionService.signout();
    this.transitionToRoute('index');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'application': Application;
  }
}
