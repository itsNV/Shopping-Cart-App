import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

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
      <div className='min-h-screen w-full px-4 py-8'>
        <div className='max-w-7xl mx-auto'>
          {loading ? (
            <div className='min-h-[60vh] flex items-center justify-center'>
              <Spinner />
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
              {items.map((item) => (
                <Product key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
}

export default Home