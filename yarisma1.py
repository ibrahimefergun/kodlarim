def ebob(a, b):
    while b != 0:
        temp = b
        b = a % b
        a = temp
    return a

def ekok(a , b):
    return int(a*b / ebob(a, b))

print(ebob(22, 4))
print(ekok(22, 4))