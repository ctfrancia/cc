const facts = require('../Models/model');

class FactsController {

        // GET FIND ALL
        async get(req, res){
            try{
                const all = await facts.find({});
                res.send(all);
            }
            catch(e){
                console.log(e)
                res.send({e})
            }
        }
        // POST ADD ONE -------------> fix &quot and not allow duplicates
        async insert (req, res) {
            let { id, joke } = req.body;

            if (await facts.findOne({Id:id}) !== null){
                console.log('found something')
                res.send('fact already there')
            } else {
                try{
                    const done = await facts.create({Id:id, Joke:joke.split('&quot;').join('"') });
                    console.log(done)
                    res.send(done)
                }
                catch(e){
                    res.send({e})
                }
                console.log('nope, not found')
            }

            
        }

    // DELETE FACT
    async delete (req, res) {
        let { Id } = req.body;
        try{
            const fact = await facts.deleteOne({Id:Number(Id)});
            console.log('TO DELETE', Number(Id) )
            res.send(fact);   
        }
        catch(e){
            res.send({e})
        }

    }
    
   

}
module.exports = new FactsController();