# Lab 5 - Starter
Olivia Sun

[expose.html](https://olsunny.github.io/Lab5_Starter/expose.html)

[explore.html](https://olsunny.github.io/Lab5_Starter/explore.html)

Pt 3. Unit Testing with Jest

1) I would not use a unit test to test the “message” feature of a messaging application because it involves large scale task comprised of subtasks such as rendering the text from a user, then sending the text to another user over network, seeing if the text is delivered, among others.

2) I would  use a unit test to test the “max message length” feature of a messaging application because it is a small test that can execute quickly and does not likely interfere with the actual messaging feature of the app--there are strict cases that are deterministic and uses simple inputs and outputs.