# blogR API

A RESTful API for managing authors and their blog posts using a relational one-to-many relationship.

## Features

- Create, read, update, and delete blog posts
- List all posts or get a specific post by ID
- List all authors
- Each post is associated with a single author (1-to-many relationship)
- Input validation using schema rules
- Connected to a database (e.g., MongoDB or SQL)

---

## API Endpoints

### Posts

| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| GET    | `/posts`       | Get all blog posts         |
| GET    | `/posts/:id`   | Get a post by ID           |
| POST   | `/posts`       | Create a new post          |
| PUT    | `/posts/:id`   | Update a post              |
| DELETE | `/posts/:id`   | Delete a post              |

### Authors

| Method | Endpoint       | Description            |
|--------|----------------|------------------------|
| GET    | `/authors`     | Get all authors        |

---

## Data Relationships

- **Author → Post**: One author can have many posts.
- Each post must be associated with a valid author ID.

---

## Validation

- Required fields are enforced (e.g., title, content, authorId).
- Invalid or missing data returns appropriate error messages.

---

## Technologies Used

- Node.js (Express)
- MongoDB with Mongoose (or your chosen DB)
- Express Validator or Mongoose validation
- RESTful API conventions

---

