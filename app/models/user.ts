import DS from 'ember-data';
import { attr, belongsTo } from '@ember-decorators/data';
import Church from './church';
import Group from './group';

export default class User extends DS.Model.extend({

}) {
  @attr('string')
  name!: string;

  @attr('string')
  email!: string;

  @attr('string')
  password!: string;

  @belongsTo('church')
  church!: Church;

  @belongsTo('group')
  group!: Group;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
  interface ModelRegistry {
    'user': User;
  }
}
