export const ProgressBar = ({ bgColor , completed }) => {
if(completed >= 100) {
    completed = 100
}

const containerStyle = {
    height: 25,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin:"auto",
    marginTop: 40,
}

const fillerStyle = {
    backgroundColor: bgColor,
    height: "100%",
    width: `${completed}%`,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out"
}

const labelStyle = {
    padding: 15,
    margin: 10,
    color: "#fff",
    fontWeight: "bold",
}

    return(
        <div style={containerStyle}>
            <div style={fillerStyle}>
                <span style={labelStyle}>{`${completed}%`}</span>
            </div>
        </div>
    )
}