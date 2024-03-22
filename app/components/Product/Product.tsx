import { IProduct } from "@/models/Product";

interface ProductProps {
    product: IProduct
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div className="flex flex-col gap-1">
            <img className="h-48 w-48" src={product.image}/>
            <div className="flex flex-col">
                <span className="overflow-x-ellipsis">{product.name}</span>
                <span>{`${formatter.format(product.price)}`}</span>
            </div>
        </div>
    )
}

export default Product;