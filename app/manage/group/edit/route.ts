import Route from '@ember/routing/route';
import Controller from './controller';
import GroupModel from 'cg/models/group';

export default class ManageGroupEdit extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  //@service('store')
  //storeService!: DS.Store;

  model() {
    return this.modelFor('manage.group');
  }

  setupController(controller: Controller, group: GroupModel) {
    controller.setProperties({
      group
    });
  }
}
