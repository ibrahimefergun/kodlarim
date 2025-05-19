def ebob(a, b):
    while b != 0:
        temp = b
        b = a % b
        a = temp
    return a

#oklid alg. ile ebob bulduk
