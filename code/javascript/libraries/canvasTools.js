function canvas(id){
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
};