import React from 'react'
import { Btn } from '../../components'
import HomeCard from './components/HomeCard';
import './home.scss'

function HomePage() {
    return (
        <div className="HomePage">
            <div className="home-main">
                <div className="content">
                    <div className="container home-container">
                        <h1>find your best movie at cinemas</h1>
                        <div className="input-group">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Search Your Film" />
                            <Btn title={"EXPLORE"} />
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Blanditiis reiciendis repudiandae, temporibus fugiat architecto
                            similique.
                        </p>
                    </div>
                </div>
                <HomeCard />
            </div>
        </div>
    );
}

export default HomePage