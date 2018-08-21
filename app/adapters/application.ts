import DS from 'ember-data';

export default class Application extends DS.JSONAPIAdapter.extend({
  // anything which *must* be merged on the prototype
}) {
  namespace = 'api';
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data' {
  interface AdapterRegistry {
    'application': Application;
  }
}