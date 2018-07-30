import Route from '@ember/routing/route';
import { service } from '@ember-decorators/service';
import SessionService from 'cg/services/session';

export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('session') sessionService!: SessionService;

  beforeModel() {
    super.beforeModel(...arguments);
    let session = this.sessionService;

    if (!session.isAuthenticated) {
      return this.transitionTo('signin');
    }

    return;
  }

  model() {
    return this.store.createRecord('group', { name: 'hi' }).save();
  }
}
