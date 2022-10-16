const cloudinary = require('../helpers/cloudinary')
const Post = require('../Models/PostModel')



const AddPost= async(req,res)=>{
    try {
      const {title,Des,image} = req.body 
      
      const savedImg=await cloudinary.uploader.upload(image)
      const newPost=await new Post({title,Des,imag:{public_id:savedImg.public_id,ImagUrl:savedImg.url,owner:req.userId}})
      const savedPost=await newPost.save()
      res.json(newPost)
    } catch (error) {
        res.status(501).json({message:error})
        
    }
}

const GetAllPost= async(req,res)=>{
  try {
    const posts = await Post.find({}).populate({path:'owner',select:"-password"})
    res.json(posts)
  } catch (error) {
      res.status(501).json({message:error})
      
  }
}


module.exports={AddPost,GetAllPost}