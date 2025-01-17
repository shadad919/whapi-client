const CustomError = require("./custom-error")



class BadRequestError extends CustomError {
   constructor(message, lang) {
      
      let title = "Error";
      super(message);
      this.code = 400;
      this.type = "BAD_REQUEST";
      this.title = title;
   };
};
module.exports = BadRequestError;