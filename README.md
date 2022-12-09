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

## Hints
* Server running on port 3000 <br>
* Mongodb running on port 27017 <br>
* Database name: kenility <br>

## Output

<img width="1036" alt="image" src="https://user-images.githubusercontent.com/117100783/206747699-32f20c74-1c27-460f-a731-6270b064d44b.png">

<img width="1034" alt="image" src="https://user-images.githubusercontent.com/117100783/206747857-ce6c4d30-9a3b-45e5-8616-7f3a2ad709cd.png">

<img width="1034" alt="image" src="https://user-images.githubusercontent.com/117100783/206748221-be2dd5af-d593-43bf-bb81-8068dc3f71b2.png">

