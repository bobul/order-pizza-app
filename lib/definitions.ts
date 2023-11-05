export type Restaurant = {
  id: number;
  name: string;
  image_url: string;
  street: string;
  description: string;
};

export type MenuItem = {
  id: string;
  category: string;
  restaurantId: number;
  name: string;
  topping: Array<string>;
  rank: number;
  price: number;
  pizza_image_url: string;
}