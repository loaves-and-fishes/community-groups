import Route from '@ember/routing/route';
import Group from 'cg/models/group';
import Controller from './controller';

interface Params {
  groupId: string;
}

export default class ManageGroup extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model({ groupId }: Params) {
    return this.store.findRecord('group', groupId);
  }

  setupController(controller: Controller, group: Group) {
    controller.setProperties({
      group
    });
  }
}
