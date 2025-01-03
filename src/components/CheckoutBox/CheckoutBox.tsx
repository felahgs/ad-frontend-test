import { Product } from "@/types/product";
import React from "react";

export interface CheckoutBoxProps {
  products?: Product[];
}

function CheckoutBox({ products = [] }: CheckoutBoxProps) {
  const total = products.reduce((acc, cur) => acc + cur.price, 0);

  const itemCount = products.length;

  return (
    <div className="flex flex-col p-8 border border-neutral-300 rounded-lg text-primary gap-8">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-2xl">Order Summary</span>
        <span>
          {itemCount} {itemCount > 1 ? "items" : "item"}
        </span>
      </div>

      <div className="grid grid-cols-1 divide-y text-lg">
        <div className="pb-6">
          {products.map((product) => {
            return (
              <div className="flex justify-between w-full" key={product.id}>
                <span>{product.name}</span>
                <span>${product.price}</span>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between w-full text-xl font-bold pt-6">
          <span>Order Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutBox;
