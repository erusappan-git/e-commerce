import ErrorHandler from "../utils/errorHandlerClass.js";

export default (err, req, res, next) => {

    let error = {
        message : err.message || "Server Error",
        statusCode : err.statusCode || 500,
    };

    if(err.name === "CastError"){
        // console.log("this is error", err.name);
        const message = `Resource Not Found. Invalid : ${err.path}`;
        error = new ErrorHandler(message, 404);
    }

    if(process.env.NODE_ENV === "DEVELOPMENT"){

        res.status(error.statusCode).json({
            message: error.message,
            error: err,
            stack: err.stack
        });

    }else if(process.env.NODE_ENV === "PRODUCTION"){
        res.status(error.statusCode).json({
            message: error.message
        });
    }


}