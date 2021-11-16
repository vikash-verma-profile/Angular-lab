
//browser console
//email
//db

export interface ILogger{
    Log():any;
}

export class BaseLogger implements ILogger{
    Log():any{

    }
}
export class ConsoleLogger extends BaseLogger{
    override Log(){
        console.log("Using Console Logger");
    }
}

export class DBLogger extends BaseLogger{
    override Log(){
        console.log("Using Db Logger");
    }
}
export class FileLogger extends BaseLogger{
    override Log(){
        console.log("using file logger");
    }
}