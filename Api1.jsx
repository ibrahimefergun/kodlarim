import { useEffect, useState } from "react";

function Kullanicilar() {
  const [kullanicilar, setKullanicilar] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [seciliKullanici, setSeciliKullanici] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((cevap) => cevap.json())
      .then((veri) => {
        setKullanicilar(veri);
        setYukleniyor(false);
      });
  }, []);

  const handleTikla = (kisi) => {
    setSeciliKullanici(kisi);
    if (seciliKullanici?.id === kisi.id) {
      return setSeciliKullanici(null);
    } else {
      return setSeciliKullanici(kisi);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Kullanıcılar</h2>

      {yukleniyor ? (
        <p>Yükleniyor...</p>
      ) : (
        <ul>
          {kullanicilar.map((kisi) => (
            <li key={kisi.id} onClick={() => handleTikla(kisi)} style={{ cursor: "pointer", marginBottom: "10px" }}>
              <strong>{kisi.name}</strong> ({kisi.email})
            </li>
          ))}
        </ul>
      )}

      {seciliKullanici && (
        <div style={{ marginTop: "30px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
          <h3>Detay</h3>
          <p><strong>Ad:</strong> {seciliKullanici.name}</p>
          <p><strong>Email:</strong> {seciliKullanici.email}</p>
          <p><strong>Şehir:</strong> {seciliKullanici.address.city}</p>
          <p><strong>Şirket:</strong> {seciliKullanici.company.name}</p>
        </div>
      )}
    </div>
  );
}

export default Kullanicilar;
