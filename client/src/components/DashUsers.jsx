import { Button, Modal, ModalBody, ModalHeader, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user)
  const [users, setUsers] = useState([])
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const[showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(()=> {
    const fetchUsers = async () => {
      try{
        const res = await fetch(`/api/user/getusers`)
        const data = await res.json()

        if(res.ok) {
          setUsers(data.users)

          if(data.users.length < 10) {
            setShowMore(false)
          }
        }
      }catch (error){
        console.log(error.message)
      }
    };

    if(currentUser.isAdmin) {
      fetchUsers();
    }
  }, [currentUser._id])

  // Show users
  const handleShowMore = async () => {
    const startIndex = users.length;
    try {
      const res = await fetch(`/api/user/getusers?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => [...prev, ...data.users]);
        if (data.users.length < 10) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

//   Delete a user
  const handleDeleteUser = async () => {
    try {
      const res = await fetch(
        `/api/user/delete/${userIdToDelete}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUsers((prev) =>
          prev.filter((user) => user._id !== userIdToDelete)
        );
        setShowModal(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300'>
      {currentUser.isAdmin && users.length > 0 ? (
        <>
        <Table hoverable className='shadow-md'>
          <TableHead>
            <TableHeadCell>Date Created</TableHeadCell>
            <TableHeadCell>User Image</TableHeadCell>
            <TableHeadCell>User Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Admin</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
          </TableHead>

          {users.map((user)=>(
            <TableBody className='divide-y' key={user._id}>
              <TableRow>
                {/* Display the repective creation date */}
                <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                
                {/* Display user image */}
                <TableCell>
                    <img src={user.profilePicture} alt={user.username} className='w-10 h-10 rounded-full object-cover'  />
                </TableCell>

                <TableCell>
                    {user.username}
                </TableCell>

                <TableCell>
                    {user.email}
                </TableCell>

                <TableCell>
                    {user.isAdmin ? (<FaCheck className="text-green-500" />) : (<FaTimes className="text-red-500" />)}
                </TableCell>


                <TableCell>
                  <span onClick={() => {
                    setShowModal(true);
                    setUserIdToDelete(user._id);
                  }} className='font-medium text-red-500 hover:underline'>
                    Delete
                  </span>
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
        <p>There are no users</p>
      )}
      <Modal show={showModal} onClose={()=> setShowModal(false)} popup size='md'>
              <ModalHeader />
                <ModalBody className='p-5'>
                  <div className="text-center">
                    <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 mx-auto mb-4' />
                    <h3 className='mb-5 text-lg'>Are you sure you want to delete this user?</h3>
                    <div className='flex justify-center gap-5'>
                      <Button onClick={handleDeleteUser} color='failure'>Delete User</Button>
                      <Button onClick={()=> setShowModal(false)}>Cancel</Button>
                    </div>
                  </div>
                </ModalBody>
          </Modal>
    </div>
  );
}
