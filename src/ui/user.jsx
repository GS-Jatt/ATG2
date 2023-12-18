import { Image, ListGroup } from "react-bootstrap";

function User({user ,handleClick ,active2}) {
    const bg = active2 ? "#2a3942" : "#0c1317";
    
    return (
        <ListGroup.Item
            as="li"
            action
            onClick={handleClick}
            style={{
                backgroundColor: bg,
                border: "1px solid #2a3942",
                cursor: "pointer",
            }}
            bsPrefix="list-group-item list-group-item-action text-white p-4 fs-4 "
            className=" d-flex align-items-center  ">
            <Image
                src={user.avatar}
                alt="user img"
                roundedCircle
                style={{ width: "90px",height:'90px',fontSize:'15px' }}
                className=" "
            />
            <h3 style={{ marginLeft: "25px" }} className="">
                {`${user.profile.firstName} ${user.profile.lastName}`}
            </h3>
        </ListGroup.Item>
    );
}

export default User
