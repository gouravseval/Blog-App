import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf"

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client)
    }

    async CreatePost({featuredImage, status, content, title, userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, ID.unique(), {featuredImage, status, content, title, userId})
        } catch (error) {
            throw error;
        }
    }

    async UpdatePost(slug ,{featuredImage, status, content, title}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {featuredImage, status, content, title})
        } catch (error) {
            throw error;
        }
    }

    async DeletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true;
        } catch (error) {
            throw error;
        }
    }

    async GetPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            throw error
        }
    }

    async GetPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            throw error;
        }
    }

    // File Upload Services

    async UploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log("error in upload file")
            throw error
        }
    }

    async DeleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId,fileId)  
            return true;
        } catch (error) {
            
        }
    }

    GetFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
    }
}

const service = new Service(); 
export default service;