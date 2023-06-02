
# DEV JS TOOLBOX

A biblioteca dev-js-toolbox oferece várias ferramentas úteis para facilitar o desenvolvimento de aplicações em JavaScript. Dentre as ferramentas, existem formatadores, validadores e muito mais.

## Módulos

- Arrays
- Birthdate (Datas de nascimento)
- CreditCard (Cartões de crédito)
- Currency (Moedas)
- Documents (Documentos)
- Greeting (Saudações)
- Lenght Units (Unidades de comprimento)
- Numbers (Números)
- Phone (Telefones)
- Time (Tempo)
- Vechiles (Veículos)
- ZipCode (CEP's)

## Arrays

### orderArray

Organiza os itens de um array por ordem alfabética.  

`orderArray([string])`

### orderNumericArray

Organiza os números de um array por ordem crescente.  

`orderNumericArray([number])`

### orderObjectArray

Organiza os itens de um array de objetos baseado no parâmetro informado.

`orderObjectArray([{object}])`

## Birthdate (Datas de nascimento)

### isBirthDateValid

Verifica se a string informada é uma data de nascimento válida.

`isBirthDateValid(string)`

### formatBirthdate

Recebe uma string no formato 'DD/MM/YYYY' e retorna uma data no formato 'YYYY-MM-DD'.

`formatBirthdate(string)`

## CreditCard (Cartões de crédito)

### formatCreditCard

Formata uma string com o formato padrão de cartões de crédito.

`formatCreditCard(string|number)`

### getCardFlagName

Recebe um número de cartão de crédito e retorna o nome da bandeira do cartão.

`getCardFlagName(string|number)`

## Currency (Moedas)

### formatCurrency

Recebe um número e retorna um valor no formato R$ 1.234,56.

`formatCurrency(number)`

## Documents (Documentos)

### formatCPF

Recebe um valor e retorna o valor no formato 999.999.999-99.

`formatCPF(string|number)`

### formatCNPJ

Recebe um valor e retorna o valor no formato 99.999.999/9999-99.

`formatCNPJ(string|number)`

### formatDocument

Recebe um valor e retorna o valor formatado automaticamente como 999.999.999-99 ou 99.999.999/9999-99.

`formatDocument(string|number)`

