import React from "react";
import "./shop/contact.css";
import { Envelope } from "phosphor-react";
import { PhoneCall } from "phosphor-react";
import catcall from '../assets/cat-calling.gif';
export const Contact = () => {
  return (
    <div>
     
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199216.73338518466!2d35.30537500079644!3d38.72328531211434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b0e1d3fa4a74f%3A0x84bd8c4d5a4c2da7!2sKayseri%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2sus!4v1714721730925!5m2!1sen!2sus"
        class="google-map"
        title="Google Maps"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
       <div className="button-container">
        <button className="button" onClick={() => window.location.href = 'mailto:example@example.com'}>Mail <Envelope size={32} /></button>
        <button className="button" onClick={() => window.location.href = 'tel:+1234567890'}>Phone <PhoneCall size={32} />

</button>
   </div>

   <img className="gif" src={catcall} alt="catcall" />   
  
    </div>
  );
};
