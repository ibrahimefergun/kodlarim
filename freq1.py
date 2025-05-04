metin = input("Metin girin: ")

frekans = {}

for harf in metin:
    if harf in frekans:
        frekans[harf] = frekans[harf] + 1
    else:
        frekans[harf] = 1

en_cok = 0
en_harf = ''

for h in frekans:
    if frekans[h] > en_cok:
        en_cok = frekans[h]
        en_harf = h

print("En çok geçen harf:", en_harf)
print("Tekrar sayısı:", en_cok)