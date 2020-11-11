from django.shortcuts import render

def Damage(request):
	data = {
		'title' : 'Damage',
	}
	return render(request, 'Damage/index.html', data)
