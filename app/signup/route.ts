import Route from '@ember/routing/route';
import SignupController from './controller';

export default class Signup extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  resetController(controller: SignupController, isExiting: boolean) {
    if (isExiting) {
      controller.setProperties({
        email: ''
      });
    }
  }
}
