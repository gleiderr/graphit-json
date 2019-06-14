class Graphit_JSON {
  constructor() {
    this.db = {};
    this.list = {};
    this.lastId = 0;
  }
  new_id() {
    while(this.db[this.lastId = Date.now()] !== undefined);
    return this.lastId; 
  }

  retrieve_val(id) { 
    return Promise.resolve(this.db[id]); 
  }

  set_val({ id, data }) {
    this.db[id] = data;
    return Promise.resolve({id, data}); 
  }

  retrieve_list(from_id) { 
    return Promise.resolve(this.list[from_id]); 
  }
  
  set_list({ from_id, list }) {
    this.list[from_id] = list;
    return Promise.resolve(this.list[from_id]); 
  }

  remove(id) { 
    delete this.db[id];
    delete this.list[id];
    return Promise.resolve(); 
  }
}

if(module) {
  module.exports.Graphit_JSON = Graphit_JSON;
}