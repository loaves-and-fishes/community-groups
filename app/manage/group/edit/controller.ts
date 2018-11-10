import Controller from '@ember/controller';
import GroupModel from 'cg/models/group';
import { action } from '@ember-decorators/object';

export default class ManageGroupEdit extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  group!: GroupModel;

  @action
  async updateGroup(group: GroupModel, event: Event) {
    event.preventDefault();
    await group.save();
    this.transitionToRoute('manage.group', group.id);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'manage/group/edit': ManageGroupEdit;
  }
}
