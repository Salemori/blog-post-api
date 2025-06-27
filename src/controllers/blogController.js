const Blog = require("../models/blogModel");

exports.fetchAllBlogs = async (req, res) =>{
   try {
        let allBlogs = await Blog.find({});
        // console.log(typeof allBlogs);
        console.log(allBlogs);
        res.send(`Retrieved all blogs ${allBlogs}`);
   } catch (error) {
        console.log(error);
        res.send(`Error occurred ${error}`);
   }
} //Another method of export.