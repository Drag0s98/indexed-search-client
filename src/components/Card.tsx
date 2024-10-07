import { IProduct } from "@src/interfaces/Product.interface";

interface Props {
  readonly product: IProduct;
}

export default function Card({ product }: Props) {
  return (
    <div className="bg-neutral-100 w-72 flex flex-col justify-center item-center p-5 hover:shadow-lg rounded-md">
      <div className="flex justify-center">
        <img src={product.imgUrl} alt="" width={200} />
      </div>
      <div>{product.title}</div>
      <div>{product.stars}</div>
      <div className="flex justify-between items-center">
        <h3>$ {product.price}</h3>
        <button className="border bg-[#febd69] text-white rounded-md" onClick={() => window.location.href = product.productURL}>
          <span
            className="iconify mdi--cart-outline"
            style={{ width: 60, height: 30 }}
          ></span>
        </button>
      </div>
    </div>
  );
}
