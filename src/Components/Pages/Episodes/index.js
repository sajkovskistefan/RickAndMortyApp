import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getData } from '../../Services/RestAPI';
import { ROUTES } from '../../Constants/Routes';
import Swal from 'sweetalert2';

import './episodes.css'

const Episodes = () => {
    const [episodes, setEpisodes] = useState();
    const [info, setInfo] = useState({
        pages: 5
    });
    const [decrementDisabled, setDecrementDisabled] = useState(false);
    const [incrementDisabled, setIncrementDisabled] = useState(false);
    const [number, setNumber] = useState(1);
    const history = useHistory();
    const cat = "episode";


    const increment = () => {
        if (number === info.pages) {
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
    };

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
    };

    const decrementErrorBtn = () => {
        if (decrementDisabled === true) {
            return (
                <div className="error-btn" disabled={decrementDisabled} onClick={decrement}>previous page with episodes</div>
            )
        } else {
            return (
                <div className="btn" disabled={decrementDisabled} onClick={decrement}>previous page with episodes</div>
            );
        };
    };

    const incrementErrorBtn = () => {
        if (incrementDisabled === true) {
            return (
                <div className="error-btn" disabled={incrementDisabled} onClick={increment}>next page with episodes</div>
            );
        } else {
            return (
                <div className="btn" disabled={incrementDisabled} onClick={increment}>next page with episodes</div>
            );
        };
    };

    console.log(info.pages)

    useEffect(() => {
        getData(cat, number)
            .then(data => {
                setEpisodes(data.results)
                setInfo(data.info)
            })
        if (number <= 1) {
            setDecrementDisabled(true)
        } else {
            setDecrementDisabled(false)
        }
        if (number === info.pages) {
            setIncrementDisabled(true)
        } else {
            setIncrementDisabled(false)
        }
    }, [number]);

    console.log(info)

    const goToEpisode = (episode) => {
        // history.push(`${ROUTES.EPISODE}/${episode.id}`);
        history.push({
            pathname: `${ROUTES.EPISODE}/${episode.id}`,
            state: {
                count: info.count
            }
        })
    };

    console.log(episodes)
    return (
        <div className="page-container">
            <h1 className="page-header">Episodes</h1>
            {episodes ? episodes.map((episode) => {
                return (
                    <div className="episode-container-without-btn" key={episode.id}>
                        <p className="dynaminc-value">{episode.id})</p>
                        <p className="static-value"> Episode name: </p> <p className="dynaminc-value"> {episode.name} </p>
                        <p className="static-value"> Air date: </p> <p className="dynaminc-value"> {episode.air_date} </p>
                        <p className="info-span" onClick={() => goToEpisode(episode)}> info</p>
                    </div>
                )
            })
                : null}
            <div className="btn-container">
                {decrementErrorBtn()}
                {incrementErrorBtn()}
            </div>
        </div>
    );
};

export default Episodes;
