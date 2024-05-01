import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {CheckCircle } from "phosphor-react";

const PaymentSuccessMessage = () => {
  const navigate = useNavigate();

  // Sayfa yüklendiğinde, 3 saniye sonra anasayfaya yönlendir
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 9000);

    // Temizleme fonksiyonunu geri dön
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <h1>Congratulations! Your payment was successful. <CheckCircle  color="green"  size={32} weight="fill" /> </h1>
      {/* Ekstra bilgi veya yönlendirme bağlantıları ekleyebilirsiniz */}
    </div>
  );
};

export default PaymentSuccessMessage;
