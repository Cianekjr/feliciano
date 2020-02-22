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
        id: 4,
        name: 'wine'
      }
    ])
  }
}

export default options
