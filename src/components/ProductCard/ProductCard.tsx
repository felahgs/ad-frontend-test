import React, { ReactNode } from "react";
import Button from "@/components/Button";

export interface ProductCardProps {
  genre: string;
  title: string;
  price: number;
  img: ReactNode;
  isNew?: boolean;
  onAddItem?: () => void;
}

function ProductCard({
  genre,
  title,
  price,
  img,
  isNew,
  onAddItem,
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-5 max-w-[380px] p-6 border border-neutral-400 rounded-2xl">
      <div className="relative max-h-[240px] max-w-[332-px] rounded-t-2xl flex items-center justify-center overflow-hidden ">
        {img}
        {isNew && (
          <div className="absolute rounded-md m-3 px-3 py-1 bg-white top-0 left-0">
            New
          </div>
        )}
      </div>
      <div className="font-bold text-neutral-700">
        <span className="uppercase text-neutral-500">{genre}</span>
        <div className="flex justify-between">
          <span className="text-lg">{title}</span>
          <span className="text-xl">${price}</span>
        </div>
      </div>
      <Button variant="secondary" onClick={onAddItem}>
        ADD TO CART
      </Button>
    </div>
  );
}

export default ProductCard;
