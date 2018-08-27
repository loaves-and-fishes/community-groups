import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import DS from 'ember-data';

export default class Signup extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('store')
  storeService!: DS.Store;

  email: string = '';

  @action
  async signup() {
    let email = this.email;
    let store = this.storeService;
    let user = store.createRecord('user', {
      email
    });

    await user.save();
    debugger;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'signup': Signup;
  }
}
