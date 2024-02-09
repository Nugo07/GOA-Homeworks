import moovly

# Create a new project
project = moovly.Project()

# Add a background image
background = moovly.Image("background.jpg")
project.add_object(background)

# Add a character of David IV
david = moovly.Character("david.png")
project.add_object(david)

# Add text or speech bubbles
text = moovly.Text("David IV ruled over the Kingdom of Georgia from 1089 to 1125.")
project.add_object(text)

# Animate the character
david.move_to(x=100, y=100)
david.say("I am David IV, the king of Georgia.")

# Add sound effects or background music
sound = moovly.Sound("music.mp3")
project.add_object(sound)

# Preview the animation
project.preview()

# Download or share the animation
project.download("david_iv_animation.mp4")