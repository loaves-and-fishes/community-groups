import Route from '@ember/routing/route';

interface Params {
  groupId: string;
}

export default class ManageGroup extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model({ groupId }: Params) {
    return this.store.findRecord('group', groupId);
  }
}
