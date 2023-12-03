crew_members = ["alex rajavi","anstasia feradze","nika","nikoloz qatamadze","nikoloz takidze","nugzar turmanishvili","vako","vefxvia babajanishvili"] 

i_count = 0

super_least = []

for i in crew_members:
    i_count = 0
    for char in i:
        if char == "i":
            i_count += 1

if i_count > 2:
    super_least.append(i.capitalize())
    print(super_least)
           
