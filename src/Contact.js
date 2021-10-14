import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

const User = () => {
    const { id } = useParams();
    return ( 
        <h1> ID Get From Contact - {id}</h1>
    )
}

const Contact = (props) => {
    const userData = [{id: 100, name: 'Atul'}, {id: 200 , name: 'Anuj'}];
    const { userId }  = useParams();
    //props.match.params.userId

    const {url, path} = useRouteMatch();
    //url = /contact/100
    //path = /contact/:userId

    let user = userData.filter((user) => user.id == userId);
    return(
        <>
        <h2>This is my Contact Page</h2>
        <hr/>
        <div>
            <p> My Id is : {user[0].id} </p>
            <h5> My Name is: {user[0].name} </h5>
        </div>
        <Link to={`${url}/MyID`}><button>User ID</button></Link>
        <Link to={`${url}/Test USer`}><button>User Name</button></Link>
        <Route path={`${path}/:id`} component={User}/>
        </>
    )
}

export default Contact;