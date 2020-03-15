const express = require('express')
const cors = require('cors')

const corsOptions = {
  origin: true
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())

const menuDishes = {
  breakfast: [
    {
      id: 0,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 29,
      img: 'breakfast-1.jpg'
    },
    {
      id: 1,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 39,
      img: 'breakfast-2.jpg'
    },
    {
      id: 2,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 15,
      img: 'breakfast-3.jpg'
    },
    {
      id: 3,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 23,
      img: 'breakfast-4.jpg'
    },
    {
      id: 4,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 26,
      img: 'breakfast-5.jpg'
    },
    {
      id: 5,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 32,
      img: 'breakfast-6.jpg'
    },
    {
      id: 6,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 16,
      img: 'breakfast-7.jpg'
    },
    {
      id: 7,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 20,
      img: 'breakfast-8.jpg'
    }
  ],
  lunch: [
    {
      id: 0,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 49,
      img: 'lunch-1.jpg'
    },
    {
      id: 1,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 54,
      img: 'lunch-2.jpg'
    },
    {
      id: 2,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 45,
      img: 'lunch-3.jpg'
    },
    {
      id: 3,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 39,
      img: 'lunch-4.jpg'
    },
    {
      id: 4,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 36,
      img: 'lunch-5.jpg'
    },
    {
      id: 5,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 52,
      img: 'lunch-6.jpg'
    }
  ],
  dinner: [
    {
      id: 0,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 22,
      img: 'dinner-1.jpg'
    },
    {
      id: 1,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 34,
      img: 'dinner-2.jpg'
    },
    {
      id: 2,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 32,
      img: 'dinner-3.jpg'
    },
    {
      id: 3,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 29,
      img: 'dinner-4.jpg'
    },
    {
      id: 4,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 26,
      img: 'dinner-5.jpg'
    },
    {
      id: 5,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 33,
      img: 'dinner-6.jpg'
    }
  ],
  drinks: [
    {
      id: 0,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 49,
      img: 'drink-1.jpg'
    },
    {
      id: 1,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 54,
      img: 'drink-2.jpg'
    },
    {
      id: 2,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 45,
      img: 'drink-3.jpg'
    },
    {
      id: 3,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 39,
      img: 'drink-4.jpg'
    },
    {
      id: 4,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 36,
      img: 'drink-5.jpg'
    },
    {
      id: 5,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 52,
      img: 'drink-6.jpg'
    }
  ],
  desserts: [
    {
      id: 0,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 22,
      img: 'dessert-1.jpg'
    },
    {
      id: 1,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 24,
      img: 'dessert-2.jpg'
    },
    {
      id: 2,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 26,
      img: 'dessert-3.jpg'
    },
    {
      id: 3,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 23,
      img: 'dessert-4.jpg'
    }
  ],
  wine: [
    {
      id: 0,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 59,
      img: 'wine-1.jpg'
    },
    {
      id: 1,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 63,
      img: 'wine-2.jpg'
    },
    {
      id: 2,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 80,
      img: 'wine-3.jpg'
    },
    {
      id: 3,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 99,
      img: 'wine-4.jpg'
    },
    {
      id: 4,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 78,
      img: 'wine-5.jpg'
    },
    {
      id: 5,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 66,
      img: 'wine-6.jpg'
    },
    {
      id: 6,
      name: 'Grilled Beef with potatoes',
      ingredients: 'Meat, Potatoes, Rice, Tomatoe',
      price: 98,
      img: 'wine-7.jpg'
    },
    {
      id: 7,
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

app.get('/getArticles', (req, res) => {
  const { limit, offset } = req.query
  res.send({
    articles: articles.slice(offset, Number(offset) + Number(limit)),
    pages: Math.ceil(articles.length / limit)
  })
})

module.exports = {
  path: '/api',
  handler: app
}
