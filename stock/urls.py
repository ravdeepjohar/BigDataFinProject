from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'stock.views.home', name='home'),
    # url(r'^stock/', include('stock.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^$', 'stock.stockspredict.views.home', name='home'),
    url(r'^profile', 'stock.stockspredict.views.profile', name='profile'),
   (r'^charts/simple.png$', 'stock.stockspredict.views.simple'),
    url(r'^admin/', include(admin.site.urls)),
)
