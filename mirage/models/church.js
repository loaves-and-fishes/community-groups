import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  owner: belongsTo({ inverse: 'church' }),
  groups: hasMany('group')
});
