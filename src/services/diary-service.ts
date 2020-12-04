import diary_data from '../../data/diaries.json';

const get_entries = () => {
    return diary_data;
};

const add_entry = () => {
    return null;
};


export default {
    getEntries,
    addEntry
};



// common practice to separate the "business logic" from the router code 
// into its own modules, which are quite often called services. Doman driven design