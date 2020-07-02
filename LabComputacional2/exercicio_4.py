import numpy

def simpson(xmin, xmax, N):
    
    xsum = 0
    msum = 0
    h = (xmax-xmin)/N

    for i in range(1, N):
        xsum += f(xmin + i*h)
        print(xsum)

    for i in range(0, N):
        msum += f(xmin + (h/2) + i*h)
        print(msum)

    I = (h/6) * (f(xmin) + 4*msum + 2*xsum + f(xmax))
    return I


def f(x):
    return (x**2) * numpy.sin(x)

assert numpy.isclose(simpson(xmin=0, xmax=4, N=50), 1.096591)