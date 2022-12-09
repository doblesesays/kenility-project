# Kenility test project
## Running the app

```bash
# Create and run the containers
$ docker compose up -d
```

## Getting Started

```bash
# Load the Postman Collection
$ KenilityProject.postman_collection.json

# Add a new environment on Postman
$ Include user_id as variable
```

## Api Doc
| Method | Description     | Content Type      |
| ------ | --------------- | ----------------- |
| GET    | /user           |                   |
| POST   | /user           |multipart/form-data|
| PUT    | /user/{user_id} |multipart/form-data|