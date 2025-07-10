import { useState } from 'react';

function AlisverisListesi() {
    const urunler = ["Elma", "Armut", "Peynir", "Çikolata", "Ekmek", "Muz"];
    const [sepet, setsepet] = useState([]);
    const ekleCikar = (urun) => {
        if (sepet.includes(urun)) {
            setsepet(sepet.filter((item) => item !== urun));
        } else {
            setsepet([...sepet, urun]);
        }
    };
    const temizle = () => setsepet([]);
    return (
        <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
            <h2>Alışveriş Listesi</h2>
            <ul>
                {urunler.map((urun, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                    {urun}
                    <button style={{ marginLeft: "10px" }} onClick={() => ekleCikar(urun)}>
                    {sepet.includes(urun) ? "Çıkar" : "Ekle"} </button>
                    </li>
                ))}
            </ul>
            <hr />
            <h3>Sepetim ({sepet.length}):</h3>
            {sepet.length !== 0 && <button onClick={() => temizle()}>Sepeti temizle</button>}
            {sepet.length === 0 ? (
                <p>Sepette hiç ürün yok.</p>
            ) : (
                <ul>
                    {sepet.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AlisverisListesi;