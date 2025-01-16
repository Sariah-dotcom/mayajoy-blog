import React, { useEffect,  useState } from 'react';
import moment from 'moment';
import {FaThumbsUp} from 'react-icons/fa';
import { useSelector } from "react-redux";

export default function Comment({comment, onLike}) {
    const [user, setUser] = useState({});
    const { currentUser } = useSelector((state) => state.user);

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
    <div className='flex p-4 border-b text-sm font-dm'>
      <div className="flex-shrink-0 mr-3">
        <img className='w-10 h-10 rounded-full' src={user.profilePicture} alt={user.username} />
      </div>

      <div className="flex-1">
        <div className="flex items-center mb-1">
            <span className='font-bold mr-3 text-sm truncate'>{ user ? `@${user.username}` : "anonymous user"}</span>
            <span className='text-gray-500 text-xs'> {moment(comment.createdAt).fromNow()}</span>
        </div>
        <p className='pb-3 text-gray-500'>{ comment.content }</p>

        <div className='flex gap-2 items-center text-xs py-2' >
          <button type='button' onClick={() => onLike(comment._id)}>
            <FaThumbsUp className={`text-gray-500 hover:text-dark-green ${currentUser && comment.likes.includes(currentUser._id)}`} />
          </button>
          
          <p className='text-gray-400'>{
            comment.numberOfLikes > 0 && comment.numberOfLikes + " " +(comment.numberOfLikes === 1 ? "like" : "likes")
          }</p>
        </div>
      </div>

    </div>
  )
}
