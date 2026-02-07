export interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description?: string;
}

export interface CartItem extends Package {
  quantity: number;
}

export interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
}
