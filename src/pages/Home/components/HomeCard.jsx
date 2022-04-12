import React, { useEffect, useState } from "react";
import "./HomeCard.scss";
import axios from "axios";
const HomeCard = () => {


    const [daerah, setDaerah] = useState([]);

    useEffect(() => {
        getDaerah()
    })


    const getDaerah = async () => {
        const response = await axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi');
        setDaerah(response.data.provinsi);

    }

    return <div>
        <div className="HomeCard ">
            <div className="container-card">

                <div className="content">
                    <i className="bi bi-geo-alt-fill"></i>
                    <h2>Location</h2>
                    <select className="input-content" name="location" id="location">


                        {
                            daerah.map((hasil) => (

                                <option key={'hasil.id'} value={hasil.nama}>{hasil.nama}</option>
                            ))
                        }

                    </select>
                </div>
                <div className="content">
                    <i className="bi bi-calendar3-week-fill"></i>
                    <h2>Date</h2>
                    <input type="date" className='input-content' />
                </div>
                <div className="content">
                    <i className="bi bi-collection-fill"></i>
                    <h2>Room</h2>
                    <select className='input-content' name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>

        </div>
    </div>;
};

export default HomeCard;
