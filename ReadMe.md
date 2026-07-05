Run these commands to set up the project
```bash
composer install
```

```bash
npm install
```

```bash
php artisan key:generate
```

```bash
php artisan migrate:fresh --seed
```

```bash
npm run build
```

```bash
composer run dev
```

`/api/quotation` is protected by JWT auth. There's no registration/login. I created a fixed demo user and its token is committed here (signed with the `JWT_SECRET` in `.env.example`, valid for 1 year):

```
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJpYXQiOjE3ODMyNTczNTIsImV4cCI6MTgxNDc5MzM1MiwibmJmIjoxNzgzMjU3MzUyLCJqdGkiOiJLbHRKZ3dRWENmYU5sZHRXIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.dreiPBbN3jpN-DxamD2J_812ka0wMUGNx8GotTuXyhc
```

## Curl command:
```bash
export TOKEN="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJpYXQiOjE3ODMyNTczNTIsImV4cCI6MTgxNDc5MzM1MiwibmJmIjoxNzgzMjU3MzUyLCJqdGkiOiJLbHRKZ3dRWENmYU5sZHRXIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.dreiPBbN3jpN-DxamD2J_812ka0wMUGNx8GotTuXyhc"

curl --header "Content-Type: application/json" \
  --header "Authorization: Bearer $TOKEN" \
  --request POST \
  --data '{"age":"28,35", "currency_id":"EUR", "start_date":"2020-10-01", "end_date":"2020-10-30"}' \
  http://localhost:8000/api/quotation
```