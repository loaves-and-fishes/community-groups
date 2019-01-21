export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  let user = server.create('user', {
    email: 'test@test.com',
    name: 'test user'
  });
  
  let church = user.createChurch({
    name: 'My Church'
  });

  let group = church.createGroup({
    name: 'Sample Group',
    leader: user
  });

  user.update('group', group);
}
