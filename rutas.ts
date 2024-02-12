const URL='http://192.168.100.3:3000/'


export const rutas={
    login:{
        google: URL+'login-google',
        email: URL+'login-email',
        registerAndGetToken: URL+'sign-up',
        getToken: URL+'get-token',
    },
    label:{
        create: URL+'label/create',
    }
}