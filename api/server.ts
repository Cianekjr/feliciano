import { Category, OpenHour } from '~/models/definitions'

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
        id: 4,
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

    this.post('/sendNewsletter', (_: any, req: any) => {
      return req.requestBody
    })
  }
}

export default options
