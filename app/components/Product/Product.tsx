import { IProduct } from "@/models/Product";

interface ProductProps {
    product: IProduct,
    className: string
}

const Product: React.FC<ProductProps> = ({ product, className }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div className={`${className}`}>
            <img className="h-48 w-48" src={product.image}/>
            <div className="flex flex-col">
                <span className="overflow-x-ellipsis">{product.name}</span>
                <span>{`${formatter.format(product.price)}`}</span>
            </div>
        </div>
    )
}

export default Product;