from django.shortcuts import render

def Score(request):
	return render(request, 'Score/index.html')
