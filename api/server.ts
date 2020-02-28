import { Category, OpenHour, Dish, MenuDishes } from '~/models/definitions'

const options = {
  'routes' () {
    this.get('/getCategories', (): Category[] => [
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

    this.get('/getOpenHours', (): OpenHour[] => [
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

    this.get('/getMenuDishes', (_: any, req: any): Dish[] => {
      const menuDishes: MenuDishes = {
        breakfast: [
          {
            id: 0,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          },
          {
            id: 1,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          },
          {
            id: 2,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          },
          {
            id: 3,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          },
          {
            id: 4,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          },
          {
            id: 5,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          },
          {
            id: 6,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          },
          {
            id: 7,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          }
        ],
        lunch: [
          {
            id: 0,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          }
        ],
        dinner: [
          {
            id: 0,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          }
        ],
        drinks: [
          {
            id: 0,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          }
        ],
        desserts: [
          {
            id: 0,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          }
        ],
        wine: [
          {
            id: 0,
            name: 'Grilled Beef with potatoes',
            ingredients: 'Meat, Potatoes, Rice, Tomatoe',
            price: 29,
            img: ''
          }
        ]
      }
      const category = req.queryParams?.category
      return menuDishes[category] || []
    })

    this.post('/sendNewsletter', (_: any, req: any) => {
      return req.requestBody
    })
  }
}

export default options
