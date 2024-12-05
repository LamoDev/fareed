import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timeline from './Timeline/Timeline';
import PhaseOne from './Timeline/Pages/phaseOne';
import PhaseTwo from './Timeline/Pages/phaseTwo';
import PhaseThree from './Timeline/Pages/phaseThree';
import PhaseFour from './Timeline/Pages/phaseFour';
import PhaseFive from './Timeline/Pages/phaseFive';
import PhaseSix from './Timeline/Pages/phaseSix';
import PhaseSeven from './Timeline/Pages/phaseSeven';
import PhaseEight from './Timeline/Pages/phaseEight';
import PhaseNine from './Timeline/Pages/phaseNine';
import Home from './Home';
import TeamMembers from './Team/TeamMembers'; 
import ComingSoon from './Coming/ComingSoon';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/phase-one" element={<PhaseOne />} />
                <Route path="/phase-two" element={<PhaseTwo />} />
                <Route path="/phase-three" element={<PhaseThree />} />
                <Route path="/phase-four" element={<PhaseFour />} />
                <Route path="/phase-five" element={<PhaseFive />} />
                <Route path="/phase-six" element={<PhaseSix />} />
                <Route path="/phase-seven" element={<PhaseSeven />} />
                <Route path="/phase-eight" element={<PhaseEight />} />
                <Route path="/collab" element={<PhaseNine />} />
                <Route path="/team" element={<TeamMembers />} /> 
                <Route path="/coming-soon" element={<ComingSoon />} /> 
            </Routes>
        </Router>
    );
}

export default App;