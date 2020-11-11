from django.shortcuts import render

def Less(request):
	data = {
		'title' : 'Less',
	}
	return render(request, 'Less/index.html', data)
