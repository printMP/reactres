import { useEffect } from "react"


const ProductList: React.FC = () => {
    useEffect(() => {
        fetch('/products.json')
        // .then((res)=> res.json())
        .then((data) => console.log("This is ",data))
        .catch()
    })

    return (
        <div>

        </div>
    )
}

export default ProductList;
