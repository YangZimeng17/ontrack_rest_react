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

### 2.2 First commit

        git add .
        git commit -m "init"
        git push origin main

---

## 3. Tailwind CSS

### 3.1 Install Tailwind CSS

        yarn add --dev tailwindcss
        npx tailwindcss init

### 3.2 Configure Tailwind CSS

- Edit `tailwind.config.js`

        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],

- Edit `src/index.css`

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

- delete `src/App.css` and `src/logo.svg`

### 3.3 Install Flowbite React

        yarn add flowbite flowbite-react

-  Edit `tailwind.config.js`

        content: [
            ...
            'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
        ],
        ...
        plugins: [require('flowbite/plugin')],

### 3.4 Test Tailwind CSS with Flowbite React

- edit `src/App.js`

        import { Card } from 'flowbite-react';

        function App() {
            return (
                <div className="App">
                    <Card
                        className="max-w-sm"
                        href="#"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Card Title
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Card Content
                        </p>
                    </Card>
                </div>
            );
        }

        export default App;

- run the developing server

        yarn start

