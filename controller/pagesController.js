
const arr = __dirname.split('\\');
arr.splice(arr.length - 1,1);
const path = arr.join('/');

const home = (req, res) => {
  res.sendFile(path + "/views/index.html");
};

const about = (req,res)=>{
     res.sendFile(path + "/views/about.html");
}

const create = (req,res)=>{
     res.sendFile(path + "/views/create.html");
}

const notFound = (req,res)=>{
     res.sendFile(path + "/views/404.html");
}



const aboutMe = (req,res)=>{
    res.redirect("/about")
}

module.exports = {
    home,
    about,
    create,
    aboutMe,
    notFound
}
