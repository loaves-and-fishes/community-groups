import Route from '@ember/routing/route';
import DS from 'ember-data';
import GroupModel from 'cg/models/group';
import Controller from './controller';


export default class ManageIndex extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  setupController(controller: Controller, groups: DS.RecordArray<GroupModel>) {
    super.setupController(controller, groups);
    controller.setProperties({
      groups
    });
  }
}
