from turtle import *


#we want to paint a house

#step 1:   draw a square

speed(4)
width(5)
color("brown")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end drawing square

#draw a door

forward(70)
color("blue")
begin_fill()
left(90)
forward(100)
right(90)
forward(60)
right(90)
forward(100)
end_fill()

#finish door

#roof

penup()
goto(200,200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#finish roof

#windows



penup()
goto(20,160)
pendown()

color("brown")

right(330)
forward(20)
left(180)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)

penup()
goto(130,140)
pendown()

right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)




exitonclick()
