import DS from 'ember-data';
import { attr } from '@ember-decorators/data';

export default class Church extends DS.Model.extend({

}) {
  @attr('string') name!: string;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
  interface ModelRegistry {
    'church': Church;
  }
}
