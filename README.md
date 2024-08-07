![Build Status](https://img.shields.io/badge/build-passing-brightgreen)



# Bootcamp API Widget

This project is created by Ofentse Lebese. You can contact me at fentselebese@gmail.com.

## Project Description

This project is a simple web application that provides three main functionalities:
1. **Word Game**: A game that finds the shortest and longest words in a sentence and calculates their sum.
2. **Phone Bill**: An application to get call and SMS prices, calculate phone bills, and set the price of calls and SMS.
3. **Enough Airtime**: A utility to check if you have enough airtime for a given usage.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling of the application.
- **JavaScript**: Functionality of the application using Alpine.js and Axios.
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for Node.js to handle API requests.
- **Mocha**: Testing framework for running unit tests.
- **ES6**: Modern JavaScript features and syntax.

## How to Run the Project

1. **Clone the Repository**: 
    ```sh
    git clone <repository_url>
    ```
2. **Navigate to the Project Directory**:
    ```sh
    cd bootcamp-api-widget
    ```
3. **Install Dependencies**:
    ```sh
    npm install
    ```
4. **Start the Server**:
    ```sh
    npm start
    ```
5. **Open the Project in VS Code**:
    ```sh
    code .
    ```
6. **Open `index.html` in a Browser**:
    Open the `index.html` file in your preferred web browser to see the application in action.

## Project Structure

- `index.html`: The main HTML file.
- `style.css`: The CSS file for styling.
- `bootcamp.js`: The JavaScript file containing the application's logic.
- `public/`: Directory for static files (e.g., stylesheets, scripts).
- `index.js`: Contains the API functionality using Express.js.
- `package.json`: Contains project metadata and scripts.
- `README.md`: This file, containing information about the project.
- `totalBill.js`: Provides the total phone bill function.
- `enoughAirtime.js`: Provides the enough airtime function.
- `wordGame.js`: Provides the word game function.
- `.gitignore`: Specifies files and directories to be ignored by Git (e.g., `node_modules`).

## Scripts

- **`npm start`**: Starts the server using `node index.js`.
- **`npm test`**: Runs tests using Mocha.
- **`npm run dev`**: (No command specified; can be used for development scripts).

## Functionality

### Word Game
- **Input**: Type a sentence.
- **Output**: Displays the shortest word, longest word, and their sum.

### Phone Bill
- **Get Prices**: Displays the prices of calls and SMS.
- **Calculate Phone Bill**: Calculates the total phone bill based on the usage.
- **Set Price**: Allows setting the price for calls and SMS.

### Enough Airtime
- **Check Airtime**: Checks if you have enough airtime based on your available amount and usage.

## Author

**Ofentse Lebese**
- Email: fentselebese@gmail.com
