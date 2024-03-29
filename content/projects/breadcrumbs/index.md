---
title: 'Breadcrumbs'
subtitle: 'Taking you where you need to be, and back'
status: 'completed'
---

## A little back-story

On my trip to the United States, I lived in a small town called Canton in Ohio. The scenery
around the place was absolutely mesmerizing- green fresh jungles, small streams, kind and
exuberant people and beautiful localities with massive houses. Naturally, with all this
beauty around me, I wanted to explore, especially the nearby jungle. It took some time to
convince my parents, but they finally agreed and I put on my shoes and went off
"exploring".

_Pretty soon I was lost_. And since it was a jungle, there wasn't anyone to help me find my
way back home.

### Introduction

Whenever we explore some new place, one thought always keeps nagging us throughout the
trip. "What will I do if I get lost? Who will help me here?" The problem becomes worse if
you're in a place where there aren't a lot of people, or they don't speak your language.
Moreover you are here to enjoy your time, and problems like these quickly decrease the
quality of the trip.

Breadcrumbs is a one of its kind cross platform service that aims to solve this problem.

Lets start by what the word means.

    breadcrumbs: a series of connected pieces of information or evidence

`Breadcrumbs` does exactly that for you- it aggregates large pieces of information (location
of a landmark, restaurants in a place etc.) into consumable, bite sized chunks.

### Business idea

Whenever you are exploring a new place, you start up the `Breadcrumbs` service on your device
(could be your phone or a smartwatch). That's all you as a user have to do.

`Breadcrumbs` tracks your movement in the background and simultaneously creates a virtual
trail of "breadcrumbs" on a map of the place you are in. These _breadcrumbs_ will appear as
a pulsing blue line from where you are right up to where you need to go. When you return,
you just have to follow these breadcrumbs back to your home.

This enables you to explore a new place without having worrying about getting lost or not
being able to find your way back home.

The services will primarily integrate with portable devices like mobile phones,
smartwatches, IOS devices, IOS smartwatches, smart earphones and headphones and other such
wearables.

This is the core idea. We do not plan to have a lot of features initially because its
important to focus on one plan and implement it perfectly, instead of trying to solve
everything at once, which never works.

### Revenue generating features that will be implemented

1. We plan to have a **story** system like Instagram where people can put their own
   thoughts about the place they are exploring using our platform. Places of interest,
   nearby restaurants and monuments would be reported by the users themselves which would
   be saved to our databases for later processing.

2. Security risks are something many people are highly concerned about (as they should be)
   and our platform will tell you when are going when into a high risk area. A high risk
   area is anywhere which has a high crime incidence. The reports would be generated by the
   inputs given by our users, making it self sufficient and self sustaining.

3. At the end of each **Trail** (our term for a completed exploration), the user would be
   prompted to give a brief review about their **Trail** and how much they liked it. These
   anonymous reports would be saved to our databases which will later be used to generate
   suggestions and recommendations to satisfy the user's exploration thirst.

4. Initially, this service will only be limited to people exploring on foot, but as we
   eventually gain traction, we will expand it to other modes of transportation including
   (but not limited to) cars, buses, motorcycles, bicycles etc. This will help increase
   `Breadcrumbs` reception among the general populace.

5. A trip planner tool which will help you plan an epic trip, recommending areas of
   interest on the path right up to the destination. It will have a real time navigation
   feed like services like Google Maps do, and suggest restaurants, rest rooms, markets tc.

NOTE: **All the above features will be made available to our premium users only.**

### Market demand

To determine the market demand for our product, we first need to find out what our customer
base and target group is. We plan on targeting a very niche market- the market of the
enthusiasts. These are the people who love exploring the world around themselves- be it on
foot or using a vehicle.

They can be from any age group- all people love to explore and discover new places old or
young. Though our market is very niche and specific, our service can also be used by all
kinds of income groups- because our core service of helping people explore the world will
always remain free.

