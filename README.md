# luwa-node-sk
 luwa pack app. 
 > backend: node, ts, mongoose, and mongo. 
 > frontend: sveltekit, tailwindcss, and daisy ui


## server 
#### server root: `src/index.ts` 

- `npm install`
- `npm run dev` 
- get request `localhost:8080/api/sanity` 
- using mongo via docker with no authentication, this can be secured later on in the future. fire up a mongo docker: `docker run -d -p 27017:27017 --name mongodb mongo`


## client
#### client root: `src/routes/index.svelte`

- `npm install`
- `npm run dev -- --open` 


