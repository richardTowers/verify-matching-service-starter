Verify Matching Service Starter
===============================

This is a simple node app intended to get you started building a local matching
service for the purposes of user research.

Before you get started, you should read the documentation on [what a local matching service is](https://alphagov.github.io/rp-onboarding-tech-docs/pages/ms/ms.html)
and familiarise yourself with the [requests the service needs to handle](https://alphagov.github.io/rp-onboarding-tech-docs/pages/ms/msBuild.html#respond-to-json-matching-requests).

Setup
-----

* If you don't already have it, install [node js](https://nodejs.org/en/)
* Clone this repository
* Run `npm install`

Usage
-----

To start the application, run `npm start`. If everything worked correctly you should see output similar to:

```
Listening on port 1337

URLs are:

http://localhost:1337/match
http://localhost:1337/create-user
```

You can edit the source code in [index.js](index.js) to make the application
work properly. The application should automatically restart whenever you change this file.

You should use [https://github.com/alphagov/verify-matching-service-test-tool](https://github.com/alphagov/verify-matching-service-test-tool#readme)
to test that you have made the application behave correctly.

