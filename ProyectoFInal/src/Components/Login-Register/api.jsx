export const InsertDB = (data, url) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    if (response.status === 409) {
                        resolve(response); // Resuelve la Promise con el response completo
                    } else {
                        throw new Error('Ocurrió un error al hacer la solicitud.');
                    }
                } else {
                    resolve(response); // Resuelve la Promise con el response completo
                }
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error); // Rechaza la Promise con el error
            });
    });
};

export const ValidarUser = async (email, contrase) => {
    try {
        const response = await fetch(`http://localhost:3004/users/${email}/${contrase}`);
        if (!response.ok) {
            throw new Error('Error al validar el usuario');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        return { error: err.message };
    }
};

export const GetProducts = async () => {
    try {
        const response = await fetch(`http://localhost:3004/products`);
        if (!response.ok) {
            throw new Error('Error al traer los productos');
        }
        const data = await response.json();
        return data[0];
    } catch (err) {
        return { error: err.message };
    }
};
