import { Col, Container, Image } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

function UserDetails({ data }) {
    const [searchParams] = useSearchParams();
    const selectedUser = searchParams.get("selectedUser") || "not";
    const user = data[+selectedUser];

    return (
        <Col className=" d-flex flex-column align-items-center text-white h-100 overflow-auto hid-scrollbar  ">
            <h3 className=" fw-semibold ">User Details</h3>
            <Container className="d-flex flex-column align-items-center mt-5 ">
                {selectedUser == "not" ? (
                    <h1>No user selected</h1>
                ) : (
                    <>
                        <Image
                            src={user.avatar}
                            alt="user img"
                            roundedCircle
                            className="fs-6 "
                            style={{ width: "100px" }}
                        />
                        <h7 className="pt-3 pb-4">@{user.profile.username}</h7>
                        <h4>About</h4>
                        <p>{user.Bio}</p>
                        <div className=" w-50 mt-4 ">
                            <h5>Title :- {user.jobTitle}</h5>

                            <h5>First Name :- {user.profile.firstName}</h5>
                            <h5>Last Name :- {user.profile.lastName}</h5>
                            <h5>Email :- {user.profile.email}</h5>
                        </div>
                    </>
                )}
            </Container>
        </Col>
    );
}

export default UserDetails;
