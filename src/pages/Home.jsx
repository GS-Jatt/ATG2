import { Col, Container, Row} from "react-bootstrap";
import useGetData from "../hooks/useGetData";
import Spinner from "../ui/Spinner";
import Users from "../ui/Users";
import Error from "../ui/Error";
import UserDetails from "../ui/UserDetails";

function Home() {
   const {data, isLoading, error} = useGetData();
   
   if(isLoading) return <Spinner/>
   if (!data) return <Error />;

    return (
        <div className=" ">
            <Container
                fluid
                 style={{ backgroundColor: "#0c1317" }}
                className=" p-5 ">
                <Row
                    className="p-5  vh-100 "
                    style={{
                        border: "1px solid #2a3942",
                        cursor: "pointer",
                    }}>
                    <Users data={data} />

                    <UserDetails data={data} />
                </Row>
            </Container>
        </div>
    );
}

export default Home
