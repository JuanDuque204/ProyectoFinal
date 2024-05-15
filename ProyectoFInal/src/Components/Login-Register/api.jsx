// export const InsertDB = (data) => {
//     const flag = true;
//     fetch('http://localhost:3001/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Ocurrió un error al hacer la solicitud.');
//             }
//             return response;
//         })
//         .then(responseData => {
//             console.log(responseData);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//         return flag;
// }

export const InsertDB = (data) => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ocurrió un error al hacer la solicitud.');
                }
                return response.status; // Devuelve el status del response
            })
            .then(status => {
                resolve(status); // Resuelve la Promise con el status
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error); // Rechaza la Promise con el error
            });
    });
};






