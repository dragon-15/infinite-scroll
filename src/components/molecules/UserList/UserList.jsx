import React from 'react'
import UserImage from '../../atoms/UserImage/UserImage';

export default function UserList({list, lastRef}) {
  return (
    <ul className="user-list">
      {list.map((user, index) => {
        if (index === list.length - 1) {
          return (
            <li className="user-list__item">
              <UserImage
                src={user.thumbnailUrl}
                altText="Sample Image"
                compRef={lastRef}
                key={`${user.id}-${index}`}
              >
                {`Item number ${index + 1} : ${user.title}`}
              </UserImage>
            </li>
          );
        }
        return (
          <li className="user-list__item">
            <UserImage
              src={user.thumbnailUrl}
              altText="Sample Image"
              key={`${user.id}-${index}`}
            >
              {`Item number ${index + 1} : ${user.title}`}
            </UserImage>
          </li>
        );
      })}
    </ul>
  );
}
