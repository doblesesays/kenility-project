# Kenility test project
## Running the app

```bash
# Create and run the containers
$ docker compose up -d
```

## Getting Started

- Import the Postman Collection "KenilityProject.postman_collection.json"

<img width="1045" alt="image" src="https://user-images.githubusercontent.com/117100783/206751779-cb34c3fb-73a5-4203-83f4-a57e6d4afb5a.png">


- Add a new environment and include user_id as variable
<img width="939" alt="image" src="https://user-images.githubusercontent.com/117100783/206751951-4e20a3f3-5bdf-4366-a8a8-b27841c27136.png">


## Api Doc
| Method | URL             | Content Type      | Body |
| ------ | --------------- | ----------------- |------|
| GET    | /user           |                   ||
| POST   | /user           |multipart/form-data|- name: string <br> - last_name: string <br> - address: string <br> - profile_picture: file (png,jpeg,jpg) Max Size 3mb|
| PUT    | /user/{user_id} |multipart/form-data|All optionals <br><br>- name: string <br> - last_name: string <br> - address: string <br> - profile_picture: file (png,jpeg,jpg) Max Size 3mb|

## Hints
* Username: kenility, Password: password <br>
* Server running on port 3000 <br>
* Mongodb running on port 27017 <br>
* Database name: kenility <br>

## Output

<img width="1036" alt="image" src="https://user-images.githubusercontent.com/117100783/206747699-32f20c74-1c27-460f-a731-6270b064d44b.png">

<img width="1034" alt="image" src="https://user-images.githubusercontent.com/117100783/206747857-ce6c4d30-9a3b-45e5-8616-7f3a2ad709cd.png">

<img width="1034" alt="image" src="https://user-images.githubusercontent.com/117100783/206748221-be2dd5af-d593-43bf-bb81-8068dc3f71b2.png">

## Access profile picture

ht<span>tp://</span>localhost:3000/{{user.profile_picture.url}}

<img width="985" alt="image" src="https://user-images.githubusercontent.com/117100783/206749450-5a694a62-9568-41c6-ba0a-6512a9d622e9.png">


