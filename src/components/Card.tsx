export default function Card() {
  return (
    <div className="bg-neutral-100 w-72 flex flex-col justify-center item-center">
      <div className="flex justify-center">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
          alt=""
          width={200}
        />
      </div>
      <div>Product Name</div>
      <div>Score</div>
      <div className="flex justify-between">
        <h3>$ 1,500</h3>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
