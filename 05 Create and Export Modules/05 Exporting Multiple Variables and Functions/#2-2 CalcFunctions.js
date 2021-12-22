const add = (x,y) =>
{
    return x+y;
}

const sub = (x,y) =>
{
    if (x>y)
    {
        return x-y;
    }
    else
    {
        return y-x;
    }
}

const multi = (p,q) =>
{
    return p*q;
}

const divis = (p,q) =>
{
    if (p>q)
    {
        return p/q;
    }

    else
    {
        return q/p;
    }
}

const input = 'Input is 10 and 5 respectively';
const title = "Basic Calculator Program";
module.exports = {input,add,sub,multi,title,divis};