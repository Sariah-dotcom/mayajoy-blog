import { Button, Modal, ModalBody, ModalHeader, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HiOutlineExclamationCircle } from 'react-icons/hi';


export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user)
  const [userPosts, setUserPosts] = useState([])

  const[showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  
  useEffect(()=> {
    const fetchPosts = async () => {
      try{
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`)
        const data = await res.json()

        if(res.ok) {
          setUserPosts(data.posts)

          if(data.posts.length < 9) {
            setShowMore(false)
          }
        }

      }catch (error){
        console.log(error.message)
      }
    };
    if(currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id])

  // Show More posts
  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Delete a post
  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        console.log('Delete successful, updating posts.');
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300'>
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <>
        <Table hoverable className='shadow-md'>
          <TableHead>
            <TableHeadCell>Date Updated</TableHeadCell>
            {/* <TableHeadCell>Post Image</TableHeadCell> */}
            <TableHeadCell>Post Title</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
            <TableHeadCell><span>Edit</span></TableHeadCell>
          </TableHead>

          {userPosts.map((post)=>(
            <TableBody className='divide-y font-dm' key={post._id}>
              <TableRow>
                {/* Display the repective post date */}
                <TableCell>{new Date(post.updatedAt).toLocaleDateString()}</TableCell>
                
                {/* Display post image */}
                {/* <TableCell>
                  <Link to={`/post/${post.slug}`}>
                    <img src={post.image} alt={post.title} className='w-20 h-10 object-cover'  />
                  </Link>
                </TableCell> */}

                {/* Display post title */}
                <TableCell>
                  <Link className='font-semibold text-gray-900' to={`/post/${post.slug}`}>
                    {post.title}
                  </Link>
                </TableCell>

                <TableCell>
                  {post.category}
                </TableCell>

                <TableCell>
                  <span onClick={() => {
                    setShowModal(true);
                    setPostIdToDelete(post._id);
                  }} className='font-medium text-red-500 hover:underline'>
                    Delete
                  </span>
                </TableCell>

                <TableCell>
                  <Link className='text-teal-500 hover:underline' to={`/update-post/${post._id}`}>
                    <span>Edit</span>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
        {
          showMore && (
            <button onClick={handleShowMore} className='w-full text-teal-500 self-center text-sm py-7'>Show More</button>
          )
        }
        </>

      ):(
        <p>You have no posts</p>
      )}
      <Modal show={showModal} onClose={()=> setShowModal(false)} popup size='md'>
              <ModalHeader />
                <ModalBody className='p-5'>
                  <div className="text-center">
                    <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 mx-auto mb-4' />
                    <h3 className='mb-5 text-lg'>Are you sure you want to delete this post?</h3>
                    <div className='flex justify-center gap-5'>
                      <Button onClick={handleDeletePost} color='failure'>Delete Post</Button>
                      <Button onClick={()=> setShowModal(false)}>Cancel</Button>
                    </div>
                  </div>
                </ModalBody>
          </Modal>
    </div>
  );
}
