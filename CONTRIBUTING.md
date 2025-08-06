# Contributing

Here is how you can contribute to the SHPE @ CSUF website! :) 

## Getting Started
The SHPE at CSUF website runs on Node.js, so follow these instructions in order to kickstart your contributions to the site.
### 1. Install Node.js
First and foremost, make sure you have Node.js installed on your device.  If you do not have it installed, go to the [Node.js downloads
page][nodejs_download] and install the latest version.
### 2. Clone the repository
You have one of two options:
1. Create a fork of the repository and clone your fork using `git clone`.
2. Clone the main repository.
Then, travel into the cloned repository with `cd shpe-web`
### 3. Install dependencies and run development server
Once you cloned the repository, open the repository in your code editor or terminal and run `npm i` to install all the dependencies
that this site uses.

To start the development server, type `npm run dev` and navigate to [`http://localhost:3000`](http://localhost:3000).

[nodejs_download]: https://nodejs.org/en/download

## Code changes
1. Before making **ANY** changes to the source code of this site, create a branch using `git branch`.  **DO NOT** work on the master branch.
2. Give your branch a name appropriate and applicable to the change you are making (ex: if you are adding a sliding feature to the landing page, use a name like `homepage-slider`.
3. Move into your branch with `git checkout {branch-name}` and make your necessary changes.
   - **Reminder**: Focus **ONLY** on the areas of the source code that you intend to change
4. Once you are satisfied with your code changes, commit and push your changes through your branch with `git push origin {branch-name}`.

## Pull Request
**Note**: Before submitting any changes, let the team know ahead of time so that in cases that you and another person are working on the same areas, you can reduce the chances of a merge conflict (Trust me, we all don't wanna deal with those).
1. Once you push your changes to your branch and you are ready to merge your changes to the master branch, head to the main repository and click Pull Requests → New pull request.
2. Give your pull request the following:
   i. A title descriptive of the changes you made
   ii. A clear description of what files/components you changed and how
   iii. If applicable, any link(s) to the issue/s that was resolved.
   iv. Any screenshots so that the reviewer(s) and team can understand where in the website you made your change.

