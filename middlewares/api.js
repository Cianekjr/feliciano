const express = require('express')
const cors = require('cors')

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '*',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
  credentials: true
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())

const menuDishes = {
  breakfast: [
    {
      id: 10,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 29,
      img: 'breakfast-1.jpg'
    },
    {
      id: 11,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 39,
      img: 'breakfast-2.jpg'
    },
    {
      id: 12,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 15,
      img: 'breakfast-3.jpg'
    },
    {
      id: 13,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 23,
      img: 'breakfast-4.jpg'
    },
    {
      id: 14,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 26,
      img: 'breakfast-5.jpg'
    },
    {
      id: 15,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 32,
      img: 'breakfast-6.jpg'
    },
    {
      id: 16,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 16,
      img: 'breakfast-7.jpg'
    },
    {
      id: 17,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 20,
      img: 'breakfast-8.jpg'
    }
  ],
  lunch: [
    {
      id: 101,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 49,
      img: 'lunch-1.jpg'
    },
    {
      id: 102,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 54,
      img: 'lunch-2.jpg'
    },
    {
      id: 103,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 45,
      img: 'lunch-3.jpg'
    },
    {
      id: 104,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 39,
      img: 'lunch-4.jpg'
    },
    {
      id: 105,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 36,
      img: 'lunch-5.jpg'
    },
    {
      id: 106,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 52,
      img: 'lunch-6.jpg'
    }
  ],
  dinner: [
    {
      id: 201,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 22,
      img: 'dinner-1.jpg'
    },
    {
      id: 202,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 34,
      img: 'dinner-2.jpg'
    },
    {
      id: 203,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 32,
      img: 'dinner-3.jpg'
    },
    {
      id: 204,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 29,
      img: 'dinner-4.jpg'
    },
    {
      id: 205,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 26,
      img: 'dinner-5.jpg'
    },
    {
      id: 206,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 33,
      img: 'dinner-6.jpg'
    }
  ],
  drinks: [
    {
      id: 301,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 49,
      img: 'drink-1.jpg'
    },
    {
      id: 302,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 54,
      img: 'drink-2.jpg'
    },
    {
      id: 303,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 45,
      img: 'drink-3.jpg'
    },
    {
      id: 304,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 39,
      img: 'drink-4.jpg'
    },
    {
      id: 305,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 36,
      img: 'drink-5.jpg'
    },
    {
      id: 306,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 52,
      img: 'drink-6.jpg'
    }
  ],
  desserts: [
    {
      id: 401,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 22,
      img: 'dessert-1.jpg'
    },
    {
      id: 402,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 24,
      img: 'dessert-2.jpg'
    },
    {
      id: 403,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 26,
      img: 'dessert-3.jpg'
    },
    {
      id: 404,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 23,
      img: 'dessert-4.jpg'
    }
  ],
  wine: [
    {
      id: 501,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 59,
      img: 'wine-1.jpg'
    },
    {
      id: 502,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 63,
      img: 'wine-2.jpg'
    },
    {
      id: 503,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 80,
      img: 'wine-3.jpg'
    },
    {
      id: 504,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 99,
      img: 'wine-4.jpg'
    },
    {
      id: 505,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 78,
      img: 'wine-5.jpg'
    },
    {
      id: 506,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 66,
      img: 'wine-6.jpg'
    },
    {
      id: 507,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 98,
      img: 'wine-7.jpg'
    },
    {
      id: 508,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 78,
      img: 'wine-8.jpg'
    }
  ]
}

