# QA Bookmarks

> To discover tools in the qa landscape.

There are new awesome tools and frameworks being released everyday.
This is an open and transparent attempt at aggregating all these tools
and frameworks.

## Contributing

Refer to [CONTRIBUTING.md](https://github.com/clydevassallo/qabookmarks.com/blob/master/CONTRIBUTING.md)

## Development

### Vagrant

* Make sure you have VirtualBox and Vagrant installed
* Clone this repository
* Run `vagrant up` to provision the VM
* Run `vagrant ssh -c /vagrant/script/server` to start the server

### Docker

* Make sure you have Docker installed
* Clone this repository
* Run `docker build -t qabookmarks .` to build the docker image and tag it as qabookmarks
* Run `docker run -p 3000:3000 qabookmarks` to start the server

## Inspiration

Primarily:
* http://www.devopsbookmarks.com/

Which was in turn insipred by:
* http://www.unheap.com/
* https://www.ruby-toolbox.com/
* http://microjs.com/