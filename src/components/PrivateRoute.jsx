import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    let Name=JSON.parse(localStorage.getItem("userName"));
    if(!Name){
        return <Navigate to="/login"/>;
    }else{

        return children;
    }
}

export default PrivateRoute;