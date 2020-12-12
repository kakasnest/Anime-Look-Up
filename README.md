# Anime-Look-Up

## Theme

My application lists anime with some basic information on them. You can filter by typing characters in the filter input. You can also favourize them so you can save the ones you like and check them under the favourites menu.

## Purpose

The reason behind this one-site-application is using the knowledge of the last semester of web development learning in the University of Sopron. The application uses **React routing, lazy loading (Suspense with fallback), built-in hooks, custom hooks, reducer, context** - basically the things you would use to build a React app nowadays. (_End of 2020_)

## API

I used the [Jikan](https://jikan.moe/) API to get the listable data on the site. Right now the application only loads 5 pages of data, which will be loaded right after you visit the page. Jikan uses the data of MyAnimeList.

## Structure

- **.env** file contains API link to query from the the best rated category and an API docs link
- **hooks** folder contains all the custom hooks
- **reducers** contains all the reducers (only one at the moment)
- **utils** contains all the contexts
- **views** contains all of the rendered components
- **AppStyle.css** contains all the styling
- **ErrorBoundary** is a custom component for error handling based on the [React docs](https://reactjs.org/docs/error-boundaries.html)

## Available functions, views, styling

Right now you can add, remove anime from your favourites and filter the anime **based on their titles**. By adding an anime to favourites it will be saved / stored in the local storage of your browser.

Right now with that you can have **three different views**:

- Home - unfiltered anime list view
- Home - filtered anime list view
- Favourites - favourized anime list view
- (Loading view if data is still not ready)

The styling was done only by normal css (keyframes were used though).
