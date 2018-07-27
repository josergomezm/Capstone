# Hopefully Healing - Capstone [Summer 2018] ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Hopefully Healing is an ulcer healing progress tracker for clinicians.

This is a WebApp used by clinicians to provide better care - evaluate whether a wound is healing or should treatment be reconsidered for a wound. Utilizing this WebApp 


## **This project is no longer actively maintained.**

## Installation

### Requirements
* MySQL 5.7
* Python 3.6 and up
* NodeJS 8.10 and up
* NPM 6.1.0 and up *(usually bundled with NodeJS)*

## Usage

### Setting Up Database
1. Install MySQL 5.7 (Updated versions are not supported with NodeJS integration at the moment)
2. You **MUST** set your MySQL's credentials to be the following:

   - **Username** : root
   - **Password** : root
   - **Host** : localhost
   - **Port** : 3306


   > Failure to set up these credentials will result in a failure. Alternatively, you can modify the **server.js** file in the src folder to update your MySQL credentials.

3. Run the **HH.sql** file in MySQL located in the path below. This file will generate the HopefullyHealing Database, create the necessary tables, and populate some dummy data.

> HH.sql DB File can be found in the following directory: **./hh/src/db/HH.sql**


### Installing Required Libraries [Python]

**Note:** Get the latest version of [PyTorch](https://pytorch.org/) from their website.

```
$ pip install Pillow
$ pip install numpy
$ pip install pandas
$ pip install torch torvision # Get the latest version suitable for your OS from PyTorch website.
```

### Installing Required Libraries [NodeJS]

```
$ cd hh
$ npm install # This will install all the NodeJS dependencies
```

### Starting the WebApp
**Note:** You will need to open two terminals. One will be running **ExpressJS** (backend code), while the second one will be running the **VueJS** (fronend framework).

1. Starting ExpressJS
   ```
   $ cd hh\src
   $ node server.js # Starts ExpressJS Server on PORT 5000.
   ```

2. Starting VueJS
   ```
   $ cd hh
   $ npm run serve # Starts VueJS Server on PORT 8080.
   ```

### Accessing the WebApp

At this point, you should be able to visit [http://localhost:8080](http://localhost:8080) and access the WebApp.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License
[MIT](https://choosealicense.com/licenses/mit/)
