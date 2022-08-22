import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getUserInfo} from '../../utils/apiClientService'

function ContactCard({room}) {

  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("data"));
  const otherUserId = room.user_id1 === currentUser.id ? room.user_id2 : room.user_id1;
  const [contact, setContact] = useState();
  
  const searchInput = useSelector((state)=>state.searchInput)

  useEffect(() => {
    const iffy = async ()=>{
      const data = await getUserInfo(otherUserId); 
     
      setContact(data.data);
    }
    iffy();
  }, [otherUserId]);

  const handleClick = () => {
    dispatch({
      type : "SET_CHAT",
      payload : room.id
    })
  }

  console.log(contact ? contact.firstname.charAt(0) : undefined)
  
  return (
      <>
      {!searchInput && 
          <div onClick={handleClick} >  
                <div className="flex w-full p-[5px]">
                  <span className="border-2 border-gray-light w-full flex ml-1 items-center  h-auto bg-white font-normal rounded-md px-3 p-4 ">
                  { contact && contact.img_url &&
                      <figure>
                        <img
                        // src={contact ? contact.img_url ? contact.img_url : contact.firstname.charAt(0) : "WU"}
                        src = {contact.img_url}
                        className="rounded-full shadow-xl h-20 w-20"
                        alt="propic"
                        />
                      </figure>

                  }
                  {
                      contact && !contact.img_url &&
                      <span 
                      className="text-2xl flex align-center justify-center bg-main/75 text-gray-xlight cursor-pointer rounded-full shadow-xl"
                      style={{width:"80px",height:"80px", fontSize:"50px"}}>
                        <span style={{marginTop:"30%"}} className='flex align-center justify-center'>{contact.firstname.charAt(0)}</span>
                      
                    </span>
                  }
                 
                <div className="">
              
                  <div className="px-3 text-black text-xl">
                    {contact ? contact.firstname : 'Welp User'}
                    { contact ? (contact.type === 'admin' ? 
                      <span class="bg-indigo/50 text-gray-dark text-xs font-semibold mr-2 ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Admin</span> 
                        : null) 
                      : null
                    }
                  </div>

                  
                </div>
              </span>
          </div>
        </div>


            }

      {searchInput && contact.firstname.includes(searchInput) &&
          <div onClick={handleClick} >  
                <div className="flex w-full p-[5px]">
                  <span className="border-2 border-slate-300 w-full flex ml-1 items-center  h-auto bg-white font-normal rounded-md px-3 p-4 ">
                  <img
                      src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
                      className="rounded-full shadow-xl"
                      width="100"
                      height="100"
                      alt="propic"
                    />
                <div className="">
              
                  <div className="px-3 text-black text-xl">{contact ? contact.firstname : 'Welp User'}</div>

                  
                </div>
              </span>
          </div>
        </div>


            }

      </>
          


 
  )
}

export default ContactCard