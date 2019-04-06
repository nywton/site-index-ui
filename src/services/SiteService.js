import Resquester from './Requester';

export default class SiteService {
    sitesPath = '/sites';
    getAll() {
        return Resquester.get(this.sitesPath);
    }

    save(url) {
        return Resquester.post(this.sitesPath, {"data": {"type":"sites", "attributes":{"url":url}}})
    }

}