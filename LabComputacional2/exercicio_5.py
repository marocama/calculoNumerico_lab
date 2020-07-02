def runge_kutta():
	C = 3000	   	
	t = 2	   		
	k = 0.5493	  	
	ti = 0	  		

	Y = C*exp(k*ti)
	X = ti
	h = (t-ti)/n
	k1, k2, k3, k4 = 0, 0, 0, 0

	i = 0
	while i < n:
		k1 = f(X, Y)
		k2 = f(X + (h/2), Y + ((h/2)*k1))
		k3 = f(X + (h/2), Y + ((h/2)*k2))
		k4 = f(X + h, Y + (h*k3))

		X = X + h
		Y = Y + (h/6)*(k1 + (2*k2) + (2*k3) + k4)

		i = i + 1

	return Y