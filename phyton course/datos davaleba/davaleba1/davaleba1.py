age = 30 
if age >= 18:
    print("შენ შეგიძლია შესვლა")
else:
    print("არ შეგიძლია შესვლა")


#for loop
for i in range(17):
    print("gilocav shen gaxdi"+ " " + str(i) + " " + "wlis")
    
for i in range(1,101,2):
    print(i)


#while loop
seats = 10
while seats > 0:
    print("sell ticket N ",seats)
    seats= seats - 1
counter = 0
while counter < 4:
    counter = counter + 2
    print(counter)



print(2<30 and 2>30)
print(20==20 and 10!=20)
print(20<=10 or 20==10)