# Bunny Password Generator

This is a simple interactive password generator web application with a playful terminal-style interface. The user can interact with the system through a terminal-like UI, providing answers to various prompts to customize the generated password.

## Features
- Interactive prompt system to guide the user through password generation.
- Customizable password options, such as length, inclusion of numbers, and special characters.
- Generates passwords based on user preferences.
- Allows the user to generate multiple passwords in a single session.
- Includes a bunny-themed terminal UI.

## Technologies Used
- HTML, CSS, and JavaScript for the frontend.
- Flask (Python) for handling password generation logic (backend).
  
## How to Use

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install dependencies (for backend):**
   
   Create a virtual environment (optional but recommended):
   
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

    Install the required Python packages:

    ```bash
    pip install -r requirements.txt
    ```

3. **Run the Flask server:**

    ```bash
    flask run
    ```

    The app will be available at `http://127.0.0.1:5000/`.

4. **Use the Password Generator:**
    - Open the terminal in your browser.
    - Type `generate password` to start the password generation process.
    - Follow the prompts to customize the password (e.g., password length, inclusion of numbers, and special characters).
    - The terminal will display the generated password and ask if you want to generate another one.

5. **Clear the terminal:** You can type `clear` to reset the terminal screen without restarting the password generation.

## Contributing

Feel free to fork the repository and create pull requests for any improvements or bug fixes.

