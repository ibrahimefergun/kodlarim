import { useState } from 'react';

function Todo() {
    const [liste, setListe] = useState([]);
    const [gorev, setGorev] = useState("");

    const ekle = () => {
        if (gorev.trim() ==="") return;
        const yeniGorev = {id: Date.now(), metin: gorev, tamamlandi: false};
        setListe([...liste, yeniGorev]);
        setGorev("");
    };
    const sil = (id) => {setListe(liste.filter((item) => item.id !== id))};
    const tamamla = (id) => {
        setListe(
            liste.map((item) => item.id === id ? {...item, tamamlandi: !item.tamamlandi }: item
        ));
    };
    return (
        <div>
            <h2>To-Do Listesi</h2>
            <input type="text" placeholder="madde ekleyin..." onChange={(e) => setGorev(e.target.value)}/>
            <button onClick={ekle}>Ekle</button>
            <ul>
                {liste.map((item)=> (
                    <li key={item.id}>
                        <span style = {{ textDecoration: item.tamamlandi ? "line-through" : "none", }}>
                            {item.metin}
                        </span>
                        <button onClick={() => tamamla(item.id)}>+</button>
                        <button onClick={() => sil(item.id)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Todo;