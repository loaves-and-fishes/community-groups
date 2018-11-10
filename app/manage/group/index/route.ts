import Route from '@ember/routing/route';
import Controller from './controller';
import GroupModel from 'cg/models/group';

export default class ManageGroupIndex extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  setupController(controller: Controller, group: GroupModel) {
    controller.setProperties({
      group
    });
  }
}
