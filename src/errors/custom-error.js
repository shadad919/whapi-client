class CustomError extends Error {
   constructor(message, title, type, lang) {
      super(message);
      this.title = title;
      this.type = type;
      this.lang = lang;
   }
};

module.exports = CustomError;