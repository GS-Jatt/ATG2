function Spinner() {
    return (
        <div
            style={{ backgroundColor: "#0c1317" }}
            className="d-flex justify-content-center vh-100 align-items-center ">
            <div
                style={{ width: "5rem", height: "5rem" }}
                className="spinner-border"
                role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