Since our core service is free, we estimate the market demand to be quite high and in our
favor. We plan to make the paid version of our service jam packed with features (see
[above](#revenue-generating-features-that-can-be-implemented)) that would make it
irresistible to everyone.

### Relevant products in the market

The first product that comes to mind when we think of our competitors is [Google
Maps](https://www.google.com/maps). Other similar services like [Map
Quest](https://www.mapquest.com/), [Waze](https://www.waze.com/), [Bing
Maps](https://www.bing.com/maps),
[Maps.me](https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro) and
[OpenStreetMap](https://www.openstreetmap.org) also exist in the market and could be our
fierce competitors.

Each one of the services mentioned above have their own caveats. Some are too heavy with
their application size, some have too many features to the point of an overcomplicated UI
which confuses and turns away first time users, some have overly expensive paid tiers which
do not actually make up for the features these tiers provide.

### How are we different?

So how are we different from the thousands of similar services out there? Its simple- we
focus on the user instead of the market. We listen to what they need instead of what we
think they need.

We also aim to make our platform full of social interaction, something that all the
aforementioned services lack. People can upload their trip **memories** on `Breadcrumbs`
which other users can view, like, comment and share. By doing this, we will be keeping our
users hooked on, and have a higher conversion rate from a non paying to a paying customer.

The [Stories](#revenue-generating-features-that-can-be-implemented) feature that we plan to
introduce will be an absolute game changer for this market. Services like
[Instagram](https://www.instagram.com/) and [TikTok](https://www.tiktok.com/en/) have
repeatedly proved that people prefer watching bite sized videos (about 15 seconds). Indeed
this is the strategy that helped
[Instagram](https://hotinsocialmedia.medium.com/why-instagram-stories-is-a-game-changer-24c35f8151ae)
rise to the massive popularity that it enjoys today. We will be riding on the shoulders of
these giants and use these time tested ways of gaining the upper hand in a very competitive
market.

### Technologies to be used

The first and probably the most important piece of technology we need will be
the maps that would be served to the users.
[Google Maps Platform](https://developers.google.com/maps/documentation) is a free API for
exactly this purpose.

Since we aim to make our service available to anyone with a device, we need to make sure
that it is completely cross platform (available on Windows, Mac, Linux, Android, IOS etc).
The best solution to this is making a webapp. A webapp (or a website) is available to all
these devices. The recent advent of [PWAs](https://web.dev/progressive-web-apps/) will also
help make our website mobile friendly. We plan to use [Vue](https://vuejs.org/) as our
frontend and [Django](https://www.djangoproject.com/) as the backend framework.

Eventually though, we will have to move on from webapp to native support. This might have
required us to write multiple codebases for different platforms before. However with the
rise of technologies such as [Dart](https://dart.dev/) and [Flutter](https://flutter.dev/)
have made it easy to maintain a single codebase which can be deployed to all platforms.
They will be mapped to the `Breadcrumbs` servers which will be running a
[GraphQL](https://graphql.org/) API and serve data to these devices.

Fortunately, it [looks
like](https://medium.com/flutter-community/flutter-building-wearos-app-fedf0f06d1b4)
Flutter is also capable of making apps for Wear OS, the primary OS used in Android
smartwatches .

So, to sum up all the technologies that we _plan_ to use:

1. **Google Maps Platform**: agile experiences that bring the real world to you with static
   and dynamic maps, _Street View_ imagery, and 360° views (Javascript)
2. **Django**: a web framework (Python)
3. **Vue**: a frontend framework (Javascript)
4. **GraphQL**: a query language for APIs (Python/Javascript)
5. **Flutter**: toolkit for building natively complied application for mobile, web and
   desktop from a single codebase (Dart)
6. **PostgreSQL**: powerful, open source object-relational database system (SQL)

### Computational solution

![computational solution
image](https://raw.githubusercontent.com/IgnisDa/devmrfitz.me/development/frontend/content/projects/breadcrumbs/breadcrumbs-working.png)

### Estimated budget

Most of our expenses would be focused on maintaining the codebase and implementing new
features. We will be assigning about 40% of our budget to this and paying the employees
that will be working on it. Next, 30% will be spent on advertisement to get as many users
for our platform as possible. The rest 30% will be spent on miscellaneous tasks such as
office rent, maintenance etc.

### Product pricing

The core feature of our service will be absolutely free. As for our paid features, we plan
to divide them into 4 different levels (prices in local equivalent):

1. **Individual**: _₹119/month_. Ad-free. Integration with streaming services like Spotify
   (music) and PlayerFM (podcasts) etc. Download maps for offline use. For a single device.
2. **Duo**: _₹149/month_. All the features of _Individual_ accounts. For two devices.
3. **Family**: _₹179/month_. All the features of _Individual_ accounts. For six devices.
4. **Student**: _₹59/month_. For students who can't spend a lot on miscellaneous purchases.
   All the features of _Individual_ accounts.

In addition, these premium customers will also get tailored customer support which they can
use to resolve any queries or issues they have about the service.

### Marketing plan

Our primary marketing strategy would be using ads to spread word about our service. We will
supplement it using platforms such as Instagram, Facebook, Twitter, LinkedIn etc to make
sure everyone gets to know about this service which will change the way they travel.

### Risk analysis

As with any startup, this will be a high risk ventures. There are already many established
competitors in the market which do what we do pretty well. To mitigate the threat they pose
to us, we will not be competing with them on something they already do pretty well, that
is, navigation. Instead we aim to build an entire community around exploration and
adventure- a promising market that remains mostly untapped. User involvement is what sets
us apart from all other similar services out there.

There are other risks too- the service not gaining enough traction to become profitable,
not getting enough investment, bankruptcy etc. These risks will have to dealt with as and
when they come, since they are not very predictable.

### Milestones and Timeline

- **30 days**: Ideation and planning about how the service will be structured. Plan and
  polish on the core features. Get feedback about various parts of the service and improve
  accordingly. Conduct surveys to approximate how much traction it will gain.
- **60 days**: Making a working prototype of the webapp and the web server that will serve
  the `Breadcrumbs` API.
- **120 days**: Getting investors, spreading news about the service via advertisements and
  social media. Polishing the webapp, work on the codebase for the native apps
  using _Flutter_ and _Dart_.
- **10 days**: Release the webapp in its beta version. Get feedback from real users and
  adjust the webapp accordingly.
- **30 days**: Deploy the Flutter app to all platforms and make final changes to the webapp
  and the platform specific apps according to the feedbacks received.
- **30 days**: Release version 1 for the webapp and the Flutter app.

... to be continued

The total time comes out to be **280 days**, which is approximately **10 months**.

## Conclusion

Though this idea will not save lives, nor solve the problem of world poverty or bring us any
closer to find the cure for cancer, we would like to argue that all ideas are beautiful.

Adventures have always been fun and enjoyable but they always come with some risk factor
associated with them. They often end up not being fun because of improper planning
beforehand. We believe that this should not hamper the fun you have, and we aim to solve
this elegantly.
