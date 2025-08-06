# Contributing
## Getting Started
The SHPE at CSUF website runs on Node.js, so follow these instructions in order to kickstart your contributions to the site.
### 1. Install Node.js
First and foremost, make sure you have Node.js installed on your device.  If you do not have it installed, go to the [Node.js downloads
page][nodejs_download] and install the latest version.
### 2. Clone the repository
You have one of two options:
1. Create a fork of the repository and clone your fork using `git clone`.
2. Clone the main repository.
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
