# Sending Notifications From Chrome Extension

## Browser Notifications
Notifications are useful when a particular application needs to catch the user's attention.<br/>
A notification can inform the user about the alert or the event. The user can then either respond to that action or dismiss the notification.
It could also be produced as a result of a background process or when the extension needs some user response. <br/>

Chrome extensions are programs written to extend the browser functionality. We will now explore how to send a notification from the chrome extension.

## Building a basic chrome extension
Before we learn how to send notifications from the chrome extension, we need to know the basics of a chrome extension and it's parts.
It is covered in detail in this article:     <br/>
Just as a primer, an extension contains a mandatory `manifest` file along with html and javascript scripts.

## Using the `chrome.notifications` api
Browser notifications from the chrome extension can be sent using the `chrome.notifications` api.


