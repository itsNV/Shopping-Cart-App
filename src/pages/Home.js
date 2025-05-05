import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import toast from 'react-hot-toast';
import Product from '../components/Product';
import { useSelector } from 'react-redux';

const Home = () => {

    
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [items,setItems] = useState([]);


    async function fetchProductData() {
        setLoading(true);

        try {

            const res = await fetch(API_URL);
            const data = await res.json();
            setItems(data);
            
            
        }
        catch (e) {

            toast.error("Failed to fetch product data")
            setItems([]);
            
        }

        setLoading(false);
    }

    useEffect(() => {

        
        fetchProductData();
    }, []);


    return (
      
    <div className='flex w-[70%] h-auto flex-wrap gap-3 mt-[7rem] justify-center items-center'>
          
            {
                loading ? (<Spinner />)
                    :
                    (
                        items.map((item) => {
                            return <Product key={item.id} item={ item} />
                            
                        })
                    )
            }

    </div>
  )
}

export default Home