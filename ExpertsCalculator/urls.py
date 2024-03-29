from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('Energy/', include('Energy.urls')),
    path('Damage/', include('Damage.urls')),
    path('Less/', include('Less.urls')),
    path('Score/', include('Score.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)