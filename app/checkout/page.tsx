'use client';
import { useState } from 'react';
import { useCartStore } from '@/lib/store';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCartStore();
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <div className="min-h-screen bg-[#eaeded]">
        <Navbar />
        <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-sm border border-gray-300 text-center">
          <CheckCircle2 size={56} className="text-emerald-600 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-[#0f1111] mb-2">Order placed, thank you!</h2>
          <p className="text-xs text-gray-600 mb-6">
            Confirmation was sent to your email. Estimated delivery: <b>Tomorrow by 8 PM</b>.
          </p>
          <Link href="/" className="inline-block bg-[#ffd814] hover:bg-[#f7ca00] px-8 py-2.5 rounded-full font-bold text-xs border border-[#fcd200] shadow-sm">
            Continue Shopping on Amazon
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eaeded]">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl font-bold text-[#0f1111] mb-4">Shopping Cart & Checkout</h1>

        {items.length === 0 ? (
          <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-200 text-center space-y-4">
            <h2 className="text-xl font-bold text-[#0f1111]">Your Amazon Cart is empty</h2>
            <p className="text-xs text-gray-500">Shop today's deals, lightning sales, and top rated electronics.</p>
            <Link href="/" className="inline-block bg-[#ffd814] hover:bg-[#f7ca00] px-6 py-2 rounded-full font-bold text-xs border border-[#fcd200] shadow-sm">
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Items Review */}
            <div className="lg:col-span-8 bg-white p-6 rounded-sm border border-gray-200 space-y-4">
              <h2 className="text-lg font-bold border-b pb-2">1. Review Items and Shipping</h2>
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center py-3 border-b last:border-0">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-contain shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-[#0f1111] line-clamp-2">{item.title}</h4>
                    <p className="text-emerald-700 text-xs font-bold mt-0.5">In Stock</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-4 bg-white p-5 rounded-sm border border-gray-200 h-fit space-y-4 shadow-sm">
              <button
                onClick={() => { clearCart(); setSuccess(true); }}
                className="w-full py-2.5 bg-[#ffd814] hover:bg-[#f7ca00] text-black font-medium text-xs rounded-full border border-[#fcd200] shadow-sm transition"
              >
                Place your order
              </button>
              <p className="text-[11px] text-gray-500 text-center">
                By placing your order, you agree to Amazon's privacy notice and conditions of use.
              </p>
              <hr />
              <h3 className="font-bold text-sm">Order Summary</h3>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Items:</span>
                <span>${cartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Shipping & handling:</span>
                <span className="text-emerald-700 font-bold">FREE</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-base text-red-700">
                <span>Order Total:</span>
                <span>${cartTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}