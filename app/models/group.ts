import DS from 'ember-data';
import { attr, hasMany, belongsTo } from '@ember-decorators/data';
import User from './user';


export default class Group extends DS.Model.extend({

}) {
  @attr('string')
  name!: string;

  @belongsTo('user', { inverse: null })
  leader!: User;

  @hasMany('user')
  members!: User;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
  interface ModelRegistry {
    'group': Group;
  }
}
