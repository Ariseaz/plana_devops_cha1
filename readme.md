# PlanA DevOps Challenge 1

## To deploy this app Locally

Step 1: Get docker running on your local device
```docker -v```

Step 2: Build docker image with tag
```docker build -t adenijiazeez/planet .```

Step 3: Run container image locally
```docker run -it -p 3000:3000 adenijiazeez/planet```

Step 4: Goto your browser
http://localhost:3000


## To deploy to Kubernetes cluster
Step 1: Get kubectl running and cluster ready
```kubectl get all```

_If there is no error with the command above_

Step 2: deploy manifest
```kubectl apply -f kubernetes.yml```


#### Reference Repo (challenge):
https://github.com/Plan-A-Technologies/DevOps-Challenge-Level-1.git
