import React from "react";
import TopSection from "./TopSection";
import { FactoryIcon } from "lucide-react";

/* =========================
   INTERFACES
========================= */

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Address {
  fullName: string;
  phone: string;
  addressLine: string;
  city: string;
  country: string;
}

interface OrderSummary {
  subtotal: number;
  deliveryFee: number;
  tax: number;
}

interface PaymentMethod {
  id: number;
  name: string;
  image: string;
}

/* =========================
   STATIC DATA
========================= */

const products: Product[] = [
  {
    id: 1,
    name: "Premium Chair",
    price: 120,
    quantity: 1,
    image: "/product.jpg",
  },
  {
    id: 2,
    name: "Wooden Table",
    price: 200,
    quantity: 2,
    image: "/product.jpg",
  },
];

const deliveryAddress: Address = {
  fullName: "John Doe",
  phone: "+123456789",
  addressLine: "123 Street Name",
  city: "New York",
  country: "USA",
};

const billingAddress: Address = {
  fullName: "Jane Smith",
  phone: "+987654321",
  addressLine: "45 Billing Street",
  city: "California",
  country: "USA",
};

const orderSummary: OrderSummary = {
  subtotal: 520,
  deliveryFee: 20,
  tax: 15,
};

const paymentMethods: PaymentMethod[] = [
  { id: 1, name: "Visa", image: "/visa.png" },
  { id: 2, name: "UPI", image: "/upi.png" },
  { id: 3, name: "Mastercard", image: "/mastercard.png" },
];

const Checkout: React.FC = () => {
  const breadcrumbItems = [
    { label: "Checkout", path: `Checkout/`, isBold: true },
  ];

  const total =
    orderSummary.subtotal +
    orderSummary.deliveryFee +
    orderSummary.tax;

  return (
    <section className="bg-white">
      <TopSection breadCrumnb={breadcrumbItems} title="Checkout" />

      <div className="container mx-auto py-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 bg-[#F6F1E8] space-y-8">

            {/* PRODUCT SECTION */}
            <div className="bg-[#F6F1E8] p-6  rounded-lg">
              <div className="flex justify-between font-semibold border-b border-[#9A7522] pb-3">
                <span>Product</span>
                <span>Price</span>
              </div>

              {products.map((product) => (
                <div
                  key={product.id}
                  className="py-5 border-b last:border-none"
                >
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Quantity: {product.quantity}
                        </p>
                        <p className="underline text-sm mt-2 cursor-pointer">
                          Move to wishlist
                        </p>
                      </div>
                    </div>

                    <div className="font-medium">
                      ${product.price * product.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* DELIVERY DETAILS */}
            <div className="bg-[#F6F1E8] p-6  rounded-lg space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h2 className="font-semibold text-lg">
                  Delivery Details
                </h2>
                <div className="flex items-center gap-2 text-sm">
                  <FactoryIcon />
                  <span>Delivery by Tuesday</span>
                </div>
              </div>

              <div className="space-y-2">
                <p><strong>Name:</strong> {deliveryAddress.fullName}</p>
                <p><strong>Phone:</strong> {deliveryAddress.phone}</p>
                <p>
                  <strong>Address:</strong>{" "}
                  {deliveryAddress.addressLine}, {deliveryAddress.city},{" "}
                  {deliveryAddress.country}
                </p>
              </div>

              <button className="w-full bg-[#9a7523] text-white py-2 border rounded">
                Change Address
              </button>
            </div>

            {/* BILLING DETAILS */}
            <div className="bg-[#F6F1E8] p-6  rounded-lg space-y-4">
              <div className="border-b pb-3">
                <h2 className="font-semibold text-lg">
                  Billing Details
                </h2>
              </div>

              <div className="space-y-2">
                <p><strong>Name:</strong> {billingAddress.fullName}</p>
                <p><strong>Phone:</strong> {billingAddress.phone}</p>
                <p>
                  <strong>Address:</strong>{" "}
                  {billingAddress.addressLine}, {billingAddress.city},{" "}
                  {billingAddress.country}
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* PROMO */}
            <div className="bg-[#F6F1E8] p-6 border rounded-lg">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter your promo code"
                  className="flex-1 border px-3 py-2 rounded"
                />
                <button className="bg-[#9a7523] text-white px-4 border rounded">
                  Confirm
                </button>
              </div>
            </div>

            {/* ORDER DETAILS */}
            <div className="bg-[#F6F1E8] p-6 border rounded-lg space-y-4">
              <h2 className="font-semibold text-lg border-b pb-3">
                Order Details
              </h2>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${orderSummary.subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fees</span>
                <span>${orderSummary.deliveryFee}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>${orderSummary.tax}</span>
              </div>

              <div className="flex justify-between border-t pt-3 font-semibold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="bg-[#F6F1E8] p-6 border rounded-lg space-y-4">
              <h2 className="font-semibold text-lg border-b pb-3">
                Payment Methods
              </h2>

              <div className="border rounded p-4 space-y-3">
                <div className="flex gap-4">
                  {paymentMethods.map((method) => (
                    <img
                      key={method.id}
                      src={method.image}
                      alt={method.name}
                      className="h-6"
                    />
                  ))}
                </div>

                <div className="flex justify-between items-center border-t pt-3">
                  <span>Safe & Secure Payment</span>
                  <FactoryIcon />
                </div>
              </div>

              <p className="border-t pt-3">COD Available</p>

              <button className="w-full bg-[#9a7523] text-white py-3 border rounded">
                Pay Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
