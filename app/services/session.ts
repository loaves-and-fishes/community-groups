import Service from '@ember/service';
import { service } from '@ember-decorators/service';
import DS from 'ember-data';
import User from 'cg/models/user';

export default class Session extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('store')
  storeService!: DS.Store;

  user!: User;
  isAuthenticated = false;
  churchId = '';

  async signin(email: string) {
    let store = this.storeService;
    let user = await store.findRecord('user', email);

    this.set('user', user);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'session': Session;
  }
}
