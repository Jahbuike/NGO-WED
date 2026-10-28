from django.shortcuts import render

# 1. Home Page
def home(request):
    return render(request, 'foundation/index.html')

# 2. Project Detail (Unified into one function)
def project_detail(request, project_id):
    if project_id == 1:
        context = {
            'title': 'St. Josh Rural Hospital',
            'description': 'Providing 24/7 emergency care and maternity services.',
            'impact': '2,000+ children treated this year.',
            'image_url': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d'
        }
    elif project_id == 2:
        context = {
            'title': 'Clean Water Initiative',
            'description': 'Building solar-powered boreholes for remote villages.',
            'impact': '5 villages now have access to safe drinking water.',
            'image_url': 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e'
        }
    else:
        context = {
            'title': 'Project Coming Soon', 
            'description': 'Stay tuned!',
            'impact': 'Future impact pending.',
            'image_url': ''
        }

    return render(request, 'foundation/project_detail.html', context)

# 3. About Page
def about(request):
    return render(request, 'foundation/about.html')

# 4. Impact Page
def impact(request):
    return render(request, 'foundation/impact.html')

# 5. Donate Page
def donate(request):
    return render(request, 'foundation/donate.html')