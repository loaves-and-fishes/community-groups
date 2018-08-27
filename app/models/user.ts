import DS from 'ember-data';
import { attr } from '@ember-decorators/data';

export default class User extends DS.Model.extend({

}) {
  @attr('string')
  email!: string;

  @attr('string')
  password!: string;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
  interface ModelRegistry {
    'user': User;
  }
}
