# Strapi v4 Crash course

- [Strapi v4 Crash Course](https://www.youtube.com/watch?v=vcopLqUq594&t=1340s)

## Headless CMS

> creating an app

```sh
$ npx create-strapi-app@latest restaurant-cms --quickstart
$ cd restaurant-cms
$ yarn install

# execute
$ yarn develop
```

set user admin

- US : nii
- PS : PS

> http://localhost:1337/admin

## Collection Type

## Query Data

- http://localhost:1337/api/restaurants

## Population

- http://localhost:1337/api/restaurants?populate=openningHours,image

## Field Selection

- http://localhost:1337/api/restaurants?fields=name
- http://localhost:1337/api/restaurants?fields=name&populate=image
- http://localhost:1337/api/restaurants?fields=name,publishedAt&populate=image

## Relationships

- http://localhost:1337/api/categories
- http://localhost:1337/api/categories?fields=name&populate=restaurants
- http://localhost:1337/api/categories/1?fields=name&populate=restaurants

## Sorting

- http://localhost:1337/api/categories?fields=name&sort=name:desc,createdAt

## Filtering

- http://localhost:1337/api/restaurants?filters[avgPrice][$lte]=30
- [REST API: Filtering, Locale, and Publication State](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html)

## Another Relation

## Posting Data

- http://localhost:1337/api/reviews

```json
{
    "data": {
        "content": "This is a greate restaurant",
        "rating": "four",
        "restaurant": 3
    }
}
```

## Authentication

- http://localhost:1337/api/auth/local/register

```json
{
    "username": "Ana Late",
    "email": "chaiwud.t@gmail.com",
    "password": "password!"
}
```

> response

```json
{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwNTM3MzgwLCJleHAiOjE2NDMxMjkzODB9.Wl9d6aX_k4duJJAWGnvVSf24AR_Um5TRYd005w6VTNI",
    "user": {
        "id": 1,
        "username": "Ana Late",
        "email": "chaiwud.t@gmail.com",
        "provider": "local",
        "confirmed": true,
        "blocked": false,
        "createdAt": "2021-12-26T16:49:40.836Z",
        "updatedAt": "2021-12-26T16:49:40.836Z"
    }
}
```

## Single Types

## GraphQL

```
$ yarn strapi install graphql
```

- http://localhost:1337/graphql

```graphql
# Write your query or mutation here
query {
  restaurants {
    data {
      id
      attributes {
        name
        openningHours {
          hours
        }
        image {
          data {
            attributes {
              width
            }
          }
        }
      }
    }
  }
}
```