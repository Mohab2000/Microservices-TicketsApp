Ticketing Application
This is a full-stack ticketing application designed to manage event ticket sales. The application is built using microservices architecture, containerized with Docker, and orchestrated using Kubernetes. Skaffold is used for managing the development workflow.

# Features
## User authentication and authorization
## Event creation and management
## Ticket purchasing and reservation
## Payment processing
## Order management
## Responsive UI
## Architecture
The application follows a microservices architecture with each service responsible for a specific domain. The primary services include:

# Auth Service: Manages user authentication and authorization.
# Event Service: Handles event creation, updating, and listing.
# Ticket Service: Manages ticket inventory and reservations.
# Order Service: Handles ticket orders and purchases.
# Payment Service: Processes payments.
# Client Service: Provides the front-end interface.

# Prerequisites
## Docker
## Kubernetes (Minikube for local development or any Kubernetes cluster)
## kubectl
## Skaffold
## Helm (optional, for managing Kubernetes resources)
## Node.js (for the client and some services)
## MongoDB (as a database)
## Installation
### 1. Clone the repository
### bash
### Copy code
git clone [https://github.com/mohab2000/ticketing-app.git](https://github.com/Mohab2000/Microservices-TicketsApp.git)
cd ticketing-app


# Install Skaffold
Follow the Skaffold installation guide to install Skaffold on your system.

Running the Application
1. Start Minikube (if using Minikube)
bash
Copy code
minikube start
2. Deploy using Skaffold
Skaffold simplifies the development workflow by building and deploying your application automatically:

# Start the application 
## npm install in each service
## cd to the root directory and run skaffold dev
