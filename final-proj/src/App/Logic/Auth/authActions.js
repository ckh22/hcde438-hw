import {SIGN_IN_USER, SIGN_OUT_USER} from "./authConstants";
import firebase from '../../Database/db'
import {APP_LOADED} from "../Async/asyncReducer";

export function signInUser(user) {
    return {type: SIGN_IN_USER, payload: user};
}
export function signOutUser() {
    return {type: SIGN_OUT_USER};
}