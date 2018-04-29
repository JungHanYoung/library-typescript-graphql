import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as path from 'path';

import apiRouter from './routes';

class Server {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    /**
     * app's middleware settings
     */
    private config(): void {
        // post body setting
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        // logger setting
        this.app.use(logger('dev'));
        // static files setting - css, images
        this.app.use(express.static(path.join(__dirname, "./../public")));

    }
    /**
     * app's routing settings
     */
    private routes(): void {
        this.app.use('/api/v1', apiRouter);
    }
}

export default new Server().app;