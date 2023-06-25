import { Card } from 'flowbite-react';

function App() {
    return (
        <div className="App">
            <Card
                className="max-w-sm"
                href="#"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Card Title
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Card Content
                </p>
            </Card>
        </div>
    );
}

export default App;
