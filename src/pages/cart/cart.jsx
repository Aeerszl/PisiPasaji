import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import PaymentSuccessMessage from "./PaymentSuccessMessage";

import "./cart.css";
import { Cats } from "../../data/cats";
import { Cats_Item } from "../../data/cats-items";
export const Cart = () => {
  // ShopContext'ten gerekli fonksiyonları ve verileri al
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  // Sepetteki toplam tutarı al
  const totalAmount = getTotalCartAmount();

  // React Router DOM kullanarak sayfa yönlendirme fonksiyonunu al
  const navigate = useNavigate();

  // Ödeme başarılı mesajını göstermek için durum değişkeni
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleCheckout = () => {
    // Sepeti boşaltma fonksiyonu çağırılıyor
    checkout();
    // Ödeme başarılı mesajını göstermek için durum değişkenini true yap
    setPaymentSuccess(true);
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Selection</h1> {/* Sepet başlığı */}
      </div>
      <div className="cart">
        {/* Ürünlerin listelendiği bölüm */}
        {Cats.map((product) => {
          // Ürünün sepete eklenip eklenmediğini kontrol et
          if (cartItems[product.id] !== 0) {
            // Eğer eklenmişse, CartItem bileşenini render et
            return <CartItem data={product} />;
          }
          // Eğer eklenmemişse, null döndür (işlevsiz)
          return null; // Buraya bir açıklama satırı ekle
        })}
        
      </div>

      {/* Sepetin dolu olup olmadığını kontrol et */}
    {/* Sepetin dolu olup olmadığını kontrol et */}
{totalAmount > 0 && !paymentSuccess ? (
  // Eğer sepet doluysa ve ödeme başarılı değilse, ödeme ve devam etme butonlarını göster
  <div className="checkout">
    <p> Subtotal: ${totalAmount} </p> {/* Toplam tutar */}
    <button onClick={() => navigate("/")}> Continue Shopping </button> {/* Alışverişe devam etme butonu */}
    <button onClick={handleCheckout}> Checkout </button> {/* Ödeme butonu */}
  </div>
) : totalAmount === 0 && !paymentSuccess ? (
  // Eğer sepet boşsa ve ödeme başarılı değilse, bu mesajı göster
  <h1> Your Shopping Cart is Empty</h1>
) : null}

{/* Ödeme başarılı mesajını göstermek için bileşeni kontrol et */}
{paymentSuccess && <PaymentSuccessMessage />}

    </div>
  );
};
