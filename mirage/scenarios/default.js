export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  let leader = server.create('user', {
    email: 'test@test.com',
    name: 'test user'
  });
  let member = server.create('user', {
    email: 'member@someplace.com',
    name: 'member one'
  });
  
  let church = leader.createChurch({
    name: 'My Church'
  });

  church.createGroup({
    name: 'Sample Group',
    leader: leader,
    members: [
      member,
      leader
    ]
  });

  //leader.update('group', group);
}
