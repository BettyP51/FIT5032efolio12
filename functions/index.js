const {onRequest} = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;
      res.status(200).send({count});
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

exports.capitalizeBookData = functions.firestore
    .document("books/{bookId}")
    .onCreate((snap, context) => {
      const newBookData = snap.data();

      if (newBookData.name && typeof newBookData.name === "string") {
        const capitalizedData = {
          name: newBookData.name.toUpperCase(),
          isbn: newBookData.isbn,
        };

        return snap.ref.update(capitalizedData);
      } else {
        console.error("Error: 'name' field is missing or not a string.");
        return null;
      }
    });

exports.getAllBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const books = [];

      snapshot.forEach((doc) => {
        books.push({id: doc.id, ...doc.data()});
      });

      res.status(200).json(books);
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).send("Error fetching books");
    }
  });
});
