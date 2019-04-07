import Resquester from './Requester';
const SITES_PATH = '/sites';

export default class SiteService {
    static getAll() {
        return Resquester.get(SITES_PATH);
    }

    static getById(id) {
        return Resquester.get( `${SITES_PATH}/${id}`);
    }

    static save(url) {
        return Resquester.post(SITES_PATH, {data: {type:"sites", attributes:{url:url}}})
    }

}