import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signin');
  this.route('signup');
  this.route('manage', function() {
    this.route('group', { path: '/groups/:groupId' }, function() {
      this.route('edit');
    });
  });
});

export default Router;
