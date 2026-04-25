import express from "express";  
import {urlModel} from "../model/shortUrl";   

export const createUrl= async(
    req: express.Request,
    res: express.Response  
)=>{
    try {
        console.log("The fullUrl  is ",req.body.fullUrl);
        const {fullUrl} = req.body;
        const urlFound = await urlModel.find({fullUrl: fullUrl});
        if(urlFound.length > 0){
            res.status(409);
            res.send(urlFound);

        }
        else{
            const shortUrl = await urlModel.create({
                fullUrl: req.body.fullUrl,
            });
            res.status(201);
            res.send(shortUrl);
        }
    }
    catch(error){
        
        res.status(500).send({message: "Something went wrong"});
    }
};


export const getAllUrl= async(
    req: express.Request,
    res: express.Response  
)=>{
    try {
        const shortUrls = await urlModel.find({});
        if(shortUrls.length < 0){
            res.status(404).send({message: "No short URLs found"});
        } else {
            res.status(200).send(shortUrls);
        }
    } catch (error) {
         res.status(500).send({message: "Something went wrong"});
    }
};



export const getUrl= async(
    req: express.Request,
    res: express.Response  
)=>{
    try {
        const shortUrl = await urlModel.findOne({shortUrl: req.params.id});
    if(!shortUrl){
        res.status(404).send({"messsage" : "Full URL not found"});
    }
    else{
        shortUrl.clicks++;
        shortUrl.save();
        res.redirect(`${shortUrl.fullUrl}`);

    }
        
    } catch (error) {
         res.status(500).send({message: "Something went wrong"});
    }
   
};



export const deleteUrl = async(
    req: express.Request,
    res: express.Response  
) => {
    try {
        const shortUrl = await urlModel.findByIdAndDelete(req.params.id);
        if(shortUrl) {
           res.status(200).send({ message: "Requested URL deleted successfully" });
        } else {
            res.status(404).send({ message: "URL not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Something went wrong" });
    }
};
   



