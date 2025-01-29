# Sonaria
A website for a non-profit music organization called Sonaria.
[https://sonaria.ca/](https://sonaria.ca/)

Although this is not one of my most complex projects, this is one of my first fully fleshed out designs/projects.
I built this project using a React and plain css on the frontend, and Node.js and Postgresql on the backend. 
All code was written in typescript, and ran through prettier in the end.
In order to host the final project, cloudflare and railway were used for the frontend and backend respectively.
A major aspect of this ship that I focused on, was search engine optimization, as this website is primarily for informational purposes.
In order to target SEO, a variety of efforts were made, such as images being converted to webp, resized, and loading set to lazy. 
In addition, backlinks were created to my other websites, and I am tracking usage statistics through cloudflare.

If anyone would like to use this website as a template, instructions are below.

1. clone the repository
2. open in your editor

Frontend - The code is divided relatively cleanly with each page/component having isolated css
1. cd frontend
2. npm run dev

Backend - A dotenv with DATABASE_URL needs to be created
1. cd backend
2. npm i
3. npm run start


