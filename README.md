# This application is configured to run using Docker containers.

    -   After downloading the code from Github and the Docker Desktop application, start-up should
        be as simple as running: 

                ~   docker compose up --build

# To Log In:
    username: u
    password: p

# Exceptions:

#   venv may be required..

    -   I'm new to working with Docker and may have made some mistakes along the way. If the above ^^^ 
        command does not work properly, you may need to spin up a Python virtual environment:

                ~   python3 -m venv .venv

        ..then..

                ~   source venv/bin/activate
        
        ..then..

                ~   docker compose up --build
        
#   manual start-up may be required..

    -   If that doesn't work, you can manually spin up each server and application:

        -   In these directories:

#           /next-investment/next-investment-api

                -   python app.py

#           /next-investment/alpha-vantage-api

                -   python app.py

#           /next-investment/frontend

                - npm run dev

#   Developer Note

    -   I appreciate you downloading and viewing my application, the UI leaves some things to be desired as of now but a lot of the foundational business logic has been scaffolded (Authorization,         Investment handling, Market Research and Analysis) but the next step is to parse all of the data retrieved from the Market and integrate it into a whole host of features within the NextInvestment application.
            
