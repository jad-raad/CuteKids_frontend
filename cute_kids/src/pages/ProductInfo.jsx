import React from 'react';

const ProductInfo = () => {
  const product = {
    name: 'Cute Kids T-Shirt',
    description: 'A comfortable and stylish T-shirt for kids.',
    price: '$19.99',
    availableSizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://example.com/cute-t-shirt.jpg',
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-full md:w-1/2 px-8"> {/* Use w-full for small screens and half width for medium screens and above */}
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-bold mb-2">Price: {product.price}</p>
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">Available Sizes:</p>
            <div className="flex">
              {product.availableSizes.map((size) => (
                <div key={size} className="mr-4 border-2 p-2">
                  {size}
                </div>
              ))}
            </div>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Add to Cart
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0"> {/* Use w-full for small screens and half width for medium screens and above */}
          <img src={product.imageUrl} alt={product.name} className="rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
