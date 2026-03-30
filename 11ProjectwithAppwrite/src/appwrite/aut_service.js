import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)

    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.loginUser({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async loginUser({email, password, name}){
        try{
            return await this.account.createEmailPasswordSession({
                email: email, 
                password: password
             });
           }  
           catch(err){
            throw err;
        }
    }

    async getCurrentUser(){
    try {
        return await this.account.get();
    } 
    catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);
        return null;
    }
    }

    async logoutUser(){
        try {
            await account.deleteSessions();
        } catch (error) {
            console.log("Error occur during logout", error);
            
        }
    }
}
 
const authservice = new AuthService();

export default authservice;