import { HOME } from '../shared/home';
import { INFORM } from "../shared/inform";
import { REDUCEPRODUCTS } from "../shared/reduceproducts";
import { REDUCEWASTE } from "../shared/reducewaste";
import { REDUCETIPS } from "../shared/reducetips";
import { TOOLS } from "../shared/tools";
import { COLLAB } from "../shared/collab";
import { COMMENTS } from "../shared/comments";

export const initialState = {
    home: HOME,
    inform: INFORM,
    products: REDUCEPRODUCTS,
    waste: REDUCEWASTE,
    tips: REDUCETIPS,
    tools: TOOLS,
    collab: COLLAB,
    comments: COMMENTS
};

export const Reducer = (state = initialState, action) => {
    return state;
};