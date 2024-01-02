import React from 'react'
import Product from '../components/Product'

const Home = () => {

  const productsBoys = [{
    "name": "Salopette Double Color",
    "price": "$34.99",
    "image_url": "https://cdn.discordapp.com/attachments/695373762790424646/1191794499639332874/IMG_2399.jpg?ex=65a6bc1f&is=6594471f&hm=27954e366b359d733a6ee38223199fe3362641134793e9a41d505905a8229ff5&",
    "description": "Double color jeans overall ",
    "available_sizes": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true
    }
  }, {
    "name": "Set",
    "price": "$30",
    "image_url": "https://cdn.discordapp.com/attachments/695373762790424646/1191794503573590086/IMG_2395.jpg?ex=65a6bc20&is=65944720&hm=72f9e9f1e7c7fbe46310c3ee6e33ef91123b2a86bba06af0b94dda0a6e3a955c&",
    "description": "Set for 3 yo ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "Baby Overall",
    "price": "$17",
    "image_url": "https://cdn.discordapp.com/attachments/695373762790424646/1191794531436335165/IMG_2394.jpg?ex=65a6bc26&is=65944726&hm=bf9b3fa600a9a0936afe2c94737153cfdd896207ace8037f5fb41d3fe1293893&",
    "description": "babies between 1&3 months",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "Dress",
    "price": "$15",
    "image_url": "https://cdn.discordapp.com/attachments/695373762790424646/1191794510854889602/IMG_2400.jpg?ex=65a6bc21&is=65944721&hm=0cc0973036676412cbaeece675221df09f45f0a14fb70e29077f2a6b4e3b28e1&",
    "description": "dress for babies ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  },
    , {
      "name": "Dress",
      "price": "20$",
      "image_url": "https://cdn.discordapp.com/attachments/695373762790424646/1191794522364063884/IMG_2402.jpg?ex=65a6bc24&is=65944724&hm=734e291a1b25ac47ef711c70ac8a143a99dfb6716bc59a9f375606fdf8952f28&",
      "description": "dress for babies ",
      "available_sizes": {
        "S": true,
        "M": false,
        "L": true,
        "XL": true
    }
  }, {
    "name": "SET",
    "price": "25$",
    "image_url": "https://cdn.discordapp.com/attachments/695373762790424646/1191794523152597032/IMG_2393.jpg?ex=65a6bc24&is=65944724&hm=9b1d39b5db9c874476668e3f78b8e3f7dbc388ebba6a523dcd66c2af98aa1aff&",
    "description": "Green and grey set ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }]

  const productsGirls = [{
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  },
    , {
      "name": "jacket",
      "price": "30$",
      "image_url": "",
      "description": "black cotton jacket ",
      "available_sizes": {
        "S": true,
        "M": false,
        "L": true,
        "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }]

  return (
    <div className=' grid grid-cols-5 '>
      {productsBoys.map((product) => (
        <>
          <div>
            <Product product={product} />
          </div>
        </>
      ))}
    </div>
  )
}

export default Home