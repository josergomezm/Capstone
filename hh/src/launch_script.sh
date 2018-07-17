# git clone https://github.com/NinetailsVE/Capstone.git

# Install the MySQL Database
# mysql -u root -p < ./db/HH.sql

# Start ExpressJS Server
echo "Starting ExpressJS Server on port 5000"
fork(){
    node ./server.js
}

# Start VueJS Server
echo "Starting VueJS Server on port 8080"
npm run serve