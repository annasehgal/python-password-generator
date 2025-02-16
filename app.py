from flask import Flask, render_template, request, jsonify
import random
import string

app = Flask(__name__)

# Password generator function
def generate_password(minLength, numbers=True, specialCharacters=True):
    letters = string.ascii_letters
    digits = string.digits
    special = string.punctuation

    characters = letters
    if numbers:
        characters += digits
    if specialCharacters:
        characters += special

    password = ""
    has_number = False
    has_special = False

    # Generate a password that matches the criteria
    while len(password) < minLength:
        new_char = random.choice(characters)
        password += new_char

        if new_char in digits:
            has_number = True
        elif new_char in special:
            has_special = True

    # Ensure the password meets the number and special character requirements
    meets_criteria = True
    if numbers and not has_number:
        meets_criteria = False
    if specialCharacters and not has_special:
        meets_criteria = False

    # If the criteria aren't met, regenerate the password
    if not meets_criteria:
        return generate_password(minLength, numbers, specialCharacters)

    return password


# Route to serve index.html and static files
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    minLength = data["minLength"]
    has_number = data["hasNumber"]
    has_special = data["hasSpecial"]
    
    password = generate_password(minLength, has_number, has_special)
    return jsonify({"password": password})

if __name__ == "__main__":
    app.run(debug=True)