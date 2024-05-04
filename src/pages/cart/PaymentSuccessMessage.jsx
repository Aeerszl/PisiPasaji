import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {CheckCircle } from "phosphor-react";
import coolFunGif from '../../assets/cool-fun.gif';
const PaymentSuccessMessage = () => {
  const navigate = useNavigate();

  // Sayfa yüklendiğinde, 3 saniye sonra anasayfaya yönlendir
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 6000);

    // Temizleme fonksiyonunu geri dön
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <h1>Congratulations! Your payment was successful. <CheckCircle  color="green"  size={32} weight="fill" /> </h1>
      <img src={coolFunGif} alt="Cool Fun Gif" className="gif-image" />
    </div>
  );
};

export default PaymentSuccessMessage;
