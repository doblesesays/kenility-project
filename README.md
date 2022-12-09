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
| Method | URL             | Content Type      | Body |
| ------ | --------------- | ----------------- |------|
| GET    | /user           |                   ||
| POST   | /user           |multipart/form-data|name: string <br> last_name: string <br> address: string <br> profile_picture: file|
| PUT    | /user/{user_id} |multipart/form-data|All optionals <br><br>name: string <br> last_name: string <br> address: string <br> profile_picture: file|
