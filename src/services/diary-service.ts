import diary_data from '../../data/diaries';

import { diary_entry } from '../types';

const diaries: Array<diary_entry> = diary_data;

const get_entries = (): Array<diary_entry> => {
    return diaries;
};

const add_entry = () => {
    return null;
};


export default {
    get_entries,
    add_entry
};



// common practice to separate the "business logic" from the router code 
// into its own modules, which are quite often called services. Doman driven design