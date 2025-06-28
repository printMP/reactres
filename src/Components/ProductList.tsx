import { useEffect, useState } from "react";
//import type { Product } from '../types/Product';

const ProductList: React.FC = () => {
    interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  rating: number;
}
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('/store/products.json')  // JSON file on server
  .then(res => res.json())     // parse it to JS objects
  .then((data: Product[]) => {
    setProducts(data);          // now you have typed JS objects
    console.log("Products is from useState",data);
  })
  .catch(err => console.error(err));

    },[])

    return (
        <div>

        </div>
    )
}

export default ProductList;
