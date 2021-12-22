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

module.exports = {add,sub,multi,divis};