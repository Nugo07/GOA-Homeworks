# print(17 < 18 and 17 > 19)

# print(17 < 18 or 17 > 19) 

#print (10 < 11 and 9 < 10)

steps = int(input("ramdeni nabiji gaire:" ))

active_minutes = int(input("ramdeni wuti:" ))

goal_achived = (steps > 15000) or (active_minutes > 30)

# print(goal_achived)

goal_achived = (steps > 15000) and (active_minutes > 30)

print(goal_achived)