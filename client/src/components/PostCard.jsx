import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full border border-gray-400 hover:border-2 h-[300px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[200px] w-full grayscale object-cover group-hover:h-[140px] group-hover:grayscale-0 transition-all duration-300 z-20'
        />
      </Link>

      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2 line-clamp-2'>{post.title}</p>
        <p className='text-xs text-gray-500 -mt-2'>{new Date(post.updatedAt).toLocaleDateString()}</p>
        <span className='italic text-xs text-gray-500'>{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className='z-10 font-dm group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-dark-green text-dark-green hover:bg-dark-green hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Read Post
        </Link>
      </div>
    </div>
  );
}