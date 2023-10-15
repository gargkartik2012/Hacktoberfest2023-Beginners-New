var t = new Array(a.length);
var r = 4;
var b = 64;

var count = new Array(1<<r);
var pref = new Array(1<<r);

var groups = Math.ceil(b / r);

var mask = (1 << r) - 1;

var shift = 0;
for(var c = 0; c < groups; c++)
{
    shift += r;

    for(var j = 0; j < count.length; j++)
    {
        count[j] = 0;
    }

    for(var i = 0; i < a.length; i++)
    {
        count[ (a[i] >> shift) & mask ]++;
    }

    pref[0] = 0;

    for(var i = 0; i < count.length; i++)
    {
        pref[i] = pref[i-1] + count[i-1];
    }

    for(var i = 0; i < a.length; i++)
    {
        t[ pref[ (a[i] >> shift) & mask ]++ ] = a[i];
    }

    for(var i = 0; i < a.length; i++)
    {
        a[i] = t[i];
    }
    // a is sorted?
