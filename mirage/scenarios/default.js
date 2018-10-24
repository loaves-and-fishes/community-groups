export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  let user = server.create('user', {
    email: 'test@test.com'
  });
  
  let church = user.createChurch({
    name: 'My Church'
  });

  church.createGroup({
    name: 'Sample Group'
  });
}
