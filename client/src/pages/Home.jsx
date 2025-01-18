import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';
import BentoGrid from '../components/BentoGrid';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts?limit=3');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="home flex flex-col gap-10">
      <Hero />
      <About />

      {/* Display recent posts */}
      <div className='max-w-6xl flex flex-col gap-10 py-10 border-t border-b border-black'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-5 mx-auto'>
            <h2 className='text-4xl font-normal font-playfair mb-10'>Recent Posts</h2>
            <div className='flex flex-wrap gap-5 lg:gap-12'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/all-posts'}
              className='text-lg text-dark-green font-dm font-semibold hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
      <BentoGrid />
    </div>
    
  )
}
