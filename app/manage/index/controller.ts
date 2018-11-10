import Controller from '@ember/controller';
import DS from 'ember-data';
import GroupModel from 'cg/models/group';

export default class ManageIndex extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  groups!: DS.RecordArray<GroupModel>
}
// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'manage/index': ManageIndex;
  }
}
