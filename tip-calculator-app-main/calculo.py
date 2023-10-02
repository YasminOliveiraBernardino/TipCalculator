bill = float(input('Digite o valor da conta: '))
tip = int(input('Digite a porcentagem de gorjeta: '))
pp = int(input('Quantas pessoas irão dividir o valor? '))

parctotal = (bill * tip/100) / pp
total = (bill + (bill * tip/100)) / pp

print(parctotal)
print(total)

