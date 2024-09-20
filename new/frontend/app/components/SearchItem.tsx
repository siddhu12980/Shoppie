export const SearchItem = ({ product }: { product: number }) => {
  return (
    <div
      onClick={() => (window.location.href = "/productlist")}
      className=" border  flex items-center justify-center cursor-pointer  w-full z-50 h-16 bg-white "
    >
      {product}
    </div>
  );
};
