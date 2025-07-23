import { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountry(data);
        console.log("Ülkeler:", data); // Konsola yaz
      } catch (error) {
        console.error("Veri çekilirken hata oluştu:", error);
      }
    };

    getCountry();
  }, []);

  return (
    <div>
      <h2>Ülkeler Listesi</h2>
      <ul>
        {country.map((item, index) => (
          <li key={index}>{item.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
