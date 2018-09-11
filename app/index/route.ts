import Route from '@ember/routing/route';
import { service } from '@ember-decorators/service';
import SessionService from 'cg/services/session';
import Controller from './controller';
import ChurchModel from 'cg/models/church';

export default class Index extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('session') sessionService!: SessionService;

  model() {
    return this.sessionService.user.church;
  }

  setupController(controller: Controller, church: ChurchModel) {
    debugger;
    super.setupController(controller, church);

    controller.setProperties({
      church
    });
  }
}
