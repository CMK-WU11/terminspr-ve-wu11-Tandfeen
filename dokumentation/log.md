# LOGBOG

Brug denne logbog til at holde styr på dine commits.

Udfyld hver dag. Det er vigtigt at du overholder denne logbog - du kan risikere at dumpe, hvis du ikke bruger den.  
Skriv tidspunkt for dit commit ud for hver dag, både morgen og aften.  
Husk, at du ikke må arbejde på din opgave mellem kl. 16:00 og kl. 8:00.

## Tecstack
Next.js
ESLint
Tailwindcss
Typescript
Postcss

- typescript
- @types/node
- @types/react
- @types/react-dom
- postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc

## Projektstruktur og konventioner
### Top-level folders
app	    App Router
pages	Pages Router
public	Static assets to be served
src	    Optional application source folder

|-src
    |-app
    |-pages
|-public

### Top-level files
next.config.js	    Configuration file for Next.js
package.json	    Project dependencies and scripts
instrumentation.ts	OpenTelemetry and Instrumentation file
middleware.ts	    Next.js request middleware
.env	            Environment variables
.env.local	        Local environment variables
.env.production	    Production environment variables
.env.development	Development environment variables
.eslintrc.json	    Configuration file for ESLint
.gitignore	        Git files and folders to ignore
next-env.d.ts	    TypeScript declaration file for Next.js
tsconfig.json	    Configuration file for TypeScript
jsconfig.json	    Configuration file for JavaScript

### Routing files
layout	        .js .jsx .tsx	Layout
page	        .js .jsx .tsx	Page
loading	        .js .jsx .tsx	Loading UI
not-found	    .js .jsx .tsx	Not found UI
error	        .js .jsx .tsx	Error UI
global-error	.js .jsx .tsx	Global error UI
route	        .js .ts	        API endpoint
template	    .js .jsx .tsx	Re-rendered layout
default	        .js .jsx .tsx	Parallel route fallback page

### Nested routes
folder	        Route segment
folder/folder	Nested route segment

### Dynamic routes
[folder]	    Dynamic route segment
[...folder]	    Catch-all route segment
[[...folder]]	Optional catch-all route segment

### Route groups and private folders
(folder)	Group routes without affecting routing
_folder	    Opt folder and all child segments out of routing

### Parallel and intercepted routes
@folder	        Named slot
(.)folder	    Intercept same level
(..)folder	    Intercept one level above
(..)(..)folder	Intercept two levels above
(...)folder	    Intercept from root

### Metadata file conventions
favicon	    .ico	                    Favicon file
icon	    .ico .jpg .jpeg .png .svg	App Icon file
icon	    .js .ts .tsx	            Generated App Icon
apple-icon	.jpg .jpeg, .png	        Apple App Icon file
apple-icon	.js .ts .tsx	            Generated Apple App Icon

### Open graph and twitter images
opengraph-image	.jpg .jpeg .png .gif	Open Graph image file
opengraph-image	.js .ts .tsx	        Generated Open Graph image
twitter-image	.jpg .jpeg .png .gif	Twitter image file
twitter-image	.js .ts .tsx	        Generated Twitter image

### SEO
sitemap	.xml	Sitemap file
sitemap	.js .ts	Generated Sitemap
robots	.txt	Robots file
robots	.js .ts	Generated Robots file

## Dag 1

Morgen - (10:28)  

    - Opstilling af projektets generelle struktur og dets     nødvendige filer.

    - Skab generel dokumentation


Eftermiddag - (tidspunkt)

## Dag 2

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 3

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 4

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 5

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)
