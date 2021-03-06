# zwiftee
[![Travis-CI](https://api.travis-ci.org/pfitzer/zwiftee.svg?branch=master)](https://travis-ci.org/pfitzer/zwiftee) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![](https://dependencyci.com/github/pfitzer/zwiftee/badge)](https://dependencyci.com/github/pfitzer/zwiftee)

**This is still in an alpha state!**

A application to show/analyze your [Zwift](https://zwift.com) activities.

##### How it works
Zwift stores your activities as *.fit file on your commputer under *%userprofile%\documents\Zwift\Activities*. Zwiftee reads those files and show the data.

##### Shots
![dashboard]

![session]

##### Operating Systems
Only tested on Windows, yet.

#### Development
````
# install
git clone https://github.com/pfitzer/zwiftee.git
# install dependencies
npm install

# run the app
npm run electron:build

# start browser app
npm start

# build windows executable
npm run electron:win

# see package.json for more
````

#### Contribute
Feel free to do so, there is pretty much to do. E.g. internationalisation, writing unit tests, test on apple systems ...

If you want to contribute, open an issue and describe what you wanna do and commit your work to that issue.

[dashboard]: https://www.mp-development.de/images/zwiftee/zwiftee_dashboard.PNG
[session]: https://www.mp-development.de/images/zwiftee/zwiftee_session.PNG