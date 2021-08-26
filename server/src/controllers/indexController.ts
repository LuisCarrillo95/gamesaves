import {Request, Response } from 'express';

class IndexController {
    
    index (req:Request, res: Response ) {
        res.send({Text: 'API Is /api/games'});
}
}

export const indexController = new IndexController();