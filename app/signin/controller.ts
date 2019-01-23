import Controller from '@ember/controller';
import { inject as service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import SessionService from 'cg/services/session';
import DS from 'ember-data';

export default class Signin extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('session')
  sessionService!: SessionService;
  @service('store')
  storeService!: DS.Store;

  @action
  async signin(email: string) {
    await this.sessionService.signin(email);
    this.transitionToRoute('manage');
  }

  @action
  async signup(email: string) {
    await this.sessionService.signup(email);
    await this.sessionService.signin(email);
    this.transitionToRoute('manage');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'signin': Signin;
  }
}
