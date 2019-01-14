var foot = {
    kick: () => {
        this.yelp = "Ouch!";
        setImmediate(()=>console.log(this.yelp)); //this inside arrow fn binds to outer fn too
        return this.yelp
    }
};
foot.kick();
module.exports = foot.kick