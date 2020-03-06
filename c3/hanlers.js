// route handler
const index = (req, res) => {
    res.send('ok');
}

const pero = (req, res) => {
    res.send('HI Pero!');
}

const name = (req, res) => {
    res.send(req.params.name);
}

const calc = (req, res) => {
    switch(req.params.op){
        case 'mul':
            res.send('' + (Number(req.params.a) * Number(req.params.b)))
            break;
        case 'add':
            res.send('' + (Number(req.params.a) + Number(req.params.b)))
            break;
        case 'sub':
            res.send('' + (Number(req.params.a) - Number(req.params.b)))
            break;
        case 'div':
            res.send('' + (Number(req.params.a) / Number(req.params.b)))
            break;
        default:
            res.send('Unknown operation');
    }
}

const post = (req, res) => {
    let pozdrav = `Zdravo ${req.body.ime} ${req.body.prezime}`;
    res.send(pozdrav);
}

module.exports = {
    index,
    pero,
    name,
    calc,
    post
};