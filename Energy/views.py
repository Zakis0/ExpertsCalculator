from django.shortcuts import render

def Energy(request):
	data = {
		'title' : 'Energy',
	}
	return render(request, 'Energy/index.html', data)
