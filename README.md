# TJRestRIA
TaskJuggler Rest Client

# Technology Stack
 - AngularJS -> https://angular.io 
 - Twitter Bootstrap -> http://getbootstrap.com
 - HTML5/CSS3 -> Aria, RDF
 - TDD -> CasperJS/PhantomJS
 
 # Architecture Style
 - Rest as per Roy T. Fielding definition, not some (JSON|XML)-RPC "restish" interface by contract

# Role

## Test Developer
 - Functional CasperJS Test based on RDF/Aria markup

## JavaScript Developer
 - Karma Unit Tests
 - AngularJS Rich Domain Components 
 - AngularJS 2 is built on top of TypeScript

## Web Designer - HTML/CSS Developer
 - HTML5/CSS3 Components 
 - Visual Identity
 - Icon
 
#Contribute
##Dependencies

To run this project you need to have:

* NodeJS ([link](https://nodejs.org/))
* Bower ([link](http://bower.io/))
* Gulp ([link](http://gulpjs.com/))

##Setup the project

1.Install the depedencies above.

2.Clone the project.

```
git clone https://github.com/TJRest/TJRest.AngularJS2.git
```

3.Go into the project folder

```
cd TJRest.AngularJS2
```

4.Install the gulp dependencies

```
sudo npm install
```

5.Install the bower dependencies

```
bower install
```

##Server

To start a local server go to project folder and run the command:

```
sudo gulp serve
```

Access [localhost:3000](localhost:3000) 

##Testing

This project has a e2e test, you can run the test with this command:

```
sudo gulp test
```

##Building

To build a server's deploy version, just run the above code and the deploy version will be available on /dist folder.

```
sudo gulp build
```

