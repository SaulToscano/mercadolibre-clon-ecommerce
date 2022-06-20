export function getDogs(){
    return function(dispatch){
        return fetch(`https://api.thedogapi.com/v1/breeds`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_DOGS", payload: json})
        })
    }
}