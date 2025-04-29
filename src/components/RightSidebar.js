import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const RightSidebar = ({ otherUsers }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='w-[25%]'>
      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
        <CiSearch size="20px" />
        <input
          type="text"
          className='bg-transparent outline-none px-2'
          placeholder='Search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Who to follow</h1>
        {
          otherUsers?.map((user) => {
            return (
              <div key={user?._id} className='flex items-center justify-between my-3'>
                <div className='flex'>
                  <div>
                    <img src={"https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg"} alt='cartoon' className='size-12 shrink-0 rounded-xl' />
                  </div>
                  <div className='ml-2'>
                    <h1 className='font-bold'>{user?.name}</h1>
                    <p className='text-sm'>{`@${user?.username}`}</p>
                  </div>
                </div>
                <div>
                  <Link to={`/home/profile/${user?._id}`}>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RightSidebar;

// import React from 'react'
// import { CiSearch } from "react-icons/ci";
// import { Link } from 'react-router-dom';

// const RightSidebar = ({ otherUsers }) => {
//   return (
//     <div className='w-[25%]'>
//       <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
//         <CiSearch size="20px" />
//         <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
//       </div>
//       <div className='p-4 bg-gray-100 rounded-2xl my-4'>
//         <h1 className='font-bold text-lg'>Who to follow</h1>
//         {
//           otherUsers?.map((user) => {
//             return (
//               <div key={user?._id} className='flex items-center justify-between my-3'>
//                 <div className='flex'>
//                   <div>
//                     <img src={"https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg"} alt='cartoon' className='size-12 shrink-0 rounded-xl' />
//                   </div>
//                   <div className='ml-2'>
//                     <h1 className='font-bold'>{user?.name}</h1>
//                     <p className='text-sm'>{`@${user?.username}`}</p>
//                   </div>
//                 </div>
//                 <div>
//                   <Link to={`/home/profile/${user?._id}`}>
//                     <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
//                   </Link>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default RightSidebar;