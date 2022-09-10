import React from "react";
import icon from '/src/assets/img/notification-icon.svg'
import '../NotificationButton/styles.css'
import axios from "axios";
import { BASE_URL } from "../../../Utils/request";


type Props = {
  saleId : number;

}

function handleClick(id : number){
  axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
          console.log("Sucesso");
        });

}

function NotificationButton( {saleId} : Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  )
}

export default NotificationButton;
