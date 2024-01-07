import React from 'react';

const Product = ({ product }) => {
  const sizes = ['S', 'M', 'L', 'XL'];

  console.log(product.available_sizes);

  return (
    <div className='border-2 p-10 gap-y-4 rounded-xl border-gray-300 hover:border-green-500 hover:rounded-none'>
      <img src={product.image_url} alt={product.name} />
      <div className='flex flex-row gap-x-2'>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
      <p>{product.description}</p>
      <div className='flex flex-row'>
        {sizes.map((size) => (
          product.available_sizes[size] === true && (
            <div key={size} className='border-2 p-2 hover:bg-green-500'>
              {size}
            </div>
          )
        ))}
      </div>
      <div>
      <button class="bg-gray-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full mt-3">
       add to Cart
      </button>
      </div>
    </div>
  );
};

export default Product;
