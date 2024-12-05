import React from 'react';
import Timeline from "./Timeline/Timeline";
import TeamMembers from './Team/TeamMembers';
import Header from "./components/1-header/Header";
import About from "./components/2-about/About";
import StoryComponent from './Timeline_Header/StoryComponent';
import Footer from './components/Footer/Footer';
import Collab from './Collab/Collab';


const Home = () => {
    return (
        <>
            <Header />
            <About />
            <StoryComponent />
            <Timeline />
            <Collab />
            <TeamMembers />
            <Footer />
        </>
    );
}

export default Home;