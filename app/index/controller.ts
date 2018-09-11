import Controller from '@ember/controller';
import ChurchModel from 'cg/models/church';

export default class Index extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  church!: ChurchModel;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'index': Index;
  }
}
