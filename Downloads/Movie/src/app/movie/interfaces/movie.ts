export interface Product{
    id: number;
    title: string;
    category: string;
    qty:number;
    description: string;
    image: string;
    price: number;
    rating: Rating
    }


export interface Rating{
    count: number;
    rate: number;
}



 export interface User {
    rol:string
    id: number;
    name: {
      firstname: string;
      lastname: string;
    };
    username: string;
    email: string;
    password: string;
    phone: string;
  }