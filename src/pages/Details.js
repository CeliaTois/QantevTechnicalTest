import React from 'react';
import { DoubleLeftOutlined } from '@ant-design/icons';
import providersData from "../assets/data_sample.json"
import { Link } from 'react-router-dom';
import Map from './Map';

const Details = (props) => {

    // eslint-disable-next-line
    const details = providersData.find((value) => value.id == props.match.params.id);

        return (
            <div className="details">
                <div id="title">
                    <h1>Provider informations</h1>
                    <Link to="/"><DoubleLeftOutlined id="return"/></Link>
                </div>
                <p><span>Name :</span> {details.name}</p>
                <p><span>Id :</span> {details.id}</p>
                <p><span>Phone number :</span> {details.phone_number}</p>
                <p><span>Address :</span> {details.address}</p>
                <p><span>Coordinates :</span> {details.coordinates[0]} {details.coordinates[1]}</p>
                <p><span>Average patient age :</span> {details.average_patient_age} years old</p>
                <p><span>Average inpatient claim cost :</span> ${details.average_inpatient_claim_cost}</p>
                <p><span>Average outpatient claim cost :</span> ${details.average_outpatient_claim_cost}</p>
                <p><span>Total cost :</span> ${details.total_cost}</p>

                <Map />
            </div>
        )}
    

export default Details;