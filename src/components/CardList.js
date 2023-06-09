import React from 'react';
import Card from './Card';

const CardList = ({ robots}) => {
  // in conjuction with ErrorBoundry. Throwing error on purpose.
  // if (true) {
  //   throw new Error('NO');
  // }
  return (
    <div>
      {
        robots.map((user, i) => {
          return ( 
            <Card 
              key={i} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;