
# Paper 2: Practicle Assignment:

# Form Submission Application using vs code
#Requirements
#1, The Name Field should not be empty
#2, The age field should be a valid integer between 1 and 100
#3, The email field should be in a avlid email formt

import tkinter as tk
from tkinter import messagebox
#Function For the validation Checks of Requirements , 
def validate_form():
    name = name_entry.get()
    age = age_entry.get()
    email = email_entry.get()
# Clear previous error messages
    name_error.config(text="")
    age_error.config(text="")
    email_error.config(text="")
    valid = True

#Requirement 1 valodation
 
#Validate Name
    if not name.strip():
        name_error.config(text="Name cannot be empty.")
        valid = False
    # elif not name.isalpha():
    #     name_error.config(text="Name must contain only letters.")
    #     valid = False

   
   
#Requirement 2 valodation
           
# Age Validation
    try:
        age_int = int(age)
        if age_int < 1 or age_int > 100:
            age_error.config(text="Age must be between 1 and 100.")
            valid = False
    except ValueError:
        age_error.config(text="Age must be a valid integer.")
        valid = False
    
#Requirement 3 valodation
# Email Validation
    if "@" not in email or "." not in email.split('@')[-1]:
        email_error.config(text="Invalid email format.")
        valid = False
    
    if valid:
        messagebox.showinfo("Success", "Form submitted successfully")
    else:
        messagebox.showerror("Error", "Form submission failed Please correct the errors")










# For creating the main application window(GUI)
app = tk.Tk()
app.title("Form Validation")




# form labels and entries
tk.Label(app, text="Name:").grid(row=0, column=0, padx=10, pady=5, sticky=tk.E)

name_entry = tk.Entry(app)
name_entry.grid(row=0, column=1, padx=10, pady=5)

name_error = tk.Label(app, text="", fg="red")
name_error.grid(row=0, column=2, padx=10, pady=5, sticky=tk.W)

tk.Label(app, text="Age:").grid(row=1, column=0, padx=10, pady=5, sticky=tk.E)

age_entry = tk.Entry(app)
age_entry.grid(row=1, column=1, padx=10, pady=5)

age_error = tk.Label(app, text="", fg="red")
age_error.grid(row=1, column=2, padx=10, pady=5, sticky=tk.W)


tk.Label(app, text="Email:").grid(row=2, column=0, padx=10, pady=5, sticky=tk.E)

email_entry = tk.Entry(app)
email_entry.grid(row=2, column=1, padx=10, pady=5)

email_error = tk.Label(app, text="", fg="red")
email_error.grid(row=2, column=2, padx=10, pady=5, sticky=tk.W)


# Submit buttons
submit_button = tk.Button(app, text="Submit", command=validate_form)
submit_button.grid(row=3, column=0, columnspan=2, pady=10)

app.mainloop()
