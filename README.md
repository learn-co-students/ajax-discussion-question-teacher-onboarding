# Discussion Questions: AJAX

## Objectives

* Identify synchronous and asynchronous code
* Describe the process of communicating with the server
* Process data successfully returned from fetch()

## Exercise

### Question 1

Given the following code, list the order of console.logs:

```javascript
console.log("Hello")

fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
    console.log("Hi") 
  })

console.log("Sup?")
```
1. `Hello`
2. `Sup?`
3. `Hi`

The reason for this order is that `fetch` triggers an asynchronous request which is then processed. Meanwhile, a browser's JS engine continues executing code in order in the original thread.

### Question(s) 2

*A. When fetchData is executed what will be console logged?*

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( res => res )
        console.log(data)	
}

fetchData()
```
When fetchData is executed, a `Promise` object will be logged to the console, as `fetch` initially returns a `Promise` before asynchronously resolving it. 


*B. What will be console logged when the following code is run? Why?*

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json => console.log(json) )
}

fetchData()
```
The JSON-ified contents of the server response will be logged in the console. Let's break down the three stages of fetching:
1. `fetch()` returns a `Promise` containing a `Response`. 
2. The HTTP Response contains a lot of information about the transaction, so we ask to read the content from the body by calling the `.json()` method on the `Response` object, which returns another `Promise`.
3. The previous `Promise` resolves to a JS object, and we reveal the JSON-ified contents of the body of the response by logging them in the console.


*C. What will be console logged when the following code is run? Why?*

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( console.log )
}

fetchData()
```
This code snippet will return the same result as part *B*. This way of writing the body of the second `.then()` implicitly passes the result of the first `.then()` to `console.log`. 

### Question 3

*In your own words: what does asynchronous mean?*
a- : not
syn- : with
chronous: time
e.g. not at the same time.

### Question 4

*Write out the request and response cycle. What is its purpose? How does it work?*

From Codecademy:
> 1. A user opens his browser, types in a URL, and presses Enter.
> 2. When a user presses Enter, the browser makes a request for that URL.
> 3. The request hits the Rails router (config/routes.rb). The router maps the URL to the correct controller and action to handle the request.
> 4. The action receives the request and passes it on to the view.
> 5. The view renders the page as HTML.
> 6. The controller sends the HTML back to the browser. The page loads and the user sees it.

Generally speaking, the request and response cycle is the cycle of a user/browser making HTTP requests of a web server, and the server delivering a response.


### Question 5

*Check out the JSON you get from making a GET request to [this](https://randomuser.me/api/) url (https://randomuser.me/api/).*

*Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/index.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.*
