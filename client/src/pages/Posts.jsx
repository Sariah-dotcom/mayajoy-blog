import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Button, Spinner } from 'flowbite-react'
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard.jsx';

export default function Posts() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(()=> {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch (`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();

        if(!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }

        if(res.ok){
          setPost(data.posts[0]);
          setError(false);
          setLoading(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  },[postSlug]);

  useEffect(()=> {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();

        if(res.ok){
          setRecentPosts(data.posts);
        }
      }

      fetchRecentPosts();

    } catch (error) {
      console.log(error.message);
    }

  },[])

  if (loading) return (
    <div className='flex justify-center items-center min-h-screen'><Spinner size='xl' /></div>
  )
  return (
    <main className='flex flex-col max-w-6xl mx-auto min-h-screen lg:-mt-10'>
      <h1 className='font-playfair font-normal text-4xl mt-10 text-center max-w-2xl mx-auto lg:text-5xl'>{post && post.title}</h1>
      
      <Link to={`search?category=${post && post.cateory}`} className='self-center mt-5'>
        <Button color='gray' pill size='xs'>{post && post.category}</Button>
      </Link>

      <img src={post && post.image} alt={post && post.title} className='mt-10 max-h-[500px] lg:w-[80%] mx-auto object-cover' />

      <div className='flex justify-between py-3 mt-5 border-b text-xs'>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className='italic'>{post && (post.content.length /1000).toFixed(0)} mins read</span>
      </div>

      <div className='post-content my-10 mx-auto max-w-2xl w-full' dangerouslySetInnerHTML={{__html: post && post.content}}></div>

      <CommentSection postId={post._id} />

      <div className='flex flex-col justify-center items-center mb-5 py-10'>
        <h1 className='mt-5 font-playfair text-4xl'>Recent Posts</h1>
        <div className='flex flex-wrap gap-5 mt-10 justify-center'>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>

    </main>
  )
}
