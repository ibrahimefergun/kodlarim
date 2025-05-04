# PDF'de Unicode karakter (emoji gibi) sorununu çözmek için uygun bir TrueType fontu (örneğin DejaVu) kullanalım
from fpdf import FPDF
import os

class PDF(FPDF):
    def header(self):
        self.set_font("Calibri", 12)
        self.cell(0, 10, "Direnc Bandiyla Haftalik Egzersiz ve Hareket Rehberi", ln=True, align="C")

    def chapter_title(self, title):
        self.set_font("Calibri", 12)
        self.cell(0, 10, title, ln=True)
        self.ln(2)

    def chapter_body(self, body):
        self.set_font("Calibri", "", 11)
        self.multi_cell(0, 10, body)
        self.ln()

pdf = PDF()

# DejaVu fontunu yükleyelim
font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
pdf.add_page()
pdf.add_font("DejaVu", "", font_path, uni=True)
pdf.add_font("DejaVu", "B", font_path, uni=True)

# Egzersiz planı
plan = """
📅 Haftalık Direnç Bandı Antrenman Planı

🔹 Pazartesi: Üst Vücut (Göğüs, Biceps, Triceps)
- Chest Press - 3x12
- Biceps Curl - 3x12
- Triceps Kickback - 3x12

🔹 Salı: Alt Vücut + Core
- Squat - 3x15
- Glute Kickback - 3x12 (her bacak)
- Standing Crunch - 3x20

🔹 Çarşamba: Aktif Dinlenme (Yürüyüş, Esneme)

🔹 Perşembe: Sırt ve Biceps
- Seated Row - 3x12
- Biceps Curl - 3x10
- Standing Crunch - 3x20

🔹 Cuma: Alt Vücut
- Squat - 3x15
- Glute Kickback - 3x12 (her bacak)
- Russian Twist - 3x20

🔹 Cumartesi: Full Body (Her Bölge)
- Chest Press - 2x15
- Squat - 2x15
- Biceps Curl - 2x12
- Standing Crunch - 2x20

🔹 Pazar: Dinlenme ve Esneme
"""

pdf.chapter_title("📌 Haftalık Egzersiz Programı")
pdf.chapter_body(plan)

# Hareket açıklamaları
exercises = {
    "1. Biceps Curl": "Bandı iki ayağının altına yerleştir, uçlarını eline al. Dirsek sabit, bandı yukarı çek ve yavaşça indir.",
    "2. Triceps Kickback": "Bandı sabitle, gövde öne eğik. Dirsekten düzleştirip geriye doğru bandı uzat.",
    "3. Chest Press": "Bandı sırtının arkasından geçir. Ellerle öne doğru iterken göğüs kaslarını çalıştır.",
    "4. Seated Row": "Yere otur, bandı ayaklarına sar. Dirsekleri vücuda yakın tutarak bandı kendine çek.",
    "5. Squat": "Bandı ayak altına yerleştir, uçları omuz hizanda. Dizleri bükerek çök ve kalk.",
    "6. Glute Kickback": "Eller ve dizler yerde. Bacağını geriye doğru düzleştirerek tekme at.",
    "7. Standing Crunch": "Bandı yukarıdan sabitle. Gövdeyi öne bükerek karın kaslarını sık.",
    "8. Russian Twist": "Yere otur, dizler bükülü. Bandı iki elinle tut, gövdeyi sağa sola döndür."
}

pdf.chapter_title("📘 Hareket Açıklamaları")
for name, desc in exercises.items():
    pdf.chapter_title(name)
    pdf.chapter_body(desc)

# Dosyayı kaydet
output_path = "/mnt/data/direnc_bandi_egzersiz_rehberi.pdf"
pdf.output(output_path)
output_path