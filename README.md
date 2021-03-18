# HiveLogger

HiveLogger attempts to solve a major problem for beekeepers which is the extensive records one must keep in order to remain efficient. 
Hivelogger provides an easy and convenient way to store and organize records.

## Technologies Used

### Planning
- [dbdiagram.io](https://dbdiagram.io/d) (Entity Relationship Diagram)
- [Sketchboard.io](https://sketchboard.io/) (Used for Wireframing)

### Client-Side
* HTML, CSS, Javascript
* React
* ReactDOM
* React-Router-DOM

### Server-Side
*

### Other Technologies


## Installation

### Initial Set-up
1. Clone this repository onto your local device.
2. Create a new [Google Firebase](https://firebase.google.com/) project.
3. Go to the project settings of your new Firebase project and take note of the Project ID and the API Key.
4. Open the appsettings.json file and replace the FirebaseProjectId value with your own.
5. Navigate into the client directory, copy the contents from the .env.local.example, put them into a new file called .env.local file, and replace the value with your Firebase project API Key.
6. Open Visual Sudio and select "Open a project or solution". When the file explorer appears navigate to wherever you cloned this repository and open the file called "LetsGoal.sln"

### Setting up the DB (This can be done through Visual Studio)
1. Connect to your SQL Server
2. Navigate to the SQL folder within the LetsGoal application. Run the contents of "Let'sGoal-SQL-script.sql" inside a new SQL query to create all the neccessary tables.
3. Now do the same with the contents of "Let'sGoal-SQL-seed.sql". Everything from line 1-9 is required but everything below that is optional. If you choose to run the rest be sure to create three equivilent users in your firebase project and replace the firebase user ids in the seed file with the ones you just created.

### Install missing dependencies
1. Navigate to the client folder in your terminal
2. run `npm install` to install any missing packages

## Running the App

1. Start your server. This can be done through Visual Studio. When running through Visual Studio do not use the IIS option! Instead, choose from the dropdown the "LetsGoal" option. 
2. From the terminal navigate to the client folder within the LetsGoal project.
3. Type the command `npm start`

## Let's Connect!
On [LinkedIn](https://www.linkedin.com/in/brantpippin/) or on
[GitHub](https://github.com/Brant2001)

If you find that anything is wrong with the app or you have any suggestions please feel free to email me at brant.pippin@gmail.com
## Technologies Used
