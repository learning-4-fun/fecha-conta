### How do I get set up? ###

* Dependencies

The environment needs to have the following resources:
NodeJS, ruby 2.1.3 and rails 4.1.6

* Tools

bower: 
```
#!python

sudo npm install bower -g
```

* Deployment instructions

```
#!python

bundle install
```

```
#!python

rake bower:install
```

```
#!python

rails s

```