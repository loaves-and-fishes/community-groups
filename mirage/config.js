export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.namespace = 'api';

  this.get('/churches', (schema) => {
    return schema.churches.all();
  });

  this.get('/churches/:id', (schema, request) => {
    return schema.churches.find(request.params.id);
  });

  this.get('/users/:id', (schema, request) => {
    let email = request.params.id;
    return schema.users.findBy({ email });
  });

  this.post('/users', (schema, request) => {
    let body = JSON.parse(request.requestBody);

    return schema.users.create(body.data.attributes);
  });
}
