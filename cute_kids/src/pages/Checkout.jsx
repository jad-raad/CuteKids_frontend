import React, { useState } from 'react'

const Checkout = () => {
  const [isDone,setIsDone] = useState(false)
  
  return (
    <><div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    <a href="#" class="text-2xl font-bold text-gray-800">sneekpeeks</a>
    <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
      <div class="relative">
        <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
              ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
            ></a>
            <span class="font-semibold text-gray-900">Shop</span>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
            <span class="font-semibold text-gray-900">Shipping</span>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
  {
  <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
    <div class="px-4 pt-8">
      <p class="text-xl font-medium">Order Summary</p>
      <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
      <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        <div class="flex flex-col rounded-lg bg-white sm:flex-row">
          <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://cdn.discordapp.com/attachments/695373762790424646/1191794499639332874/IMG_2399.jpg?ex=65a6bc1f&is=6594471f&hm=27954e366b359d733a6ee38223199fe3362641134793e9a41d505905a8229ff5&" alt="" />
          <div class="flex w-full flex-col px-4 py-4">
            <span class="font-semibold">Salopette Double Color</span>
            <span class="float-right text-gray-400">M</span>
            <p class="text-lg font-bold">$34.99</p>
          </div>
        </div>
        <div class="flex flex-col rounded-lg bg-white sm:flex-row">
          <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://cdn.discordapp.com/attachments/695373762790424646/1191794531436335165/IMG_2394.jpg?ex=65a6bc26&is=65944726&hm=bf9b3fa600a9a0936afe2c94737153cfdd896207ace8037f5fb41d3fe1293893&" alt="" />
          <div class="flex w-full flex-col px-4 py-4">
            <span class="font-semibold">Baby Overall</span>
            <span class="float-right text-gray-400">S</span>
            <p class="mt-auto text-lg font-bold">$17</p>
          </div>
        </div>
      </div>
  
      <p class="mt-8 text-lg font-medium">Shipping Methods</p>
      <form class="mt-5 grid gap-6">
        <div class="relative">
          <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
          <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
          <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
            <img class="w-14 object-contain" src="https://portal.wakilni.com/assets/images/wakilni-logo-v2.png" alt="" />
            <div class="ml-5">
              <span class="mt-2 font-semibold">Wakilni</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 4-6 Days</p>
            </div>
          </label>
        </div>
        <div class="relative">
          <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
          <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
          <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
            <img class="w-14 object-contain" src="https://cdn.freebiesupply.com/logos/large/2x/dhl-logo-png-transparent.png" alt="" />
            <div class="ml-5">
              <span class="mt-2 font-semibold">DHL</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
          </label>
        </div>
      </form>
    </div>
    <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p class="text-xl font-medium">Adress Details</p>
      <p class="text-gray-400">Complete your order for cash on Delivery.</p>
      <div class="">
        <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
        <div class="relative">
          <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        </div>
        <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
        <div class="relative">
          <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>
          </div>
        </div>
        <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Phone Number</label>
        <div class="flex">
          <div class="relative w-full flex-shrink-0">
            <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxxxxxx" />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-1">
              +961 
            </div>
          </div>
          
        </div>
        <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium"> Address</label>
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="relative flex-shrink-0 sm:w-7/12">
            <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="City/Street Address" />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <img class="h-4 w-4 object-contain" src="data:image/png;base64,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" alt="" />
            </div>
          </div>
          <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
            <option value="State">Akar</option>
            <option value="State">Baalbek/hermel</option>
            <option value="State">Beirut</option>
            <option value="State">Bekaa</option>
            <option value="State">kiserwan</option>
            <option value="State">Mount libanon</option>
            <option value="State">Nabatieh</option>
            <option value="State">North</option>
            <option value="State">South</option>
            
          </select>
          
        </div>
  
        
        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Subtotal</p>
            <p class="font-semibold text-gray-900">$51.99</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Shipping</p>
            <p class="font-semibold text-gray-900">$3.00</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Total</p>
          <p class="text-2xl font-semibold text-gray-900">$54.99</p>
        </div>
      </div>
      <button onClick={()=>setIsDone(true)} class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
    </div>
  </div>}
  </>
  )
}

export default Checkout