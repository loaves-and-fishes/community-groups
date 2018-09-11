import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import DS from 'ember-data';
import SessionService from 'cg/services/session';

export default class Signup extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('store')
  storeService!: DS.Store;
  @service('session')
  sessionService!: SessionService;

  email: string = '';

  @action
  async signup() {
    let email = this.email;
    let store = this.storeService;
    let user = store.createRecord('user', {
      email
    });

    await user.save();
    await this.sessionService.signin(user.id);

    this.transitionToRoute('index');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'signup': Signup;
  }
}
