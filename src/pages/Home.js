import React from 'react';
import { Link } from 'react-router-dom';
import providersData from "../assets/data_sample.json"


const Home = () => {

    return (
    <div className="home">
        <table>
            <thead>
                <tr>
                    <th>Medical Providers</th>
                </tr>
            </thead>
            <tbody>
            {providersData.map((providers) =>
                <tr>
                    <td key={providers.id}>
                        <Link to={`/${providers.id}`}>{providers.name}</Link>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
)
}
    



export default Home;