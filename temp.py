# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""
while True:
    letra = input("Insira uma letra: \n")
    
    if letra.isalpha():
        if len(letra) == 1:
            match letra.lower():
                case "a":
                    print("É vogal")
                case "e":
                    print("É vogal")
                case "i":
                    print("É vogal")
                case "o":
                    print("É vogal")
                case "u":
                    print("É vogal")
                case _:
                    print("É consoante")
        else: 
            print("Insira somente 1 letra")
    else: 
        print("Insira somente 1 letra")
        
# exercicio 1
for i in range(1000):
    print(i+1)


# exercicio 2

num = []

for i in range(5):
    num.append(int(input("Insira um numero: \n")))

for i in range(5):
    print(num[i]*4)
    
# exercicio 3 

pessoas = []
pub = 0

for i in range(20):
    pessoas.append(int(input("Insira sua idade: \n")))

for i in range(20):
    if pessoas[i] > 18:
        pub += 1

print("Entraram %d pessoas" % pub)

# exercicio 4
        
nums = []
numM = 0

for i in range(10):
    nums.append(int(input("Insira um numero: \n")))

for i in range(10):
    if nums[i] > 1000 and nums[i] > 1:
        numM += 1   

print("Foram digitados %d numeros maiores que 1 e menores que 1000" % numM)

# exercicio 5

nums = []
soma = 0

for i in range(10):
    nums.append(int(input("Insira um numero: \n")))

for i in range(10):
    if nums[i] % 2 == 0 :
        soma += nums[i]  

print("A soma dos numeros pares é: %d" % soma)

# exercicio 6 

nums = []
soma = 0

while True:
    nums.append(int(input("Insira um numero: \n")))
    if nums[-1] == 0:
        break

for i in range(len(nums)):
    soma += nums[i]
    
media = float(soma / (len(nums)-1))

print("A media dos numeros inseridos é: %.2f" % media)

# Exercicio 7

while True:
    num1 = int(input("Insira o primeiro numero: \n"))
    num2 = int(input("Insira o segundo numero: \n"))
    if num1 == num2:
        print("Insira numeros diferentes")
    else:
        break

if num1 > num2:
    dif = num1 - num2
else:
    dif = num2 - num1
    
print("A diferença dos valores inseridos é: %d" % dif)

# Exercico 8

nums = []

for i in range(10):
    nums.append(int(input("Insira um numero: \n")))
    if i > 0:
        if nums[i] < mini:
            mini = nums[i]
    else:
        mini = nums[i]

print("O menor numero digitado foi: %d" % mini)

# Exercicio 9

nums = []
par = 0
impar = 0

while True:
    nums.append(int(input("Insira um numero: \n")))
    if nums[-1] == 0:
        break

for i in range(len(nums)):
    if nums[i] % 2 == 0 :
        par += nums[i]
    else:
        impar += nums[i]

print("A soma dos numeros pares é: %d" % par)
print("---------------------------------------------------------------------")
print("A soma dos numeros impares é é: %d" % impar)    

# Exercico 10

nums = []
par = []
impar = []
mpar = 0
mimpar = 0

while True:
    nums.append(int(input("Insira um numero: \n")))
    if nums[-1] == 0:
        break
    
    if nums[-1] % 2 == 0 :
        par.append(nums[-1])
        mpar += nums[-1]
    else:
        impar.append(nums[-1])
        mimpar += nums[-1]

mpar = mpar / len(par)
mimpar = mimpar / len(impar)

print("A media dos numeros pares é: %.2f" % mpar)
print("---------------------------------------------------------------------")
print("A media dos numeros impares é é: %.2f" % mimpar)  

# exercicio 11

num = int(input("Insira o numero a ser fatorado: \n"))
fator = 1

for i in range(1, num+1):
    fator *= i
    print(fator)

print("O fatorial do numero %d é: %d" %(num , fator))

# exercicio 12 

num = int(input("Insira o numero a: \n"))
div = 1

for i in range(1, num+1):
    div += 1/i
    print(div)

print("O resultado de s é considerando o numero %d é: %.2f" %(num , div))

# exercicio 13
num = int(input("Insira o numero a: \n"))

if num == 1:
    print("Não é primo")
elif num == 2:
    print("É primo")
else:
    for i in range(3,num):
         if (num % i) == 0:
             print("Não é um numero primo")
             break  
         else:
             print("É um numero primo")
             break