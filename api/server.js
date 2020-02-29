const options = {
  'routes' () {
    this.get('/getCategories', () => [
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

    this.get('/getOpenHours', () => [
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

    this.get('/getMenuDishes', (_, req) => {
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
      const category = req.queryParams?.category
      return menuDishes[category] || []
    })

    this.post('/sendNewsletter', (_, req) => {
      return req.requestBody
    })
  }
}

export default options
