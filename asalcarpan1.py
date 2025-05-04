sayi = int(input("Sayı girin: "))

bolen = 2

while sayi > 1:
    if sayi % bolen == 0:
        print(bolen)
        sayi = sayi // bolen
    else:
        bolen = bolen + 1