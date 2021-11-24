// mock database
module.exports = () => {
  database = {a: "b"}
  return {
    write: (key, value) => {
      database[key] = value
      let response = {}
      response[key] = value
      return response 
    },
    read: key => {
      let response = {}
      if(database[key]){
        response[key] = database[key]
        return response
      }
      else {
        return {error: 'key not found'}
      }
    },
    all: () => database
  }
}