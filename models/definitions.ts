export interface Viewport {
  width: Number,
  height: Number
}

export interface Link {
  id: Number,
  name: String,
  to: String,
  modifier?: String
}

export interface Category {
  id: Number,
  name: String,
}

export interface OpenHour {
  id: Number,
  start?: String,
  end?: String,
}

export interface Media {
  id: Number,
  name: String,
  link: String,
  icon: String,
  fallbackIcon?: String
}

export interface Dish {
  id: Number,
  name: String,
  ingredients: String,
  price: Number,
  img: String,
}

export interface MenuDishes {
  [key: string]: Dish[],
}
