import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)

  return (
    <div className='border-t pt-16 px-6 sm:px-10 bg-gray-50 min-h-screen'>
      {/* Page Title */}
      <h2 className='text-3xl font-semibold text-gray-800 mb-8'>My Orders</h2>

      <div className='flex flex-col gap-6'>
        {products.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row justify-between gap-5 bg-white shadow-sm hover:shadow-md transition-all rounded-2xl p-5 border border-gray-100'
          >
            {/* Left Section */}
            <div className='flex items-start gap-5'>
              <img
                src={item.image[0]}
                alt={item.name}
                className='w-20 h-20 object-cover rounded-lg border border-gray-200'
              />
              <div className='space-y-2'>
                <p className='text-lg font-medium text-gray-800'>{item.name}</p>

                <div className='flex flex-wrap items-center gap-3 text-sm text-gray-600'>
                  <p className='font-medium text-gray-900'>
                    {currency}
                    {item.price}
                  </p>
                  <span className='text-gray-400'>|</span>
                  <p>Size: <span className='font-medium text-gray-700'>M</span></p>
                  <span className='text-gray-400'>|</span>
                  <p>Quantity: <span className='font-medium text-gray-700'>1</span></p>
                </div>

                <p className='text-xs sm:text-sm text-gray-500'>
                  Ordered on: <span className='text-gray-700 font-medium'>25 July 2025</span>
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className='flex flex-col md:flex-row items-center justify-end gap-3'>
              <div className='flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full'>
                <span className='w-2 h-2 rounded-full bg-green-500'></span>
                <p className='text-sm text-green-700 font-medium'>Ready to Ship</p>
              </div>
              <button className='px-4 py-1.5 bg-violet-700 hover:bg-violet-800 text-white text-sm font-medium rounded-full shadow-sm transition-all'>
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
