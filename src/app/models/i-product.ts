export interface IProduct {

  _id:any;
  name:string;
  quantity:number;
  price:number;
  description:string
  image:string;
	category :string;
  company:string;
  colors:string[];
  featured:boolean;
  freeShipping:boolean;
  inventory:number;
  averageRating:number;
  numOfReviews:number;
  user:string;
  createdAt:Date;
  updatedAt:Date;
  id:any;


}
