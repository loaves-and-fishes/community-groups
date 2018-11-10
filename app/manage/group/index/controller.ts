import Controller from '@ember/controller';
import GroupModel from 'cg/models/group';

export default class ManageGroupIndex extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  group!: GroupModel;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'manage/group/index': ManageGroupIndex;
  }
}
