// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

// import { getData } from '../../Services/RestAPI';
// import { ROUTES } from '../../Constants/Routes';

// const Locations = () => {
//     const [locations, setLocations] = useState();
//     const [number, setNumber] = useState(1);
//     const cat = 'location';
//     const history = useHistory();

//     useEffect(() => {
//         getData(cat, number)
//             .then(data => setLocations(data.results))
//     }, []);

//     const goToLocationPage = (location) => {
//         history.push(`${ROUTES.LOCATION}/${location.id}`);
//     };

//     return (
//         <div>
//             <h1>Locations</h1>
//             {locations ? locations.map((location) => {
//                 return (
//                     <div onClick={() => goToLocationPage(location)} key={location.id}>
//                         <p>{location.name}</p>
//                         <p>{location.type}</p>
//                         <p>{location.dimension}</p>
//                     </div>
//                 );
//             }) : null}
//         </div>
//     );
// };

// export default Locations;














import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../Constants/Routes';
import { getData } from '../../Services/RestAPI';
import './locations.css'

const Locations = () => {

    const [locations, setLocations] = useState();
    const [info, setInfo] = useState({})
    const [number, setNumber] = useState(1)
    const [incrementDisabledButton, setIncrementDisabledButton] = useState(false)
    const [decrementDisabledButton, setDecrementDisabledButton] = useState(false)

    const history = useHistory()

    const cat = 'location'

    const increment = () => {
        if (info && info.pages && number === info.pages) {
            Swal.fire({
                title: "<h5 style='color:#f9bf1e', >" + "Error" + "</h5>",
                text: 'No previous pages',
                icon: 'error',
                confirmButtonText: 'Cool',
                confirmButtonText: "Got it",
                iconColor: "#f675da",
                customClass: {
                    text: "swal-text-color",
                    confirmButton: "error-btn-swal"
                },
                buttonsStyling: false
            })
        } else {
            setNumber(number + 1)
        }
    }

    const decrement = () => {
        if (number <= 1) {
            Swal.fire({
                title: "<h5 style='color:#f9bf1e', >" + "Error" + "</h5>",
                text: 'No previous pages',
                icon: 'error',
                confirmButtonText: 'Cool',
                confirmButtonText: "Got it",
                iconColor: "#f675da",
                customClass: {
                    text: "swal-text-color",
                    confirmButton: "error-btn-swal"
                },
                buttonsStyling: false
            })
        } else {
            setNumber(number - 1)
        }
    }

    const incrementErrorButton = () => {
        if (incrementDisabledButton === true) {
            return (<div className="error-btn" disabled={incrementDisabledButton} onClick={increment}>next page</div>)
        } else {
            return (<div className="btn" disabled={incrementDisabledButton} onClick={increment}>next page</div>)

        }
    }

    const decrementErrorButton = () => {
        if (decrementDisabledButton === true) {
            return (<div className="error-btn" disabled={decrementDisabledButton} onClick={decrement}>previous page</div>)
        } else {
            return (<div className="btn" disabled={decrementDisabledButton} onClick={decrement}>previous page</div>)

        }
    }


    useEffect(() => {
        getData(cat, number)
            .then(data => {
                setLocations(data.results)
                setInfo(data.info)
            })
        if (number <= 1) {
            setDecrementDisabledButton(true)
        } else {
            setDecrementDisabledButton(false)
        }
        if (number === info.pages) {
            setIncrementDisabledButton(true)
        } else {
            setIncrementDisabledButton(false)
        }

    }, [number]);
    console.log(locations)
    console.log(info)

    // const goToLocation = (location) => {
    //     history.push(`${ROUTES.LOCATION}/${location.id}`)
    // }

    return (
        <div className="page-container">
            <h1 className="page-header">Locations</h1>
            <div className="whole-map-container">
                {locations ? locations.map((location) => {
                    return (
                        <ul className="location-container">
                            <li className="static-value-contanier"> <p className="static-value-paragraph">Name:</p><p className="paragraph">{location.name}</p></li>
                            <li className="static-value-contanier"> <p className="static-value-paragraph">Type: </p><p className="paragraph">{location.type}</p></li>
                            <li className="static-value-contanier"> <p className="static-value-paragraph">Dimension:</p> <p className="paragraph">{location.dimension}</p></li>
                            {/* <li className="dynaminc-value"><p>Residents</p></li> */}
                        </ul>
                    )

                }) : null}
            </div>
            <div className className="btn-container">
                {decrementErrorButton()}
                {incrementErrorButton()}
            </div>
        </div>
    );
};

export default Locations;