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
//             return response.json();
//         })
//         .then(responseData => {
//             console.log(responseData);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//         return flag;
// }

export const InsertDB = async (data) => {
    let flag;
    try {
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            if (response.status === 409) {
                flag = response.status;
                return flag; // Return false if the user is already registered
            }
            throw new Error('Ocurrió un error al hacer la solicitud.');
        }

        const responseData = await response.json();
        console.log(responseData);

        return true; // Return true if the request was successful
    } catch (error) {
        console.error('Error:', error);
        return false; // Return false if there was an error in the request
    }
};

