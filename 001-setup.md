# Section 1: Setup Development Environment

## 1. Create React Application
### 1.1 Create a new application

- run command

        yarn create react-app rest_ontrack

- test developing server

        cd rest_ontrack
        yarn start

### 1.2 Add react router dom

        yarn add react-router-dom

## 2. Git

### 2.1 Initialize the Git Repository

- run command

        git init
        git config --global user.email "yangzimeng17@gmail.com"
        git config --global user.name "Zimeng Yang"
        git config receive.denyCurrentBranch updateInstead
        git remote add origin https://<token>@github.com/YangZimeng17/ontrack_rest_react.git
        git branch -M main