import { useState, useEffect }from 'react'
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await fetch('/api/post/getPosts');
          const data = await res.json();
          setPosts(data.posts);
        };
        fetchPosts();
    }, []);

  return (
    <div className='max-w-6xl flex flex-col gap-10 py-10'>
            {posts && posts.length > 0 && (
              <div className='flex flex-col gap-5 mx-auto'>
                <div className='flex flex-wrap gap-5 lg:gap-12'>
                  {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </div>
  )
}
