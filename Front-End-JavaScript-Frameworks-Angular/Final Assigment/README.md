<h2 style="text-align:center;"><b>Assignment Overview</b></h2>

At the end of this assignment, you should have completed the following:

Updated the promotion service to use the HTTP client and updated the home component to use the data fetched from the server for promotion.
Updated the leader service to use the HTTP client and subsequently update the home and the about component to render the information about the leaders by downloading the data from the server
Enabled the users to submit feedback through the feedback form by creating a new feedback service that accepts the form data and uses the POST method from HTTP client to record their feedback on the server.
Use animation together with a progress spinner and displaying the confirmation from the server about successful submission of the form.

<h1 style="text-align:center;"><b>Assignment Requirements</b></h1>

<b>Task 1</b>

In this task, you will update the promotion service and the home component to use the data from the server for rendering the promotion:

1. Update all the methods in promotion service to use HTTP client to fetch the promotion data from the server
2. Update the home component to render the promotion data. You should handle the error condition appropriately.

<b>Task 2</b>

In this task, you will update the leader service and the home and about components to use the data from the server for rendering the leader information:

1. Update all the methods in leader service to use HTTP client to fetch the leader data from the server
2. Update the home component to render the leader data. You should handle the error condition appropriately.
3. pdate the about component to render the leader data. You should handle the error condition appropriately.

<b>Task 3</b>

In this task, you will enable the saving of the feedback data submitted using the feedback form in the contact component. You will save the feedback form data submitted by the user to the server:

Implement a new feedback service with a method submitFeedback() that takes a Feedback object as a parameter and submits the feedback to the server using the POST method from HTTP client that supports posting data to the server. The POST method works like the PUT method that we used in dish.service.ts. Recall that the feedback data is accessible at http://localhost:3000/feedback on the json-server.
Update the contact component to make use of the feedback service and submit the form data using the submitFeedback() method by passing the feedback form data in the onSubmit() method to the service.

<b>Task 4</b>

In this task you will use animation together with a progress spinner and the fact that the post() method will return the submitted feedback object as a return value to display briefly the submitted data to confirm the form submission to the user:

* When the form is submitted, you should hide the form and display the progress spinner until the server responds confirming the update on the server side. See the next point below for further details.
* Recall how in the lesson on saving data to the server, the PUT request returns an observable that we subscribe and then use the updated dish data returned to update the dish object in dishdetail.component.ts. Similarly when you do a post(), the feedback service must return the feedback object returned from the server after submission, by the submitFeedback() method. You can then subscribe to it within the contact.component.ts to obtain the returned feedback object. This confirms the successful submission of the feedback to the server.
* After obtaining the confirmation from the server within the subscribe() method above, you should then display the information from the returned feedback object in the format as shown in the video for 5 seconds. Thereafter you should hide this and then again show the empty form to the user enabling them to submit the feedback again. Hint: Leverage the setTimeout() method for this purpose.
* Use the expand animation that we have already used earlier to judiciously apply animation to the various stages of the form submission.

<b>Screenshots</b>

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/U3Uxo0t3EeeAPQqK67ihvA_1ead4ee3a7b669b0d0767506f23543aa_Assignment4-Task4-Stage1.png?expiry=1620950400000&hmac=tKbfRdQ65eLdgNfPnbYOqllerqdHf1JiwK61hOr99DQ">

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/YyHyykt3Eeed9A4IsSYTAA_9882b9cd5a0f21054f624661a4244e06_Assignment4-Task4-Stage2.png?expiry=1620950400000&hmac=WuGcfy_xMaMuHnW2BDo-ANdWmMqvrle_z8JDO4HwOMU">

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/cQ2jXkt3Eee-xApy6_UVNA_2ddf37bc2624187316c62dbfb35531e5_Assignment4-Task4-Stage3.png?expiry=1620950400000&hmac=ho77s2paSDe3qsQ6FsFX7zLxtW8WewDgAfIlgRp8Zeg">
