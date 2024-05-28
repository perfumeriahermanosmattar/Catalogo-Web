import os
import json
# import math
import re

# Función para extraer el volumen de la descripción
def extraer_info(descripcion):
    # Utiliza una expresión regular para buscar un patrón de volumen en la descripción
    patron_volumen = r"(\bEDT\b|\bEDP\b|\bPARFUM\b|\bELIXIR\b)"
    match = re.search(patron_volumen, descripcion, flags=re.IGNORECASE)
    if match:
        return match.group(1)  # Devuelve el primer grupo de la coincidencia
    else:
        return "null"  # Si no se encuentra el patrón, devuelve "null"
    
def bubble_sort(lista):
    n = len(lista)
    for i in range(n):
        for j in range(0, n-i-1):
            if lista[j]["GroupBrand"] > lista[j+1]["GroupBrand"]:
                lista[j], lista[j+1] = lista[j+1], lista[j]
    return lista

# Obtiene el directorio actual
directorio_actual = os.path.dirname(os.path.realpath(__file__))
os.chdir(directorio_actual)

link = 'inventario.json'
# Carga el archivo JSON en una variable
with open(link,'r', encoding='utf-8') as f:
    data = json.load(f)

with open('description.json','r', encoding='utf-8') as f:
    descrip = json.load(f)

print("Que desea hacer: 1.Enumerar 2.Imprimir Descripciones 3.Sort")

n = int(input())

# Recorre cada objeto en el archivo JSON
i = 0

if n == 1:
    for objeto in data:
        objeto["id"]=i
        i+=1
elif n==2:
    for i in range(179):
        # print(objeto["GroupBrand"]+": "+objeto["ProductLine"])
        data[i]["Information"] = descrip[i]
else:
    print("Procesando.................................................")
    data = bubble_sort(data)

# Verifica si el atributo "ciudad" existe en el objeto
# Guarda los cambios en el archivo JSON (opcional)
with open(link, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

