import CrudService from './CrudServiceZ';
import LandingPageDto from '../model/dtoZ/landingPage/LandingPageDto';
import LandingPageXDto from '../model/dtoZ/landingPage/LandingPageXDto';
import { Identity } from '../security/Identity';
import * as http from './HttpUtil';

class LandingPageService extends CrudService<LandingPageDto, any> {
    constructor() {
        super('landing-pages');
    }

    public async read(): Promise<LandingPageXDto> {
        return http.get<LandingPageXDto>
            (`${this.resource}?include[]=scraper_user_agent.*`);
    }

    public async getSuggestions(): Promise<{ landing_pages: LandingPageDto[] }> {
        return http.get<{ landing_pages: LandingPageDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id`);
    }

    public async getTemplate(path): Promise<any> {
        return http.get2<any>
            (`${Identity.Server.getBaseUrl()}/${path}`);
    }
}

export default LandingPageService;