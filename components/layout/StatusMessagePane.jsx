const StatusMessagePane = ({statusType, statusMessage}) => {

    const pane = (
        <>
            <div className="flash-container">
                <div className={'flash flash-' + statusType}>
                    <p>{statusMessage}</p>
                </div>
            </div>
            <br /><br />
        </>
    );

    return statusMessage && pane;
}

export default StatusMessagePane;