import { Routes as Router, Route, Navigate } from 'react-router-dom';
// import ContactChange from '../pages/contact/contact';
import Dashboard from '../pages/Dashboard/Dashboard';
import IntitateServiceRequest from '../pages/InitateServiceRequest/InititateServiceRequest';

const RoutesNavigation = () => {
    return (
        <Router>
            <Route path="/" element={<Navigate replace to="/rps-client" />} />
            <Route path="/rps-client" element={<Dashboard user="Test"/>}/>
            <Route path="/dashboard/initiate-service-request" element={<IntitateServiceRequest />} />
        </Router>
    )
}

export default RoutesNavigation;