import os
import json
# import math
import re


# Carga el archivo JSON en una variable
with open('json/inventario.json','r', encoding='utf-8') as f:
    data = json.load(f)

empresas = []
ifweirf = set()
nombre = ""
# max = 0
for perfume in data:
    # perfume["id"] = 15
    if perfume["GroupBrand"] != nombre:
        nombre = perfume["GroupBrand"]
        empresas.append(nombre)
    ifweirf.add(perfume["GroupBrand"])
    # print(perfume)
    # print(object["Gender"])
print(empresas)
print("----------------------------------------------------------------")
print(ifweirf)
# print (max)        
# print(data)

# Guarda los cambios en el archivo JSON (opcional)
with open('json/inventario.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)
