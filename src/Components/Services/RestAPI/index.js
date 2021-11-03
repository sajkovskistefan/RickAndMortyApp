import { BASE_URL } from '../../Constants/API';

export const getData = (cat, number) => {
    return fetch(`${BASE_URL}/${cat}?page=${number}`,
        {
            method: "GET"
        })
        .then(res => {
            return res.json();
        })
};

export const getCharacter = (cat, id) => {
    return fetch(`${BASE_URL}/${cat}/${id}`,
        {
            method: "GET"
        })
        .then(res => {
            return res.json();
        });
};

export const getAllInfo = (cat) => {
    return fetch(`${BASE_URL}/${cat}`,
        {
            method: "GET"
        })
        .then(res => {
            return res.json()
        })
        .catch(err => console.error(err))
};

export const getCharactersByName = (cat, number, name, radio) => {
    return fetch(`${BASE_URL}/${cat}/?page=${number}&name=${name}&status=${radio}`,
    {
        method: "GET"
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
};