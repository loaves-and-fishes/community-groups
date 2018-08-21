import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(num) {
    return `Church ${num}`;
  }
});
