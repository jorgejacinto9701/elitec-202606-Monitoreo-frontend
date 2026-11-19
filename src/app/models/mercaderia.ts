import { Rating } from "./rating";

export interface Mercaderia {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
