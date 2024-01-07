import React from 'react';

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-green-500 p-4'>
      <div className='flex items-center'>
        <div className='text-white text-4xl jokerman-font mr-8 select-none'><a  href='/'>Cute Kids</a></div>
        <nav className='flex ml-40'>
          <a href='/' className='text-white text-xl mr-10 border-b-2 border-green-500 hover:border-b-2 hover:border-gray-500'>
            Home
          </a>
          <a href='/product-info' className='text-white text-xl mr-10 border-b-2 border-green-500 hover:border-b-2 hover:border-gray-500'>
            Product Info
          </a>
          <a href='/checkout' className='text-white text-xl mr-10 border-b-2 border-green-500 hover:border-b-2 hover:border-gray-500'>
            Check Out
          </a>
        </nav>
      </div>
<div className='pt-6'>
  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      class="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2" />

    <span
      class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </div>
</div>
<div><a href='/checkout'>
  <button class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
  <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
  <span class="absolute inset-0 object-right-top -mr-6">
    <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
      6
    </div>
  </span>
</button></a>
</div>
      
      <div>
        <a href='/register' className='text-white text-xl border-2 border-white p-3 rounded-xl hover:border-2 hover:bg-gray-500'>
          Register
        </a>
      </div>
      
    </header>
  );
};

export default Header;
