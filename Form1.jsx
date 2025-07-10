import { useState } from 'react';

function Form1() {
    const [form, setForm] = useState({isim: "",sehir: "", cinsiyet: "",});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm((eskiForm) => ({
        ...eskiForm,  //önceki form alanlarını koru
        [name]: value, //değişen alanı güncelle
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!form.isim || !form.sehir || !form.cinsiyet) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }
  
        alert(`Form gönderildi!\nİsim: ${form.isim}\nŞehir: ${form.sehir}\nCinsiyet: ${form.cinsiyet}`);
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="isim"
            placeholder="İsminiz:"
            value={form.isim}
            onChange={handleChange}
            />

         <select name="sehir" value={form.sehir} onChange={handleChange}>
          <option value="">Şehir Seçin</option>
          <option value="istanbul">İstanbul</option>
          <option value="ankara">Ankara</option>
          <option value="izmir">İzmir</option>
          <option value="bursa">Bursa</option>
          <option value="adana">Adana</option>
          <option value="konya">Konya</option>
          <option value="antalya">Antalya</option>
          <option value="gaziantep">Gaziantep</option>
          <option value="kayseri">Kayseri</option>
          <option value="mersin">Mersin</option>
          <option value="samsun">Samsun</option>
        </select>
        <div>
          <label>
            <input 
              type="radio"
              name="cinsiyet"
              value="erkek"
              checked={form.cinsiyet === "erkek"}
              onChange={handleChange}
            />
            Erkek
          </label>
          <label>
            <input 
              type="radio"
              name="cinsiyet"
              value="kadin"
              checked={form.cinsiyet === "kadin"}
              onChange={handleChange}
            />
            Kadın
          </label>
          <label>
            <input 
              type="radio"
              name="cinsiyet"
              value="diger"
              checked={form.cinsiyet === "diger"}
              onChange={handleChange}
            />
            Diğer
          </label>
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Form1;