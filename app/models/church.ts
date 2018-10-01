import DS from 'ember-data';
import { attr, hasMany } from '@ember-decorators/data';
import GroupModel from './group';

export default class Church extends DS.Model.extend({

}) {
  @attr('string')
  name!: string;

  @hasMany('group')
  groups!: GroupModel
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
  interface ModelRegistry {
    'church': Church;
  }
}
