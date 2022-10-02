# StoreManagerAPI

API RESTful using the MSC (model-service-controller) architecture!

The API is built to be a sales management system in the dropshipping format in which it will be possible to create, view, delete and update products and sales. Using the MySQL database for data management. 

## With Docker
Please turn off your Mysql local aplication tu run a docker container store_manager_db;.
Run the node service with the command docker-compose up d. • This service will initialize a container called store_manager and store_manager_db;. • From here you can run the container via CLI or open it in VS Code. Use the command docker exec -it talker_manager bash. • It will give you access to the interactive terminal of the container created by compose, which is running in the background. Install dependencies [If any] with npm install

Please turn off your Mysql local aplication tu run a docker container store_manager_db;.

## Without Docker
Install dependencies with npm install

### Once running on your machine, use the software of your preference (postman, insonia, thuderbolt…) to interact with it’s endpoints.


## Endpoint to list products (/products)
The endpoint for listing products must be via the path (/products) and (/products/:id);
Through the /products path, all products are returned;
Through the path /products/:id, only the product with the id present in the URL are returned;

The result returned should be as shown below, with an http status of 200:


  [
    {
      "id": 1,
      "name": "Hammer of Thor",
    },
    {
      "id": 2,
      "name": "Shrink Suit",
    }
  ]


[It will be validated that it is not possible to list a product that does not exist]

If the product is non-existent the returned result should be as shown below, with an http status of 404:

  { "message": "Product not found" }

[It will be validated that it is possible to list a specific product successfully]

Upon successfully listing a product the returned result should be as shown below, with an http status of 200:

  {
    "id": 1,
    "name": "Hammer of Thor",
  }

## Endpoint to register products (/products)

The endpoint is reached via the path (/products);
Submitted products is saved in the products table of the database;
The request body should follow the format below:

  {
    "name": "ProductX"
  }

If the product is created successfully the result returned should be as shown below, with an http status of 201:
  {
    "id": 4,
    "name": "ProductX"
  }

## Validations 

[It will be validated that it is not possible to perform operations on a product without the name field]

If the request does not have the name field, the result returned should be as shown below, with an http status of 400 :
  { "message": "\"name\" is required" }
[It will be validated that it is not possible to perform operations on a product with the name field less than 5 characters]

If the request does not have a name of at least 5 characters, the result returned should be as shown below, with an http status of 422
  { "message": "\"name\" length must be at least 5 characters long" }

## Endpoint to validate and register sales (/sales)

The sales endpoint is accessible via the path (/sales);
Sent sales are saved in the sales and sales_products tables of the database;
It must be possible to register the sale of several products through the same request;
The request body should follow the format below:

  [
    {
      "productId": 1,
      "quantity":1
    },
    {
      "productId": 2,
      "quantity":5
    }
  ]

[It will be validated that it is not possible to perform operations on a sale without the productId field]

If any of the items in the request do not have the productId field, the result returned should be as shown below, with an http status of 400:
  { "message": "\"productId\" is required" }
[It will be validated that it is not possible to perform operations on a sale without the quantity field]

If any of the requisition items do not have the quantity field, the result returned should be as shown below, with an http status of 400 :
  { "message": "\"quantity\" is required" }
[It will be validated that it is not possible to perform operations on a sale with the quantity field less than or equal to 0 (Zero)]

If the requisition has any items where the quantity field is less than or equal to zero, the result returned should be as shown below, with an http status of 422
  { "message": "\"quantity\" must be greater than or equal to 1" }
[It will be validated that it is not possible to perform operations on a sale with the productId field inexistent, in a request with a single item]

If the productId field of the requisition item does not exist in the database, the result returned should be as shown below, with an http status of 404
  { "message": "Product not found" }
[It will be validated that it is not possible to perform operations on a sale with the productId field inexistent, in a request with several items]

If the request has any items whose productId field does not exist in the database, the result returned should be as shown below, with an http status of 404
  { "message": "Product not found" }
[It will be validated that it is possible to register a sale successfully]

If the sale is successfully created the result returned should be as shown below, with an http status of 201:
  {
    "id": 3,
    "itemsSold": [
      {
        "productId": 1,
        "quantity":1
      },
      {
        "productId": 2,
        "quantity":5
      }
    ]
  }


## Endpoint to list sales (/sales) and (/sales/:id)

The endpoint for listing sales is accessible via the path (/sales) and (/sales/:id);
Through the /sales path, all sales are returned;
Through the path /sales/:id, only the sale with the id present in the URL are  returned;


[It will be validated that it is possible to list all sales]

Upon successfully listing sales the result returned should be as shown below, with an http status of 200:
  [
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }

    /* ... */
  ]
[It will be validated that it is not possible to list a sale that does not exist]

If the sale is non-existent, the result returned should be as shown below, with an http status of 404:
  { "message": "Sale not found" }
[It will be validated that it is possible to list a specific sale successfully]

Upon successfully listing a sale the result returned should be as shown below, with an http status of 200:
  [
    {
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }

## Endpoint to update a product (/products/:id)

The endpoint is accessible via the path (/products/:id);
Only the product with the id present in the URL must be updated;
The body of the request must be validated the same in the registration;
The request body should follow the format below:

  {
    "name": "Batman's Hammer"
  }

[It will be validated that it is not possible to change a product that does not exist]

If the product is non-existent the returned result should be as shown below, with an http status of 404:

  { "message": "Product not found" }
[It will be validated that it is possible to change a product successfully]

If the product is successfully changed the result returned should be as shown below, with an http status of 200:
  {
    "id": 1,
    "name": "Batman's Hammer"
  }

## Endpoint to delete a product (/products/:id)
The endpoint must be accessible via the path (/products/:id);
Only the product with the id present in the URL should be deleted;

[It will be validated that it is not possible to delete a product that does not exist]

If the product is non-existent the returned result should be as shown below, with an http status of 404:
  { "message": "Product not found" }

[It will be validated that it is possible to successfully delete a product]

If the product is successfully deleted, no response should be returned, just an http status 204;

