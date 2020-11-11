from django.shortcuts import render

def Energy(request):
	return render(request, 'Energy/index.html')
