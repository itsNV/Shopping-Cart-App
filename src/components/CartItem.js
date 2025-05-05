import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast'

const CartItem = ({ item }) => {
    
    const dispatch = useDispatch()

    function removeProduct() {
        dispatch(remove(item.id))
        toast.error("Product removed")
    }



  let description =
    item.description.length > 100
      ? item.description.slice(0, 100) + "..."
          : item.description;
    

    return (
      
        <div>
      <div className='flex gap-7 pt-10 w-[80%]'>
          <div>
              <img src={item.image} className="h-[11rem] pt-3 w-[11rem]" />
          </div>

          <div className='bg-white'>
              
              <p className='font-bold flex flex-wrap'>{item.title}</p>
              
              <p className='mt-4 pr-3 text-xs  pt-3 text-slate-400'>{description}</p>


              <div className='flex justify-between items-center mt-4'>
                  
                  <p className="text-green-600 font-bold text-sm"
                  >${item.price}</p>


                  <div className='bg-red-400 mr-3 rounded-full  '>
                      
                  <MdOutlineDeleteOutline
                      onClick={removeProduct}
                      className='  h-6 w-5 m-1 p-[2px]'
                  />
                      
                  </div>
                 
              </div>

              

          </div>

          
            </div>
            <div className='h-0 w-[90%] border border-black mt-[3rem]'></div>
        </div>
  )
}

export default CartItem