# cs465-565-Assignments

##Assignment#1
###Exercise#1 : Simple HTML Form with no CSS, has three text inputs, two radio inputs and two buttons for submit and reset.
###Exercise#2 : A simple recreation of HTML elements to loosely match website http://placekitten.com/. The images and contents are placed using table.
###Exercise#3 : A start of portfolio, only with HTML elements.Basically consists of an unordered list of links redirecting to two different HTML pages, One for contact form and other consisting my name and a brief bio.I have included three image links redirecting to my github, linkedin and stack overflow profile.

##Assignment#2
###Exercise#1: HTML form with CSS styling, containing two input tags, one textarea tag and two buttons. Linear gradient has been used in the background.Hover pseudo-class has been used with button. It turns the navy buttons into green on hovering.CSS style used: Internal and Inline.
###Exercise#2: A website using HTML and CSS to loosely match the website http://placekitten.com/. The images and contents are placed in div tags.It has header, footer as well as hover and visited pseudo classes for links.Images are placed by directly using links. CSS style used: Internal and Inline.
###Exercise#3: A start of portfolio styled with CSS used as internal and inline.It contains three links for Home, About and Contact directing to three different HTML pages.About page has my name and a brief bio, contact page has three image links redirecting to my github, linkedin and stack overflow page. The links on every page has hover and focus pseudo classes attached to them.

##Assignment#3
###CSS Folder: It contains compiled bootstrap file, used in some exercises for this assignment.
###Exercise#1: A simple HTML form with two input tags for name and email and a textarea tag for writing comments/message along with two buttons: submit and reset.The form is styled using bootstrap.Classes like .container, .btn-primary1 and .h4 are overwritten in style tag.
###Exercise#2: A simple layout made by using Bootstrap grid.The size of the rows and columns are varied using different classes from bootstrap.Some properties of column like background color and border are overwritten in style tag.
###Exercise#3: A layout designed with CSS Grid. Classes like .grid-container and .grid-item are rewritten within style tag with properties like border-radius, color, padding, grid-template-columns, background-color, border etc.
###Exercise#4: A layout designed with bootstrap grid. .Col and .container classes are rewritten inside style tag to include the properties like background-color, border-radius, font-family, border, color etc.
###Exercise#5: A layout designed using CSS Grid.grid-column and grid-row properties are defined under different classes inside style tag.
###Exercise#6: A layout designed using CSS Grid.grid-column and grid-row properties are defined under different classes inside style tag.
###Exercise#7: A layout designed using floats.

##Assignment#4
###Exercise#1: A simple FizzBuzz example implemented using javascript.The program used For loop to iterate over numbers from 1 to 100. The For loop implements if else conditions for the iterations: for all the numbers divisible by 3 and 5,it displays "fizzbuzz", for all the numbers divisible by 3 it displays "fizz", for all the numbers divisible by 5 it displays "buss", while for rest of the iterations the number itself gets printed.All the outputs are displayed in console window.The implementation is done inside script tag within HTML.
###Exercise#2: A javascript implementation to reverse the numbers in a digit and print the reversed digit in the console.The script tag inside HTML code contains a function "reverse_digits" which takes the number (231756) as an argument. Inside the function the number (which is an integer) is converted into string using toString() method and the methods: split(""), reverse(), join("") are used consecutively on the resulted string which returns the output as the reversed digit.
###Exercise#3: An HTML form styled with bootstrap, takes the input and displays the output in console using javascript.Form has two buttons: "submit" button has Onclick() event attached to it, which submits the output on being clicked, "reset" button resets the input fields in the form. Function display_info() is written in javascript inside script tag within HTML body, which outputs the result in console using input's id.
###Exercise#4: This exercise is implemented using javascript within script tag inside HTML body. It displays the width and height of the window every time the size of the window changes.The body tag has onload and onresize event attached to it, which calls the function getSize(), every time the window resizes and the current width and height of the window is displayed inside two div tags in HTML.
###Exercise#5: The program implements a button with the help of javascript displayed within HTML to change the background color of the window, every time on being clicked.The  button has Onclick event, which calls the function changecolor() on being clicked.The function uses Math.floor() and Math.random() functions consecutively to generate the random hexadecimal numbers, which is concatenated with "#" to generate a color and set the background to that color.

##Assignment#5: It has four files: index.html, app.js, package.json, package-lock.json.The index.html is a form styled with bootstrap, it takes the input from user and send to the server.Form tag uses the method "post". The app.js file, implements the server using express to handle the route given in the form and display the the output on a webpage. Body-parser is used as a middleware to parse the incoming request bodies. app.get function in the file sends the HTML to the browser to take the input. app.post function displays the user input on the webpage.In order to format the displayed output, I have written HTML styled with CSS inside res.write() method. The server port 
listening to the event is 8080.


##Assignment#6: There are three folders inside this folder: AngularTutorial, ReactTutorial and TypescriptTutorial.
	      Completed tutorial for React and codelabs for Angular and Typescript. 
	      Implemented tic-tac-toe game following the steps mentioned in react tutorial. The coding has been done in browser in 	               codepen.The link to the tutorial is as follows:
	      https://reactjs.org/tutorial/tutorial.html
	      Created an angular app following the below codelab:
	      https://codelab.fun/angular/create-first-app/intro
	      Installed the angular CLI with npm (as I have already installed node js and npm in my system)
	      npm install -g @angular/cli
	      After the completion of installation, created a new project my-app
	      ng new my-app
	      Navigating to the newly created folder (my-app) and running the below command, starts the web server and opens the                       application in a browser
	      cd my-app
	      ng serve
	      Done the changes in the code in the following file inside the src folder created under my-app:
              index.html
              main.ts
              app.component.ts
              app.module.ts
              Created a web app following the typescript intro codelab:
	      https://angular-presentation.firebaseapp.com/angular/typescript/intro
              Installed the typescript globally on my machine following the below command:
              npm install -g typescript
              Repeated the same steps as done for Angular tutorial and replaced the code for the main.ts and created the below files:
              Guest.ts
              Codelab.ts
              Restarted the server using ng server and the output can be seen in the browser on the link: http://localhost:4200
              
	     
