export const Price = ({ price, discountedPrice }) => {
  const hasDiscount = discountedPrice && discountedPrice < price;

  return (
    <div>
      {hasDiscount ? (
        <>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 line-through font-medium pt-1 text-[14px]">
              ${price}.0
            </span>

            <span className="text-[18px] font-medium text-[#222529]">
              ${discountedPrice}.0
            </span>
          </div>
        </>
      ) : (
        <span className="text-[18px] font-medium text-[#222529]">
          ${price}.0
        </span>
      )}
    </div>
  );
};
