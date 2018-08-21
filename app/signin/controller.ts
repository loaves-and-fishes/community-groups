import Controller from '@ember/controller';
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import SessionService from 'cg/services/session';

export default class Signin extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('session') sessionService!: SessionService;

  @action
  signin() {
    let session = this.sessionService;

    session.set('isAuthenticated', true);
    session.set('churchId', '1');
    this.transitionToRoute('index');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'signin': Signin;
  }
}
