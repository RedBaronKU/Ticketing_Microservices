# Ticketing_Microservices
Ticketing app
Bulding microservices Ticketing app with express.js, TypeScript, MongoDB, Redis, Next.js, Docker, Kubernetes, NATS, and Scafford.

Folder Detail
Folder	Detail
auth	Service to handle signup/signin/signout
client	The client app (Next.js)
common	The commmon service that used in every service and it's uploaded to npmjs.com
infra	Kubernetes infrastucture for this application
nats-test	Testing to NATS Streaming Server
orders	Order service
tickets	Ticket service
skaffold.yml	Skaffold configuration for this project
Development with Google Cloud
Install Google Cloud SDK
Run gcloud auth login
Dont't forget to run gcloud init
Then run this code
 gcloud container clusters get-credentials ticketing-dev
Install ingress nginx
gcloud auth application-default login
skaffold dev
Creating a secret environment
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY={SECRET_KEY}
kubectl get secrets
Running skaffold
skaffold dev --trigger polling
