#შექმენით თქვენი რაზმელებისგან სია და ამოაგდეთ იმ ინდექსზე მდგომი მოსწავლე, რომელი ინდექსის რიცხვიც უდრის თქვენი სახელის სიგრძეს


crew_members = ["alex rajavi","anstasia feradze","nika","nikoloz qatamadze","nikoloz takidze","nugzar turmanishvili","vako","vefxvia babajanishvili"] 

name = "nugzar turmanishvili"

for i in crew_members:
    if len(name) == len(crew_members):
        crew_members.pop(i)
        print(crew_members)