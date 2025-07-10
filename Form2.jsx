import { useState } from 'react';

function Form2() {
    const [form, setForm] = useState({isim: '', yas: '', kisiler: []});

    const handleSubmit = (e) => {
        e.preventDefault();
        const { isim, yas } = form;
        if (isim.trim() === '' || yas.trim() === '') {
            alert("Lütfen isim ve yaş giriniz.");
            return;
        }
        const yeniKisi = {
            id: Date.now(),
            isim, yas,
        };
        setForm({
            ...form, kisiler: [...form.kisiler, yeniKisi], isim: '', yas: ''
        });
    };
    return (
        <div style={{ maxWidth: 400, margin: 'auto', padding: 20}}>
            <h2>Kişi Listesi</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="isim"
                    value={form.isim}
                    onChange={(e) => setForm({...form, isim: e.target.value })}
                />
                <input 
                    type="number"
                    placeholder="yaş"
                    value={form.yas}
                    onChange={(e) => setForm({...form, yas: e.target.value})}
                    style={{ marginLeft: 10 }}
                />
                <button type="submit" style={{ marginLeft: 10 }}>Ekle</button>
            </form>
            <ul>
                {form.kisiler.map((kisi) => (
                    <li key={kisi.id}>
                        {kisi.isim} - {kisi.yas} yaşında
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Form2;