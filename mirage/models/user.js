import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  church: belongsTo({ inverse: 'owner' })
});
