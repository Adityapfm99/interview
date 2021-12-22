# The Rewards Co Interview Assignment

This repository contains the take-home assignment for interviewing with The Rewards Co.

It consists of 2 parts - adding features to a React frontend and adding features to a NestJS server.

Each part should can be completed in about 1 hour. Please let us know if the tasks are too complex to be completed within a day.

The `client` and `server` parts are separate and can be done in any order.

## Getting Started

1. Please fork this repository using your personal github account and push commits to that forked repo.

2. Completed the required tasks in both `client` and `server` folder.

3. If you have added new scripts to run the application, please document it in the respective `README.md` files.

4. Please reply to the interview email chain with a url to your github repository once you are ready to submit.

## `client`

This is a small todo list application that allows users to create todo items with the ability to track the due date and toggle if the items are done.

- Your task is to call a dummy API in `src/services/todoApi.ts`, and to dynamically render the list of todo items in the `src/Todo.tsx` file.

- Users should be able to create a new todo item using the form given, and the todo item will be submitted using the dummy API.

- Users can toggle a todo item between done and not done by calling the dummy API using a given ID of the todo item.

## `server`

This is a small API server for tracking food purchases of customers. There is currently an API to `GET` and `POST` user accounts.

- Your task is to create a new API resource for `food-purchase` for keeping track of the purchases that customers have made.

- Hint: you can use `nest generate resource food-purchase` to automatically generate a new resource.

- The `user.entity` should be linked to `food-purchase.entity` in a one-to-many relationship.

- `food-purchase.entity` should have the following fields:

```
class FoodPurchase {
    id: string

    quantity: number

    purchaseDate: Date

    user: User
}
```

- Create a REST API to fetch all the food purchases for a given user ID.

## Tips

Solutions will be assessed based on:

- Fulfilling the spec: Whether the solution fulfills the given spec above

- Clean code: Whether the code is clean and readable

- Naming conventions: Whether variables and functions are given names that can be easily understood

- We do not require the most algorithmic efficient solution
