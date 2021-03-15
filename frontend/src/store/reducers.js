import {combineReducers} from "redux";
import {authReducer} from "./auth/reducers";
import {registrationReducer} from "./registration/reducers";
import {statusbarReducer} from "./statusbar/reducers";
import {settingsReducer} from "./settings/reducers";
import {initialDocReducer} from "./initial_doc/reducers";
import {lookupDocReducer} from "./lookup_doc/reducers";
import {resultsTableReducer} from "./results_table/reducers";
import {synonymsDocReducer} from "./synonyms_doc/reducers";
import {workplaceReducer} from "./workplace/reducers";


const rootReducer = combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    statusbar: statusbarReducer,
    settings: settingsReducer,
    initialDoc: initialDocReducer,
    lookupDoc: lookupDocReducer,
    synonymsDoc: synonymsDocReducer,
    resultsDoc: resultsTableReducer,
    // workplace: workplaceReducer
});

export default rootReducer;
