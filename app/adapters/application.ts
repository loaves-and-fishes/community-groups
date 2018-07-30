import CloudFirestoreAdapter from 'ember-cloud-firestore-adapter/adapters/cloud-firestore';

export default class Application extends CloudFirestoreAdapter.extend({
  // anything which *must* be merged on the prototype
}) {
  // normal class body
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data' {
  interface AdapterRegistry {
    'application': Application;
  }
}