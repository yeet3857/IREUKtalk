# Social Media App - Quickstart

## Backend Setup

1. Create a folder called `backend`.
2. Save the backend code above as `backend/app.js`.
3. Open a terminal in `backend` and run:
   ```
   npm init -y
   npm install express mongoose cors
   ```
4. Make sure you have MongoDB running locally (download from [mongodb.com](https://www.mongodb.com/try/download/community)).
   - Start MongoDB by running `mongod` in your terminal.
5. Start the backend server:
   ```
   node app.js
   ```
   The backend runs on [http://localhost:5000](http://localhost:5000).

---

## Frontend Setup

1. In your project root, run:
   ```
   npx create-react-app frontend
   ```
2. Replace the contents of `frontend/src/App.js` with the frontend code above.
3. In the `frontend` folder, run:
   ```
   npm start
   ```
   The frontend runs on [http://localhost:3000](http://localhost:3000).

---

## Usage

- Register a new user or login.
- Make posts.
- See the feed update.

---

## Troubleshooting

- If you get MongoDB connection errors, ensure `mongod` is running.
- Make sure both frontend and backend servers are running.

---

Feel free to ask for more features or details!