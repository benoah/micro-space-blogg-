1. What does HTTP stand for?
Hypertext Transfer Protocol

2. How would you describe what a protocol is to a complete newbie?
An agreed-upon, standard way of doing something

3. Which part of this URL describes the protocol?: 
https://apis.scrimba.com/jsonplaceholder/posts

4. If you had to guess, which request method (GET, POST, PUT, DELETE) would you
think we made in the previous challenge when we asked for data from the 
JSON Placeholder API?
GET!

1. What's the difference between a Base URL and an Endpoint?
    * Base URL is the part of the URL that won't change, no matter
      which resource we want to get from the API
    * Endpoint specifies exactly which resource we want to get
      from the API

Given the following URLs from an example API:
* https://blahblahblah.com/api/v2/users
* https://blahblahblah.com/api/v2/products
* https://blahblahblah.com/api/v2/products/123

2. Which part is the Base URL?
https://blahblahblah.com/api/v2

3. What are the available endpoints?
/users, /products, /products/<some-id-of-a-product-here>


Try to think of a time you used each of the four main methods
(GET, POST, PUT, DELETE) in the real world as you went about
your regular usage of the internet. E.g. today, I checked the
weather on my phone which probably sent a GET request to retrieve
weather information.

GET: Retrieved weather information on my phone

POST: Created a new screencast (the one you're waching now)

PUT: Marked items from my shared todo list as "completed"

DELETE: Deleted a message on Slack that was no longer necessary

1. How would you describe what REST is to your non-technical friend?
A standarized way to have your computer, like your laptop, 
get or send information to another computer (like a server)

2. What does a RESTful API usually return in response to incoming requests?
JSON data

3. What kind of client devices can make use of a RESTful API?
ALL OF THEM.

1. What does it mean for the server to be "Stateless"?
It forgets the interaction after the response is sent.

* In the Mike's Bikes example, what URL endpoint (and request method)
  would you expect to use in order to accomplish the following:
  
    2. Retrieve a list of all the bikes that are sold?
       GET /bikes

    3. Retrieve detailed information about the bike with an ID of 42?
       GET /bikes/42
    
    4. Update the price of the bike with an ID of 21?
       PUT /bikes/21
    
    
    5. Add a new bike to the list of bikes being sold?
       POST /bikes
    
    
    6. Remove the bike with an ID of 56 from the list of bikes?
       DELETE /bikes/56

1. How is a nested resource URL like /bikes/123/reviews
   different from an endpoint like /reviews?
   /bikes/123/reviews - return an array of reviews about that specific bike
   /reviews - return an array of all reviews on the site
  
2. What URL might you use to GET the review with an ID of 5 on the bike
   with the ID of 123?
   /bikes/123/reviews/5

3. Describe a "URL Parameter" in your own words:
   Variable inside the URL that acts as a placeholder for the real value
   (Oftentimes they replace the ID of the resource)