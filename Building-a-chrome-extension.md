# Building a chrome extension
## What are chrome extensions?
Chrome extensions can be considered as small programs which add functionality to your chrome browser. <br/>
They can help you achieve a variety of tasks, right from manipulating the DOM of your webpage, modifiying the content as per your choice, or providing some tools like screen recorders, all of these can be achieved with the help of chrome extensions. They are visible on the right of the address bar in chrome browser. <br/>

## Pre-requisites of building a chrome extension
You need just the basic knowledge of HTML, CSS and Javascript to get started with your first chrome extension.

## A hello world extension
The big picture of the process of building a chrome extension could be: <br/>
* Writing the Manifest, HTML, CSS and JS files.
* Packaging them into a .crx zipped file.
* Publishing them to the chrome webstore.
The chrome web store is the place from where the users can install the extension.

##  Types of Extensions

* **Browser Action**: These extensions stay in the toolbar, right next to the address bar and stay there at all the times. They remain accessible everytime. Our hello world extension comes in this category.

* **Page Action**: These extensions also stay in the toolbar but remain grayed out or inactive. They become active only on certain pages.

* **Neither browser action nor Page action**: These extensions run in the background and achieve certain tasks.

## The Manifest file
