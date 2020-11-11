from django.shortcuts import render

def index(request):
	data = {
		'title' : 'Expert`s Calculator',
	}
	return render(request, 'main/index.html', data)