from django.shortcuts import render
from E_Commerce_App.models import Category, Product
# Create your views here.
def index(request):
    category = Category.objects.all()
    product = Product.objects.all()
    categoryID = request.GET.get('category')
    if categoryID:
        product = Product.objects.filter(sub_category = categoryID)
    else:
        product = Product.objects.all()
    context = {
        'category': category,
        'product': product
    }
    return render(request, 'index.html', context)
