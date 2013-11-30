from django.shortcuts import render
from django.shortcuts import render_to_response
from django.contrib.auth import authenticate, login
from datetime import datetime

# def home(request):
#     return render(request, 'index.html')

def profile(request):
    return render(request,'profile.html')
def stock(request):
    return render(request,'stock.html')
def simple(request):    
    import random     
    import django    
    import datetime          
    from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas     
    from matplotlib.figure import Figure     
    from matplotlib.dates import DateFormatter      
    fig=Figure()     
    ax=fig.add_subplot(111)    
    x=[]
    y=[]
    now=datetime.datetime.now()
    delta=datetime.timedelta(days=1)
    for i in range(10):
        x.append(now) 
        now+=delta  
        y.append(random.randint(0, 1000))  
    ax.plot_date(x, y, '-')   
    ax.xaxis.set_major_formatter(DateFormatter('%Y-%m-%d'))   
    fig.autofmt_xdate()  
    canvas=FigureCanvas(fig)  
    response=django.http.HttpResponse(content_type='image/png') 
    canvas.print_png(response)     
    return response


def home(request):
    state = "Please log in below..."
    username = password = ''
    if request.POST:
        username = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                state = "You're successfully logged in!"
            else:
                state = "Your account is not active, please contact the site admin."
        else:
            state = "Your username and/or password were incorrect."

    return render_to_response('index.html',{'state':state, 'username': username})