const articles = [
  {
    id: 0,
    title: 'Taste the delicious foods in Asia',
    img: 'article-1.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 3,
    link: '#'
  },
  {
    id: 1,
    title: 'Significance of Thandai on Shivaratri',
    img: 'article-2.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 3,
    link: '#'
  },
  {
    id: 2,
    title: '10 exotic fish recipes to make at home',
    img: 'article-3.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 3,
    link: '#'
  },
  {
    id: 3,
    title: 'For the sake of that royal touch!',
    img: 'bg-4.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 3,
    link: '#'
  },
  {
    id: 4,
    title: 'The story of Laccha Paratha and how to make it at home',
    img: 'article-5.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 3,
    link: '#'
  },
  {
    id: 5,
    title: '5 ways to make oatmeal for breakfast',
    img: 'article-6.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 3,
    link: '#'
  },
  {
    id: 6,
    title: 'Taste the delicious foods in Asia',
    img: 'bg-1.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 5,
    link: '#'
  },
  {
    id: 7,
    title: 'Significance of Thandai on Shivaratri',
    img: 'article-2.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 6,
    link: '#'
  },
  {
    id: 8,
    title: '10 exotic fish recipes to make at home',
    img: 'bg-3.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 1,
    link: '#'
  },
  {
    id: 9,
    title: 'For the sake of that royal touch!',
    img: 'insta-4.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 13,
    link: '#'
  },
  {
    id: 10,
    title: 'The story of Laccha Paratha and how to make it at home',
    img: 'article-5.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 91,
    link: '#'
  },
  {
    id: 11,
    title: 'Taste the delicious foods in Asia',
    img: 'insta-1.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 33,
    link: '#'
  },
  {
    id: 12,
    title: '5 ways to make oatmeal for breakfast',
    img: 'insta-6.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 8,
    link: '#'
  },
  {
    id: 13,
    title: 'For the sake of that royal touch!',
    img: 'wine-4.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 3,
    link: '#'
  },
  {
    id: 14,
    title: 'Significance of Thandai on Shivaratri',
    img: 'article-2.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 45,
    link: '#'
  },
  {
    id: 15,
    title: '10 exotic fish recipes to make at home',
    img: 'bg-3.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 3,
    link: '#'
  },
  {
    id: 16,
    title: 'The story of Laccha Paratha and how to make it at home',
    img: 'insta-5.jpg',
    date: 'Sept. 06, 2019',
    author: 'Admin',
    commentsCount: 3,
    link: '#'
  }
]

app.get('/getRandomDishes', (req, res) => {
  const count = (req.query && req.query.count) || 4
  const allMenuDishes = Object.values(menuDishes).reduce((acc, item) => {
    return acc.concat(item)
  }, [])
  const allMenuDishesCount = allMenuDishes.length
  const uniqueArray = new Set()
  while (uniqueArray.size < Math.min(count, allMenuDishesCount)) {
    uniqueArray.add(Math.floor(Math.random() * allMenuDishesCount))
  }
  const result = [...uniqueArray].map((item, index) => allMenuDishes[item])
  res.send(result)
})

app.get('/getMenuDishes', (req, res) => {
  const category = req.query && req.query.category
  res.send(menuDishes[category] || [])
})

app.get('/getCategories', (_, res) => {
  res.send([
    {
      id: 0,
      name: 'breakfast'
    },
    {
      id: 1,
      name: 'lunch'
    },
    {
      id: 2,
      name: 'dinner'
    },
    {
      id: 3,
      name: 'drinks'
    },
    {
      id: 4,
      name: 'desserts'
    },
    {
      id: 5,
      name: 'wine'
    }
  ])
})

app.get('/getOpenHours', (req, res) => {
  res.send([
    {
      id: 0,
      start: '8:00',
      end: '21:00'
    },
    {
      id: 1,
      start: '8:00',
      end: '21:00'
    },
    {
      id: 2,
      start: '8:00',
      end: '21:00'
    },
    {
      id: 3,
      start: '8:00',
      end: '21:00'
    },
    {
      id: 4,
      start: '8:00',
      end: '21:00'
    },
    {
      id: 5,
      start: '8:00',
      end: '21:00'
    },
    {
      id: 6
    }
  ])
})

app.post('/sendNewsletter', (req, res) => {
  res.send(req.body)
})

app.post('/sendMessage', (req, res) => {
  res.send(req.body)
})

app.get('/getArticles', (req, res) => {
  const { limit, offset } = req.query
  res.send({
    articles: articles.slice(offset, Number(offset) + Number(limit)),
    pages: Math.ceil(articles.length / limit)
  })
})

app.get('/getReviews', (_, res) => {
  res.send([
    {
      id: 0,
      name: 'Ian Boner',
      position: 'Customer',
      img: 'person-1.jpg',
      about: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 1,
      name: 'Jason McClean',
      position: 'Customer',
      img: 'person-2.jpg',
      about: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 2,
      name: 'Mark Stevenson',
      position: 'Customer',
      img: 'person-3.jpg',
      about: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 3,
      name: 'Art Leonard',
      position: 'Customer',
      img: 'person-4.jpg',
      about: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }
  ])
})

app.post('/makeReservation', (req, res) => {
  res.send(req.body)
})

module.exports = {
  path: '/api',
  handler: app
}
