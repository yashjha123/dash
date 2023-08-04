import {getAction} from '../actions/constants';
import {mergeDeepRight} from 'ramda';

export default function config(state = null, action) {
    if (action.type === getAction('SET_CONFIG')) {
        // Put the components childrenProps in windows for side usage.
        window.__dashprivate_childrenProps = mergeDeepRight(
            window.__dashprivate_childrenProps || {},
            action.payload.children_props
        );
        console.log("HATRICK")
        return action.payload;
    } else if (action.type === getAction('ADD_HTTP_HEADERS')) {
        console.log("WOAH, what happend")
        return mergeDeepRight(state, {
            fetch: {
                headers: action.payload
            }
        });
    }
    // console.log("NEW STATE",state)
    return state;
}
