import tvShows from '../models/tv.model.js';

const tvController = {
    getAlltvs : async(req, res)=>{
        try {
            res.status(200).json(tvShows);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "couldn't get all"});
        }
    },
    getByYear : async(req, res)=>{
        try {
            const filteredtvs =  tvShows.filter(tv => tv.yearCreated   === parseInt(req.params.id));
             res.status(200).json(filteredtvs);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "cannot get by year"});
        }
    },
    deleteTV : async(req, res)=>{
        try {
            
            const index = tvShows.findIndex(tv => tv.tvShow.toLowerCase() === (req.params.id).toLowerCase());
            if(index !== -1){
                tvShows.splice(index, 1);
                res.status(200).json({ message: "TV deleted successfully" ,tvShows } );
            }else{
                res.status(404).json({message: "TV not found"});
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({message: "error while deleting TV"});
        }
    },
    UpdateByTitle : async(req, res)=>{
        try {
            const title = req.params.id;
            const {starring} = req.body
    
            const tvshow = tvShows.find(tv =>tv.tvShow.toLowerCase()=== title.toLowerCase());
            if(!tvshow){
                res.status(404).json({message: `tv show with title ${title} not found`})
            }
            tvshow.starring = starring;
            res.status(200).json({tvShows ,tvshow});
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Unable to update starring property" });
        }
    },
    createTV : async(req , res) =>{
        try {
            const {tvShow , yearCreated , genre , starring} = req.body
            const existv = tvShows.find(tv => tv.tvShow.toLowerCase() === tvShow.toLowerCase());
            if(existv){
                res.status(404).json({message:"TV show already exists"})
            }
            tvShows.push({tvShow, yearCreated, genre, starring});
            res.status(201).json({message: "TV created successfully", tvShows });

            
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "error  in  adding a  tv " });
        }
    },


}

export default tvController;