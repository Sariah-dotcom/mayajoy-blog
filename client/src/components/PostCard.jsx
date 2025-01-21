import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  const imageUrls = [
    'https://i.pinimg.com/736x/48/38/0c/48380cb54dab183b54842e79bfc41726.jpg',
    'https://i.pinimg.com/236x/23/23/15/2323155f2a56cae0fe57a5fb893e50e4.jpg',
    'https://i.pinimg.com/736x/00/f3/af/00f3af2a44bcef1f1b9dffc8aea1439a.jpg',
    'https://i.pinimg.com/236x/fe/27/d0/fe27d0a3a83591dd4ec98e66b56163f3.jpg',
    'https://i.pinimg.com/736x/ef/a2/cf/efa2cfd45a68e94b19cf66af2a37e003.jpg',
    'https://i.pinimg.com/736x/8f/c9/db/8fc9dbeb896a320188c9a71ee245115d.jpg',
    'https://i.pinimg.com/736x/6e/90/b6/6e90b6b3f43f528c389a2531688d9706.jpg',
    'https://i.pinimg.com/736x/b1/ec/21/b1ec21422ffe6859f74e103bfc108c9f.jpg',
    'https://i.pinimg.com/736x/30/a0/fd/30a0fd45e146087f319f5d75fb043799.jpg',
    'https://i.pinimg.com/236x/84/77/33/847733bb30cfc04f3e69ad968009e07c.jpg',
    'https://i.pinimg.com/236x/a4/11/ab/a411ab1c68ec39fe198c56db89e29203.jpg',
    'https://i.pinimg.com/236x/58/1d/a7/581da7fc04d9654e748dea16f0211c5a.jpg',
    'https://i.pinimg.com/236x/d0/c4/dd/d0c4dd189302f744e6148a14f986c580.jpg',
    'https://i.pinimg.com/236x/f8/7d/f6/f87df68fd6c6210296484ff8e9c89734.jpg',
    'https://i.pinimg.com/236x/ee/b6/2f/eeb62feca01ee32dec27d42e07282112.jpg',
    'https://i.pinimg.com/236x/bd/b8/72/bdb8723ebc36bd3e8112549272218056.jpg',
    'https://i.pinimg.com/236x/a7/aa/aa/a7aaaa18b61499153cbe339bc4503c17.jpg',
    'https://i.pinimg.com/236x/d2/2f/f3/d22ff3f2cb283676ac23eb97dc08100f.jpg',
    'https://i.pinimg.com/236x/f0/86/b1/f086b141a1cb66511906dbb9ea3092b3.jpg',
    'https://i.pinimg.com/236x/14/25/98/1425981111413092f87e16cc78a26c5c.jpg',
    'https://i.pinimg.com/236x/94/1c/b3/941cb39e7892a0f1ffe3e016c191cbeb.jpg',
    'https://i.pinimg.com/236x/c4/d8/fa/c4d8fa9c25a7f8d7634c045d1f1e4b36.jpg',
  ];

   // Select a random image URL
   const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  return (
    <div className='group relative w-full border border-gray-400 hover:border-2 h-[300px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={randomImage}
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