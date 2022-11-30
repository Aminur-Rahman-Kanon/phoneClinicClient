import React from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} location={useLocation()} navigate={useNavigate()}/>;
}

export default withParams;
