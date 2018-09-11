import DS from 'ember-data';
import { attr, belongsTo } from '@ember-decorators/data';
import ChurchModel from './church';

export default class User extends DS.Model.extend({

}) {
  @attr('string')
  email!: string;

  @attr('string')
  password!: string;

  @belongsTo('church')
  church!: ChurchModel;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
  interface ModelRegistry {
    'user': User;
  }
}
