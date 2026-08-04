const path = require("path");

const home = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

const about = (req,res)=>{
     res.sendFile(path.join(__dirname, "../views/about.html"));
}

const create = (req,res)=>{
     res.sendFile(path.join(__dirname, "../views/create.html"));
}

const aboutMe = (req,res)=>{
    res.redirect("/about")
}

module.exports = {
    home,
    about,
    create,
    aboutMe
}
