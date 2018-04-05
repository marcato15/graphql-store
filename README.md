# Store

This is a basic store that lists products and shows product information. It has an admin panel that allows admins to add and edit products. The react app communicates with the backend server via graphql. All data is stored in a mongodb database. 

## Building
There are 2 directories - `store` and `server`. To run the application, open each one in a different terminal window then run `yarn install && yarn run`. The graphql server runs on port `4000` and the front end server runs on port `3000`. Once they are both running, you can view the homepage of the store at `http://127.0.0.1:3000` and the admin panel at `http://127.0.0.1:3000/admin`. The home page lists products and when you click on them, will show product info. The admin panel lists the prodcuts, provides a link to add a product, and allows you to edit existing products. 

## Backend 
There are 2 Queries and 3 Mutations in the Graphql service.

### Queries
* Products - Returns all the products in the database
* Product(id) - Returns the details about a specific product by id

### Mutations
* addProduct - Takes `price, title, desc` fields and creates an object
* updateProduct - Takes `price, title, desc` fields and updates an object with corresponding `id`
* deleteProduct - Takes `id` and deletes corresponding item

##  Tests
I encoutnered an issue with create-react-app and the testing framework. I spent the last 30 mintues trying to get it to work, but it doesn't seem to be working out of the box (I admit I don't have much experience with CRA, I usually just use a standard full react setup). I still created an test that takes props and checks that the corresponding html elements are rendered properly.

## Bugs
Currently, once you create an item, you are redirected to the admin home page, and the new item doesn't work. I have `refetchQueries` setup on the mutation, but there seems to be an issue with that functionality https://github.com/apollographql/apollo-client/issues/1900. I didn't get the frontend delete functionality hooked up. 

## Final Notes 
Overall, I was pleased wtih the basic graphql queries and mutations I was able to complete in the time as well as the basic form functionality that I was able to build out. I wasn't able to add any login or authentication in the time frame for the admin. If I had another couple hours, once I figured out whatever the issue was with the tests, I would have then add the delete button in the backend, authentication, and pagination for the products listing endpoint.
