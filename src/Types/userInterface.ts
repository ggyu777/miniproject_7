export interface Iresponse {
    response: Idocs;
}
export interface Idocs {
    docs: InewsSearch[];
}
export interface IObj {
    obj: InewsSearch
}
export interface newsInfo {
    id: string,
    name: string,
    title: string,
    date: string,
    content: string,
    clip: boolean,
    url: string
}
export interface InewsSearch {

    clip?: boolean;
    _id: string;
    uri: string;
    web_url: string;
    lead_paragraphm: string;
    pub_date: string;
    byline: {
        original: string; main: string 
}; 
    headline: {
        main: string; original: string 
};
}

