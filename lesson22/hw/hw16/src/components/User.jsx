import React from 'react';

function User(props) {
  return (
    <li>
      firstname: {props.user.firstName}, lastname: {props.user.lastName},
      fullName: {props.user.firstName + ' ' + props.user.lastName}, age:{' '}
      {props.user.age + +5}, job: {props.user.job}{' '}
    </li>
  );
}

function UserList() {
  let users = [
    {
      id: 1,
      name: 'ivan',
      firstName: 'John',
      lastName: 'Doe',
      age: 24,
      job: 'Developer'
    },
    { id: 2, firstName: 'John', lastName: 'Doe', age: 24, job: 'Developer' },
    { id: 3, firstName: 'Kate', lastName: 'Reton', age: 22, job: 'Chef' },
    {
      id: 4,
      firstName: 'Melissa',
      lastName: 'Lout',
      age: 41,
      job: 'Developer'
    },
    { id: 5, firstName: 'Ann', lastName: 'Willington', age: 23, job: 'Driver' },
    {
      id: 6,
      firstName: 'Michel',
      lastName: 'Plank',
      age: 55,
      job: 'Developer'
    },
    { id: 7, firstName: 'Bob', lastName: 'Palanski', age: 32, job: 'Waiter' },
    {
      id: 8,
      firstName: 'Jack',
      lastName: 'Daniels',
      age: 23,
      job: 'Developer'
    },
    { id: 9, firstName: 'Poul', lastName: 'Torn', age: 65, job: 'Cashier' }
  ];
  return (
    <ol>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </ol>
  );
}

export default UserList;
