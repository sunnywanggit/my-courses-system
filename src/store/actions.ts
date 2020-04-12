import {ActionTree} from "vuex";
import jwt_decode from 'jwt-decode'


const  actions:ActionTree<any,any>={
    async setUser({state,commit},user:any){
        let jwtDecode = jwt_decode(user)
        // console.log(jwtDecode);
        commit('SET_USER',jwtDecode)

    }
}

export default actions