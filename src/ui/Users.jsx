import { Col, ListGroup } from "react-bootstrap";
import User from "./user";
import { useSearchParams } from "react-router-dom";

function Users({data}) {
    const [searchParam,setSearchParam] = useSearchParams();
    const selectUser = searchParam.get('selectedUser') || 'sd';
    
    function handleClick(ind){
        searchParam.set('selectedUser',ind)
        setSearchParam(searchParam);
    }
    return (
        <Col className=" d-flex flex-column align-items-center text-white h-100  ">
            <h3 className=" fw-semibold ">User</h3>
            <ListGroup
                as="ul"
                fluid className=" w-100 pointer-event overflow-auto hid-scrollbar  " >
                {data &&
                    data.map((user, index) => (
                        <User
                            key={index}
                            user={user}
                            handleClick={() => handleClick(index)}
                            active2={+selectUser === index}
                        />
                    ))}
            </ListGroup>
        </Col>
    );
}

export default Users
