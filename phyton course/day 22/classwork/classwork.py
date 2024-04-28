# for i in range(11):
#     print(i)

# my_info = {
#     "first_name": "Nugzar",
#     "last_name": "Turmanishvili",
#     "age": 16,
#     "country": "Georgia",
#     "location": "Kareli",
# }


# print((my_info["first_name"]),(my_info["last_name"]),(my_info["age"]),(my_info["country"]),(my_info["location"]))



person_name = input('Enter Your Name')
person_email = input('Enter Your Mail')

person_account = {
    "name": "",
    "email":""
}

person_account["name"] = person_name
person_account["email"] = person_email

print(person_account.get('name',"Key Not Found"))