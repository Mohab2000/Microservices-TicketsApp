Microservices TicketsApp
Overview
This project is a full-stack ticketing application for managing event ticket sales, built using microservices architecture. It leverages Docker for containerization and Kubernetes for orchestration, with Skaffold managing the development workflow.

Features
User Authentication and Authorization
Event Creation and Management
Ticket Purchasing and Reservation
Payment Processing
Order Management
Responsive UI
Architecture
The application consists of several microservices, each responsible for a specific domain:

Auth Service: Manages user authentication and authorization.
Event Service: Handles event creation, updating, and listing.
Ticket Service: Manages ticket inventory and reservations.
Order Service: Manages ticket orders and purchases.
Payment Service: Processes payments.
Client Service: Provides the front-end interface.
Prerequisites
Docker
Kubernetes (Minikube for local development or any Kubernetes cluster)
kubectl
Skaffold
Helm (optional, for managing Kubernetes resources)
Node.js (for the client and some services)
MongoDB (as a database)
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/Mohab2000/Microservices-TicketsApp.git
cd Microservices-TicketsApp
Install Skaffold:
Follow the Skaffold installation guide to install Skaffold on your system.

Start the application:

sh
Copy code
npm install # Run in each service directory
skaffold dev # Run in the root directory
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

