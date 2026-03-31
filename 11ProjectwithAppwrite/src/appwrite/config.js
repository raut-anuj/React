// @ts-nocheck
import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service{
      client = new Client();
      databases;
      bucket;

      constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }

    async createPost({title, featuredImage, status, userId, slug,content}){
      try {

       return await this.databases.createDocument(
          conf.appwriteDATABASE_ID,   // ✅ pehle databaseId
          conf.appwriteCOLLECTION_ID, // ✅ phir collectionId
          slug, //yha ph unique id dena ha lakin hm yha ph slug deh deh rhe ha, lakin iska jagah hm uniqueId generate kr kh bhi deh sakte ha .
          {
            title,
            content, 
            featuredImage,
            status,
            userId
          }
        )
      } catch (error) {
        console.log(error);
      }
    }

    async updatePost(slug, {title, featuredImage, status, userId,content}){
      try {
        return await this.databases.updateDocument(
          conf.appwriteDATABASE_ID,   // ✅ pehle databaseId
          conf.appwriteCOLLECTION_ID, // ✅ phir collectionId
          slug, //yha ph unique id dena ha lakin hm yha ph slug deh deh rhe ha, lakin iska jagah hm uniqueId generate kr kh bhi deh sakte ha .
          {
            title,
            content, 
            featuredImage,
            status,
            userId
          }
        )
      } catch (error) {
        console.log(error);
      }
    }

    async deletePost(slug){
      try {
        await this.databases.deleteDocument(
           conf.appwriteDATABASE_ID,   // ✅ pehle databaseId
           conf.appwriteCOLLECTION_ID, // ✅ phir collectionId
           slug
        ) 
          return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    async getDocument(slug){
      try {
         const post = await this.databases.getDocument(
           conf.appwriteDATABASE_ID,   // ✅ pehle databaseId
           conf.appwriteCOLLECTION_ID, // ✅ phir collectionId
           slug,
         )
         return post;
      } 
      catch (error) {
        console.log(error);
      }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
    }

    async uploadFile(file){
    }

    async deleteFile(fileId){
    }

     getFilePreview(fileId){
    }

}

const service = new Service()
export default service