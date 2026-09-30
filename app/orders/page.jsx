"use client";

import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Orders
        </h1>

        {orders.length === 0 ? (
          <p className="text-gray-400">
            هنوز سفارشی ثبت نشده است.
          </p>
        ) : (
          <div className="space-y-4">
            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6"
              >
                <h2 className="text-xl font-bold mb-4">
                  سفارش {index + 1}
                </h2>

                <p>نام: {order.name}</p>
                <p>شماره: {order.phone}</p>
                <p>آدرس: {order.address}</p>
                <p>کد پستی: {order.postalCode}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}