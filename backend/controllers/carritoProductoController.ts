import CarritoProducto from "../models/carritoProducto"

class CarritoProductoController{
    getAll = async (req, res) => {
        let statusCode =400;
        try {
          const carritoProductos = await CarritoProducto.find() 
          res.status(200).json(carritoProductos)
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 400){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        let statusCode = 304;
        try {
            const carrProd = await new CarritoProducto (req.body).save();
            res.status(201).json(carrProd)
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 304){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
    }
  
    count = async (req, res) => {
        let statusCode = 400;
        try {
          const count = await CarritoProducto.count();
          res.status(200).json(count);
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 400){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
      }

      // Get by id
    get = async (req, res) => {
        let statusCode = 404;
        try {
        const obj = await CarritoProducto.findOne({ _id: req.params.id });
        res.status(200).json(obj);
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 404){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
    }

        // Update by id
    update = async (req, res) => {
        let statusCode = 304;
        try {
        await CarritoProducto.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.sendStatus(200);
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 304){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
    }

        // Delete by id
    delete = async (req, res) => {
        let statusCode = 304;
        try {
        await CarritoProducto.findOneAndRemove({ _id: req.params.id });
        res.sendStatus(200);
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 304){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
    }
}

export default CarritoProductoController