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