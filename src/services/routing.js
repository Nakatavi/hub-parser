import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Results from '../components/results';
let data=[];

const loadData = (csvData) => {
    data.splice(0,data.length,...csvData)
};

export const routing = createBrowserRouter([
    {
        path: '/',
        element: <Layout loadData={loadData} />,
        loader: () => null,
    },
    {
        path: '/results',
        element: <Results data={data} />,
        loader: () => null,
    }
])