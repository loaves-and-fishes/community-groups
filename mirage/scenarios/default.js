export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  let church = server.create('church', {
    name: 'My Church'
  });

  let leader = server.create('user', {
    email: 'test@test.com',
    name: 'test user',
    church
  });
  let leader2 = server.create('user', {
    email: 'test2@test.com',
    name: 'test2 user',
    church
  });
  let leader3 = server.create('user', {
    email: 'test3@test.com',
    name: 'test3 user',
    church
  });

  church.createGroup({
    name: 'Sample Group',
    leader,
    members: [
      leader,
      server.create('user', {
        email: 'member@someplace.com',
        name: 'member one'
      })
    ]
  });

  church.createGroup({
    name: 'Group Two',
    leader: leader2,
    members: [
      leader2,
      server.create('user', {
        email: 'member2@someplace.com',
        name: 'member two'
      })
    ]
  });

  church.createGroup({
    name: 'Group Three',
    leader: leader3,
    members: [
      leader3,
      server.create('user', {
        email: 'member3@someplace.com',
        name: 'member three'
      })
    ]
  });

  //leader.update('group', group);
}
