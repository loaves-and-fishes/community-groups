import Route from '@ember/routing/route';
import { service } from '@ember-decorators/service';
import SessionService from 'cg/services/session';

export default class Index extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('session') sessionService!: SessionService;

  model() {
    // let churchId = this.sessionService.churchId;

    // return this.store.findRecord('church', churchId);
  }
}
