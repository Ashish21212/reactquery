// import React, { useEffect, useState } from 'react'
import React from 'react';

import { useQuery } from '@tanstack/react-query';
const fetchAPI = async () => {
  const url = 'https://dummyjson.com/products';
  const res = await fetch(url);
  const response = await res.json('');
  return response.products;
}
const Products = () => {
  const {loading,error,response:products } = useQuery({ queryKey: ["products"], queryFn:fetchAPI})


  // const [products, setProducts] = useState([])
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  //   useEffect(()=>{
  //     const fetchAPI=async()=>{
  //       // setLoading(true);
  //       try{
  //         setError(null);
  //         const url='https://dummyjson.com/products';
  //         const res=await fetch(url);
  //         const response= await res.json();
  //         setProducts(response.products);
  //         setLoading(false);
  //       }
  //      catch(err){
  //       setError(err.message);
  //       setLoading(false);
  //      }
  //     }
  // fetchAPI();
  //   },[])
  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => {
              return(
                <>
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">

                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}

                    </h3>
                    <p className="mt-1 text-sm text-gray-500"></p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
              </>
              )
               })}
          </div>
        </div>
      </div>

    </>
  )
}

export default Products
