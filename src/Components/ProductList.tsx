import { useEffect, useState } from "react";
//import type { Product } from '../data/Product';

const ProductList: React.FC = () => {
    interface Product {
     id: string;
    title: string;
    image: string;
    price: number;
    link: string;
}
    const [products, setProducts] = useState<Product[]>([])

    console.log("This is ",products);
    
    useEffect(() => {
        fetch('http://localhost:3000/products')  // JSON file on server
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
