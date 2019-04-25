export class Constants {

    BASE_URL:string="http://localhost:9000";

    //Login api service
    //Post method to authenticate user
    AUTHENTICATE_LOGIN:string=this.BASE_URL+"/auth/login";

    //loggedin user check
    //Get method to verify login each time
    CHECK_LOGIN:string= this.BASE_URL+"/user/checklogin";

    //Batch scheduling api's
    BATCH_SHEDULING:string=this.BASE_URL+"/batchscheduling";
    //FsdBatchscheduling get count
    //Get Method
    FSD_BATCH_SCHEDULING_COUNT:string=this.BATCH_SHEDULING+"/fsdcount";
    //FsdbBatchScheduling data
    FSD_BATCH_SCHEDULING_DATA:string=this.BATCH_SHEDULING+"/fsdschedule";
    //PcsBatchScheduling get count
    //Get Method
    PCS_BATCH_SCHEDULING_COUNT:string=this.BATCH_SHEDULING+"/pcscount";
    //PcsBatchScheduling data
    PCS_BATCH_SCHEDULING_DATA:string=this.BATCH_SHEDULING+"/pcsschedule";

    //Wizards api's
    INCRA_IMPORT_WIZARD:string=this.BASE_URL+"/wizards";
    
    //Incra import wizard get parameters
    INCRA_IMPORT_WIZARD_GET_PARAMETER:string=this.INCRA_IMPORT_WIZARD+"/incraGetParameters";

    //Incra import wizard upload Incra File
    INCRA_IMPORT_WIZARD_UPLOAD_INCRAFILE:string=this.INCRA_IMPORT_WIZARD+"/incraupload";

    //Incra import delete incra temp file
    INCRA_IMPORT_WIZARD_DELETE_INCRATEMP_FILE:string=this.INCRA_IMPORT_WIZARD+"/deleteincra";


}