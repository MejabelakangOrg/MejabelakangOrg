
def greeting(fname,lname,state):
	print("Hello, %s %s! How is the weather in %s?" %(fname, lname, state))

first_name = "Peter"
last_name = "Gervase"
mystate = "North Carolina"

greeting(first_name, last_name, mystate)



def input(
		prompt: object ="",
		/
) -> str:
	
    input