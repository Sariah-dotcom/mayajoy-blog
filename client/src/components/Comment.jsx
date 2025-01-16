import React, { useEffect,  useState } from 'react';
import moment from 'moment';

export default function Comment({comment}) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
          try {
            const res = await fetch(`/api/user/${comment.userId}`);
            const data = await res.json();
            if (res.ok) {
              setUser(data);
            }
          } catch (error) {
            console.log(error.message);
          }
        };
        getUser();
      }, [comment]);

  return (
    <div className='flex p-4 border-b text-sm'>
      <div className="flex-shrink-0 mr-3">
        <img className='w-10 h-10 rounded-full' src={user.profilePicture} alt={user.username} />
      </div>

      <div className="flex-1">
        <div className="flex items-center mb-1">
            <span className='font-bold mr-3 text-sm truncate'>{ user ? `@${user.username}` : "anonymous user"}</span>
            <span className='text-gray-500 text-xs'> {moment(comment.createdAt).fromNow()}</span>
        </div>
        <p className='pb-3 text-gray-500'>{ comment.content }</p>
      </div>

    </div>
  )
}
