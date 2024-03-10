import { Controller, Get } from '@nestjs/common';
import { MyLogger } from './logger';

const myLogger = new MyLogger();

@Controller()
export class AppController {
 
    @Get('/info')
    async getInfo() {
        myLogger.log('INFO', 'This is an info message');
    }

    @Get('/debug')
    async getDebug() {
        myLogger.log('DEBUG', 'This is a debug message');
    }

    @Get('/error')
    async getError() {
      myLogger.log('ERROR', 'This is a error message');

    }

    @Get('/fatal')
    async getFatal() {
            myLogger.log('FATAL', 'This is a fatal message');
        }
    }
