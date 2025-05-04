def asal_mi(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

n = int(input("Kaç tane asal sayı gösterelim: "))

i = 2
sayac = 0

while sayac < n:
    if asal_mi(i):
        print(i)
        sayac+=1
    i+=1