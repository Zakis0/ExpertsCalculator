from django.shortcuts import render

def Score(request):
	data = {
		'title' : 'Score',
	}
	return render(request, 'Score/index.html', data)
