# Improving the GraphQL and Django ecosystem

## Table of contents

- [Improving the GraphQL and Django ecosystem](#improving-the-graphql-and-django-ecosystem)
  - [Table of contents](#table-of-contents)
  - [Abstract](#abstract)
    - [But why should we focus on GraphQL then?](#but-why-should-we-focus-on-graphql-then)
    - [Advantages of GraphQL over traditional REST](#advantages-of-graphql-over-traditional-rest)
    - [But it is not all sunshine and unicorns for GraphQL](#but-it-is-not-all-sunshine-and-unicorns-for-graphql)
  - [The new project](#the-new-project)
    - [Backend](#backend)
    - [Some examples](#some-examples)
  - [Schedule and milestones](#schedule-and-milestones)
  - [About Me](#about-me)
    - [Relevant work](#relevant-work)
    - [Socials](#socials)
  - [Conclusion](#conclusion)

## Abstract

The world of web development is constantly evolving and making leaps and bounds in
developing new technologies to make the lives of developers easier and development faster.
GraphQL is one such technology. It provides a complete and understandable description of
the data in your API, gives clients the power to ask for exactly what they need and nothing
more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Despite there being a few tools to integrate GraphQL with Django, the community stance
towards their union is "it could be much better". This is expected, since though these
tools exist, they are not made with the best developer interests in mind. Their development
is very slow if not completely unmaintained. Unfortunately this pitiable condition of
Django and GraphQL turns many developers away from using Django for their GraphQL projects.

### But why should we focus on GraphQL then?

GraphQL simplifies the workflow to build mobile optimized websites and client applications
such as iOS, Android, React-Native. The customer interaction with the product or the
service increases significantly if they have the capability to access it via their phones,
leading to an increase in their revenue. There are over 2.5 billion smartphone users today,
and this is projected to rise in the future. This makes it even more important for mobile
web-apps to be responsive and with low latency. It is equally important to build these apps
fast. This is where GraphQL comes handy. It helps clients fetch the right amount of data
needed to render the view. GraphQL lets clients define the shape of the response for each
request. In addition to this, it removes the complexity of API Endpoint management on these
clients, as it exposes a single HTTP Endpoint (and is usually `/graphql`) to fetch the
required data.

### Advantages of GraphQL over traditional REST

When using a REST API to fetch information, you’ll always get back a complete dataset. For
example, if you wanted to request information from two objects, you’d need to perform two
REST API requests. The advantage of REST APIs is its simplicity—you have one endpoint that
does one task, so it’s easy to understand and manipulate. In other words, if you have `X`
endpoints, it provides `X` data.

Conversely, if you wanted to gather some information from a specific endpoint, you couldn’t
limit the fields that the REST API returns; you’ll always get a complete data set. This
phenomenon is referred to as over fetching. GraphQL uses its query language to tailor the
request to exactly what you need, from multiple objects down to specific fields within each
entity. GraphQL would take `X` endpoint, and it can do a lot with that information, but you
have to tell it what you want first.

In essence, GraphQL is extremely powerful. Because you are only fetching the data that you
require, you limit the amount of processing required. As you begin to look at automation,
these savings really start to add up.

### But it is not all sunshine and unicorns for GraphQL

REST has become the industry standard for companies deploying APIs. REST endpoints are
mature and have been around for a while. Even "late-to-scene" OEMs have REST endpoints now,
and if you have done any type of automation, you’re going to be familiar with REST.

Similarly, API analytics are easier to obtain for REST, due to the limited amount of
tooling for GraphQL. But that is exactly what this project aims to remedy.

## The new project

The new project will aim to make it easier to work with Django and GraphQL. It would be
tightly coupled with django's existing concept and foolproof concepts of **Views** and
**Models**. Just like _django-rest-framework_ has class based views like **DetailView**,
**ListView** and the other [concrete view
classes](https://www.django-rest-framework.org/api-guide/generic-views/#concrete-view-classes),
I would like to implement them in this package.

Next, I plan to tackle authentication using both token and then using JWT. I have already
implemented a package to achieve token based authentication using
[this](https://github.com/IgnisDa/ariadne-token-auth) package and I plan to integrate it
with this new project itself. JWT is slightly trickier for me and I would have to carefully
plan how to go about implementing it.

Pagination is another complex topic which takes some time to develop schemas for. Though I
have not figured out how to actually implement this yet, I will try to develop a basic plan
to do it efficiently.

Exception handling is another core feature that needs to be taken special care of. As
mentioned in
[this](https://stackoverflow.com/questions/59729656/http-status-code-handling-in-graphql-apis/59733362#59733362)
answer, GraphQL generally returns a status code of either 200 OR 500 (if something went
really bad). Since it is not possible for clients to check if a request actually succeeded
on the basis of the returned status code, it becomes imperative to return error messages
that clearly explain what went wrong. I plan to make error handling a breeze by making some
helper modules.

Though there are existing (and arguably better) packages to do, I have also planned on
creating [serializers](https://www.django-rest-framework.org/api-guide/serializers/), if
time permits me.

### Backend

Finally, I have decided to build this package on top on
[ariadne](https://github.com/mirumee/ariadne) and not
[graphene-django](https://github.com/graphql-python/graphene-django). This is because there
are various design flaws in the latter which make it very unwieldy to use, especially while
trying to return errors in your response. Though ariadne is newer compared to graphene, it
is generally, in my experience, more stable, easier to use and also support file uploads.

I intend to keep following ariadne's [schema
first](https://ariadnegraphql.org/docs/0.5.0/modularization#defining-schema-in-graphql-files)
approach. This might initially seem like a trade-off since the developers would have to
learn the [GraphQL
SDL](https://www.digitalocean.com/community/tutorials/graphql-graphql-sdl). Code first
approach (the one graphene-django) follows looks easy at first, but is not scalable and
quickly comes back to bite developers. [Here](https://www.youtube.com/watch?v=smWdR2Gf3GE)
is a video, where Marcin describes how his team had to basically write an entirely new
django-graphql package due to graphene-django's in-extensibility. Moreover, since GraphQL is
quite easy to learn, this won't be a major problem.

Some basic features like file uploads are [not
supported](https://docs.graphene-python.org/en/latest/execution/fileuploading/) out of the
box in django-graphene which makes me loath to use it. In my experience, exception handling
is a major pain to tackle due to its tightly coupled and interdependent architecture.
Essentially, if you have to implement anything that is a little bit out of the box, you
will find yourself writing code from scratch. As we know, developers are lazy and avoid
writing code from scratch.

### Some examples

Here is an short example that describes how this package would work.

> It's so easy that you already know how to do it!

**_Note_**: The package would be named `django_ariadne`, though I am open to suggestions.
Some imports and other obvious code is omitted for the sake of brevity.

```python
# my_app/models.py
class Todo(models.Model):
  title = models.TextField(max_length=500)
  author = models.ForeignKey("User", on_delete=models.CASCADE, related_name="user")
  added_on = models.DateField(auto_now_add=True)

# my_app/resolvers.py
# notice how imports are made from exactly where you'd expect to import them from in vanilla
# django; this will ease developer experience
from django_ariadne.resolvers.generic import ListResolver, DetailResolver
from django_ariadne.contrib.auth.mixins import LoginRequiredMixin

class TodoListResolver(LoginRequiredMixin, ListResolver):
  """ This resolver will return all the todos of the currently logged in user. If the
  request is made by an unauthenticated user, a PermissionDeniedError will be raised
  and a response with a status code of 500 will be sent back. """
  model = Todo
  paginate_by = 15

  def get_queryset(self, *args, **kwargs):
    return self.model.objects.filter(author=self.request.user)

class TodoDetailResolver(DetailResolver):
  """ This resolver will return the todo by its `title`. If no match is found, a response
  will be sent back with the status code of 200 and, with an `errors` key populated with the
  error(s) encountered. """
  def get_object(self):
    return self.model.objects.get(title=self.kwargs.get("title"))
```

As you can see, this short example covers all the areas that this project aims to solve -
generic resolver handling, pagination, authentication, exception handling and serializers
(they will have a well documented API so that they are easily extensible) as well.

## Schedule and milestones

The coding period of GSoC is June 7, 2021 - August 16, 2021, which is 10 weeks. Here is how
I plan to distribute my time:

**_Note_**: I intend to follow a Test Driven Development (though not always, I am, after-all,
a lazy developer :P), so tests and documentation will be taken care of simultaneously.

- **Week 1**: Project initialization and README information. Also CI setup to take care of
  running tests, and publishing to PyPI automatically.
- **Week 2**: Integrate authentication- Since I already have a package that handles
  authentication with django and ariadne, this should logically be the first step. Common
  functionalities like decorators and mixins will also be covered here. I will try to also
  provide a JWT authentication backend but since the solutions out there are not really
  good, this might take more time. If time does not permit, I will leave it for the time
  being and come back to it during the final weeks.
- **Week 3 and Week 4**: Writing the generic resolvers, (for example: `TodoDetailResolver`
  mentioned earlier). You might be asking - "Why so much time? You just need to copy the
  django generic views code-base!". Even though they might look similar, I don't think it
  would be easy to implement them with similarly at the logic level. This is because the
  django views don't really care a lot about errors, they generally add them to `context`
  and leave it to the user to display these errors in the templates. This package needs to
  handle this carefully and elegantly.
- **Week 5 and Week 6**: Exception handling which will go hand-in-hand with the class based
  resolvers will also need a lot of time and careful thought to implement. Additionally,
  testing needs to be extensive and regressive here since clients often depend on these
  errors completely and often without validation.
- **Week 7 and Week 8**: Serializers and model coupling. I don't plan to reinvent the wheel
  here. I believe the _django-rest-framework_ handles serializers very effectively and I
  plan to integrate a lot of code from there without actually adding it as a project dependency.
- **Week 9 and Week 10**: Final touch ups and finishing up. Document and add tests wherever
  I hadn't been able to in the past weeks. I plan to take extensive feedback from my mentor
  as they point out the various flaws that are bound to crop up in this complex project.

## About Me

My name is Aditya Pratap Singh and I am a first year student in Bennett University situated
in Greater Noida, India. My time zone is GMT+5:30 and I live in Delhi. I have been
programming in Python for over 2 years now. I also know C, C++, Javascript, Rust and a bit
of Java. I have been involved in web development for 1.5 years now and Django was the first
web framework I worked with. I have worked with various other frameworks since, and my love
for Django has only increased with time.

My preferred language of communication is English and I favor written communication via
email, etc.

### Relevant work

As mentioned in the [About Me](#about-me) section, I have worked with web development for
quite some time now, and consequently with various GraphQL based projects too.

1. **[ariadne-token-auth](https://github.com/IgnisDa/ariadne-token-auth)**: A Django app to
   implement token based authentication in Ariadne GraphQL.
2. **[mdgen](https://github.com/IgnisDa/python-random-markdown-generator)**: Python library
   to generate random markdown text, especially useful for Django models.
3. **[Gitzer](https://github.com/IgnisDa/Gitzer)**: A web based client for simple git
   operations.
4. **[Habitrac](https://github.com/IgnisDa/habitrac)**: A website to help you track your
   habits elegantly.
5. **[My portfolio website](https://github.com/IgnisDa/devmrfitz.me)**: Though not completed
   yet, this project also uses GraphQL and Django. I have taken a hiatus from it to focus
   on GSoC for the time being.
6. **[PR to Zulip](https://github.com/zulip/zulip/pull/17098)**: Zulip is an open source
   team chat. This PR doesn't concern Django or GraphQL but since the zulip core is written
   in django, I decided to include this PR here.

In addition to the above, I am also highly active in the Django-developers mailing list (my
name there is Aditya Pratap Singh and email is diptesh.choudhuri@gmail.com) and the r/django
reddit community.

### Socials

- Email: diptesh.choudhuri@gmail.com
- LinkedIn: [Aditya Pratap Singh](https://www.linkedin.com/in/diptesh-choudhuri-0647501b9)
- Github: [IgnisDa](https://github.com/IgnisDa/)
- Discord: @IgnisDa#5244

My nickname is IgnisDa and you can find me on most platforms with the same name.

## Conclusion

I can work calmly and efficiently under pressure and within strict deadlines. I love
meeting new people and am comfortable talking to new people, something which GSoC
definitely encourages. If I am chosen, I will give my absolute best to complete the project
on time, and create a package that could make the lives of a lot of developers easier.
