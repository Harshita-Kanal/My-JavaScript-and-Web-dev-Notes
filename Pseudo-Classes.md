## Pseudo Classes
Before getting started with pseudo classes, let us first understand what the word pseudo means,
a simple google search gives you: <br/>

*__Pseudo: not genuine; spurious or sham.__* <br/>

A pseudo class is basically a pseudo state of element which can be later targeted with CSS.
They can be used to target and style those elements which cannot be targeted with normal CSS classes or Id.
They are always preceded by a `:`. Some examples could be `:visited`, `:hover` etc.

## Why do we need them, afterall?
Consider the following codeblock: <br/>
```css
h1:hover {
color:blue;
}
```
Let us discuss what this codeblock does, on hovering over the h1, the color of 
h1 changes to blue.<br/>
And this happens because we have applied a pseudo class to it.
So what the pseudo class essentially does is that it let's us apply styles to a particular element
 not only in relation to the content of the document tree, but also in relation to external factors.
<br/>
These external factors could be hovering of a mouse, when a link is clicked or visited, 
A form element is checked, etc.

## How do they look like?
A basic pseudo class can be defined as follows:
```css
selector:pseudo class {
property:value;
}
```
It means that the pseudo class helps in selecting certain elements when they are in a particular condition, 
example, when they are hovered upon.

## Some Selectors please
Pseudo classes can be divided into two categories:
* Structural Pseudo Classes
* Dynamic Pseudo Classes <br/>

Let's study each one of them in detail with examples.






