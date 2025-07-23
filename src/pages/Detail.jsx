import React, { useState } from "react";

import { useParams } from "react-router-dom";

import arr from '../data';
import { useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    arr.filter(ar => ar.id ==id);
  }, [id]); 


  console.log("data", data);

  const redirectFunc = () => {
    window.location.href = "/"
  }

  return (
    <div>
      <p>Gelen ID: {id}</p>
      <button onClick={redirectFunc}>Yönlendir</button>
    </div>
  )
}

export default Detail;