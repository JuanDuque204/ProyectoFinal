import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Contexto.jsx'; // Asegúrate de importar tu contexto de usuario
import Swal from 'sweetalert2'; // Asegúrate de instalar e importar sweetalert2

export const PrivateRoute = ({ element }) => {
    const { user } = useContext(UserContext);
    const location = useLocation();

    useEffect(() => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Acceso denegado',
                text: 'No has iniciado sesión. Por favor, inicia sesión para acceder a esta página.',
            });
        }
    }, [user]);

    return user ? element : <Navigate to="/" state={{ from: location }} />;
};

export const PublicRoute = ({ element }) => {
    const { user } = useContext(UserContext);
    return !user ? element : <Navigate to="/" />;
};

export const PrivateRouteAdmin = ({ element }) => {
    const { user } = useContext(UserContext);
    const location = useLocation();

    useEffect(() => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Acceso denegado',
                text: 'Solo los administradores tienen acceso',
            });
        }
    }, [user]);

    return user && user.id_usuario === 1 ? element : <Navigate to="/" />;
};